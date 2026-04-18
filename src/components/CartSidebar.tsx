import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShoppingBag, Trash2, Plus, Minus, CreditCard } from "lucide-react";
import { useCart } from "../context/CartContext";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CartSidebar() {
  const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, totalPrice, totalItems, checkoutUrl, isShopifyConnected } = useCart();
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleShopifyCheckout = () => {
    setError(null);
    if (isShopifyConnected && checkoutUrl) {
      window.open(checkoutUrl, "_blank");
    } else {
      if (!isShopifyConnected) {
        setError("Shopify credentials not found. Check .env settings.");
      } else if (!checkoutUrl) {
        setError("Checkout link not ready. Ensure products have valid Shopify Variant IDs.");
      }
      setTimeout(() => setError(null), 5000);
    }
  };

  const handleRazorpayCheckout = async () => {
    setError(null);
    setIsProcessing(true);

    try {
      // 1. Create order on the server
      const response = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: totalPrice,
          currency: "INR",
          receipt: `receipt_${Date.now()}`,
        }),
      });

      const data = await response.json();

      if (!data.status) {
        throw new Error(data.message || "Failed to create Razorpay order");
      }

      const { order } = data;

      // 2. Initialize Razorpay Checkout
      const options = {
        key: (import.meta as any).env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "M.T.I - Heritage Spices",
        description: "Artisanal Spice Purchase",
        order_id: order.id,
        handler: async (response: any) => {
          // 3. Verify payment on the server
          const verifyRes = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.status) {
            alert("Payment successful! Order confirmed.");
            // Clear cart logic could go here
            toggleCart();
          } else {
            setError("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#6a0e00",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err: any) {
      console.error("Razorpay Error:", err);
      setError(err.message || "Failed to initiate payment. Check API credentials.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-surface shadow-2xl z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-outline-variant/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-primary" />
                <h2 className="font-noto-serif text-xl font-bold">Your Bag ({totalItems})</h2>
              </div>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-surface-container rounded-full transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-4 opacity-40">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="font-manrope uppercase tracking-widest text-xs font-bold">Your bag is empty</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/10 flex-shrink-0">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-noto-serif font-bold text-on-surface">{item.name}</h3>
                          <p className="font-manrope text-[10px] text-on-surface-variant uppercase tracking-widest">{item.weight}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-on-surface-variant hover:text-primary transition-colors p-1"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border border-outline-variant/30 rounded-full p-0.5">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-surface-container rounded-full transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center font-manrope text-xs font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-surface-container rounded-full transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="font-manrope font-bold text-primary">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-outline-variant/10 space-y-4 bg-surface-container-lowest">
                {/* Free Shipping Indicator */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest font-manrope">
                    <span className={totalPrice >= 999 ? "text-primary" : "text-on-surface-variant"}>
                      {totalPrice >= 999 ? "Free Shipping Unlocked" : `Add ₹${999 - totalPrice} for Free Shipping`}
                    </span>
                    <span className="text-on-surface-variant">Limit ₹999</span>
                  </div>
                  <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, (totalPrice / 999) * 100)}%` }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>

                {error && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-error-container text-on-error-container text-[10px] rounded-md font-bold uppercase tracking-widest text-center"
                  >
                    {error}
                  </motion.div>
                )}
                <div className="flex justify-between items-end">
                  <span className="font-manrope uppercase tracking-widest text-[10px] font-bold text-on-surface-variant">Subtotal</span>
                  <span className="font-manrope text-2xl font-bold text-on-surface">₹{totalPrice}</span>
                </div>
                
                <div className="space-y-3">
                  <button 
                    onClick={handleRazorpayCheckout}
                    disabled={isProcessing}
                    className="w-full bg-primary text-on-primary py-4 rounded-md font-manrope font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-primary/90 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <CreditCard size={14} />
                    {isProcessing ? "Processing..." : "Pay Now (Razorpay)"}
                  </button>

                  <button 
                    onClick={handleShopifyCheckout}
                    className="w-full border border-outline-variant text-on-surface py-4 rounded-md font-manrope font-bold uppercase tracking-widest text-[10px] shadow-sm hover:bg-surface-container transition-all cursor-pointer"
                  >
                    Checkout on Shopify
                  </button>
                </div>

                <p className="text-[8px] text-center text-on-surface-variant uppercase tracking-[0.2em]">
                  Free shipping on orders above ₹999
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
