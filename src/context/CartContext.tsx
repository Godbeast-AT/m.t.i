import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import Client from "shopify-buy";
import { Product } from "../constants/products";
import { CartCookie } from "../utils/cookies";

// Initialize Shopify Client
const shopifyDomain = ((import.meta as any).env.VITE_SHOPIFY_STORE_DOMAIN || "your-store.myshopify.com")
  .replace(/^https?:\/\//, "")
  .replace(/\/$/, "");

const shopifyClient = Client.buildClient({
  domain: shopifyDomain,
  storefrontAccessToken: (import.meta as any).env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN || "",
  apiVersion: "2023-10", // Use a stable version
});

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  toggleCart: () => void;
  checkoutUrl: string | null;
  isShopifyConnected: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem("mti_cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      console.error("Failed to parse cart from localStorage", e);
      return [];
    }
  });

  const [checkoutId, setCheckoutId] = useState<string | null>(() => {
    try {
      return localStorage.getItem("shopify_checkout_id");
    } catch (e) {
      return null;
    }
  });

  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const isShopifyConnected = !!((import.meta as any).env.VITE_SHOPIFY_STORE_DOMAIN && (import.meta as any).env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN);

  // Sync with Shopify Checkout
  const syncWithShopify = useCallback(async (currentCart: CartItem[]) => {
    if (!isShopifyConnected) return;

    // Filter out items without proper variant IDs (ignoring the placeholder '123456789')
    const lineItemsToAdd = currentCart
      .filter(item => item.shopifyVariantId && !item.shopifyVariantId.includes("123456789"))
      .map(item => ({
        variantId: item.shopifyVariantId!,
        quantity: item.quantity,
      }));

    if (lineItemsToAdd.length === 0) {
      setCheckoutUrl(null);
      return;
    }

    try {
      let checkout: any;
      
      // Attempt to use existing checkout
      if (checkoutId) {
        try {
          checkout = await shopifyClient.checkout.fetch(checkoutId);
          // If checkout is already completed or invalid, we'll create a new one
          if (!checkout || checkout.completedAt) {
            checkout = await shopifyClient.checkout.create({ lineItems: lineItemsToAdd });
          } else {
            // Update line items: we replace them to ensure sync
            const existingLineItemIds = checkout.lineItems.map((li: any) => li.id);
            if (existingLineItemIds.length > 0) {
              await shopifyClient.checkout.removeLineItems(checkoutId, existingLineItemIds);
            }
            checkout = await shopifyClient.checkout.addLineItems(checkoutId, lineItemsToAdd);
          }
        } catch (fetchError) {
          checkout = await shopifyClient.checkout.create({ lineItems: lineItemsToAdd });
        }
      } else {
        checkout = await shopifyClient.checkout.create({ lineItems: lineItemsToAdd });
      }

      if (checkout) {
        setCheckoutId(checkout.id);
        localStorage.setItem("shopify_checkout_id", checkout.id);
        setCheckoutUrl(checkout.webUrl);
      }
    } catch (error: any) {
      console.error("Shopify Sync Details:", {
        message: error.message,
        errors: error.errors
      });
      setCheckoutUrl(null);
    }
  }, [isShopifyConnected, checkoutId]);

  // Debounced Sync
  useEffect(() => {
    localStorage.setItem("mti_cart", JSON.stringify(cart));
    CartCookie.save(cart);
    
    if (isShopifyConnected) {
      const timeoutId = setTimeout(() => {
        syncWithShopify(cart);
      }, 1000); // 1-second debounce
      return () => clearTimeout(timeoutId);
    }
  }, [cart, isShopifyConnected, syncWithShopify]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const addToCart = (product: Product, quantity: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    CartCookie.clear();
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const totalPrice = cart.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity,
      clearCart, 
      totalItems, 
      totalPrice,
      isCartOpen,
      toggleCart,
      checkoutUrl: isShopifyConnected ? checkoutUrl : null,
      isShopifyConnected
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
