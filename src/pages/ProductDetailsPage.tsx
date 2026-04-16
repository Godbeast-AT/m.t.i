import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ShoppingBag, CheckCircle2, Plus, Minus } from "lucide-react";
import { products } from "../constants/products";
import Magnetic from "../components/Magnetic";
import { useCart } from "../context/CartContext";

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);
    }
  };

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-surface">
        <h1 className="font-noto-serif text-4xl text-on-surface mb-8">Product not found.</h1>
        <Link to="/" className="text-primary font-manrope uppercase tracking-widest text-xs font-bold">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface pt-32 pb-24">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-12"
        >
          <Link 
            to="/" 
            className="group flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors"
          >
            <div className="p-3 rounded-full border border-outline-variant/30 group-hover:border-primary transition-colors">
              <ArrowLeft size={20} strokeWidth={1.5} />
            </div>
            <span className="font-manrope uppercase tracking-widest text-[10px] font-bold">Back to Catalog</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="aspect-[4/5] rounded-3xl overflow-hidden bg-surface-container-lowest border border-outline-variant/10"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </motion.div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === idx ? "border-primary scale-95" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="font-manrope uppercase tracking-[0.3em] text-[10px] text-primary font-bold block">
                  {product.tag} • {product.weight}
                </span>
                <h1 className="font-noto-serif text-5xl md:text-6xl text-on-surface leading-tight">
                  {product.name}
                </h1>
                <span className="font-noto-serif italic text-2xl text-on-surface-variant block">
                  "{product.hindi}"
                </span>
              </div>

              <div className="text-4xl font-manrope font-bold text-on-surface">
                {product.price}
              </div>

              <p className="font-manrope text-on-surface-variant text-lg leading-relaxed max-w-xl">
                {product.description}
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {product.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="text-primary">
                    <CheckCircle2 size={20} strokeWidth={1.5} />
                  </div>
                  <span className="font-manrope text-sm text-on-surface font-medium">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* Quantity Selector */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
              className="space-y-4"
            >
              <span className="font-manrope uppercase tracking-widest text-[10px] text-on-surface-variant font-bold">Quantity</span>
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-outline-variant/30 rounded-full p-1">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-surface-container rounded-full transition-colors text-on-surface-variant"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-manrope font-bold text-on-surface">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-surface-container rounded-full transition-colors text-on-surface-variant"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Purchase Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-wrap gap-6 pt-4 relative"
            >
              <button 
                type="button"
                onClick={handleAddToCart}
                className="bg-primary text-on-primary px-12 py-5 rounded-md font-manrope font-bold uppercase tracking-widest text-xs shadow-2xl hover:bg-primary/90 transition-all cursor-pointer flex items-center gap-4"
              >
                <ShoppingBag size={18} strokeWidth={2} />
                Add to Cart
              </button>
              <button 
                type="button"
                className="border border-outline-variant text-on-surface px-12 py-5 rounded-md font-manrope font-bold uppercase tracking-widest text-xs hover:bg-surface-container transition-all cursor-pointer"
              >
                Buy Now
              </button>

              <AnimatePresence>
                {showConfirmation && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-12 left-0 flex items-center gap-2 text-primary font-manrope text-xs font-bold uppercase tracking-widest"
                  >
                    <CheckCircle2 size={16} />
                    Added to Cart
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-12 border-t border-outline-variant/10 flex gap-12"
            >
              <div className="text-center space-y-2">
                <span className="font-noto-serif text-xl text-on-surface block">100%</span>
                <span className="font-manrope text-[8px] uppercase tracking-widest text-on-surface-variant font-bold">Pure</span>
              </div>
              <div className="text-center space-y-2">
                <span className="font-noto-serif text-xl text-on-surface block">Stone</span>
                <span className="font-manrope text-[8px] uppercase tracking-widest text-on-surface-variant font-bold">Ground</span>
              </div>
              <div className="text-center space-y-2">
                <span className="font-noto-serif text-xl text-on-surface block">No</span>
                <span className="font-manrope text-[8px] uppercase tracking-widest text-on-surface-variant font-bold">Additives</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
