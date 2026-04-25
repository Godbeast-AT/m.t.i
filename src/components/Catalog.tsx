import React, { useState, useMemo, memo } from "react";
import { motion, AnimatePresence } from "motion/react";

import Magnetic from "./Magnetic";
import { products, Product } from "../constants/products";

const shopifyStoreDomain = ((import.meta as any).env.VITE_SHOPIFY_STORE_DOMAIN || "manish-thakur-industries.myshopify.com")
  .replace(/^https?:\/\//, "")
  .replace(/\/$/, "");
const shopifyStoreUrl = `https://${shopifyStoreDomain}`;

const filters = [
  { label: "All", value: "all" },
  { label: "Chili", value: "Chili" },
  { label: "Turmeric", value: "Turmeric" },
  { label: "Coriander", value: "Coriander" }
];

const ProductCard = memo(({ product, onQuickAdd }: { product: Product; onQuickAdd: (e: React.MouseEvent, p: Product) => void }) => {
  const primaryImage = product.images[0];
  const cardLink = product.shopifyProductUrl || shopifyStoreUrl;
  const cardContent = (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      whileHover={{ y: -10 }}
      className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-outline-variant/10 h-full"
    >
      <div className="aspect-[4/5] overflow-hidden relative bg-gradient-to-br from-[#f7efe4] via-white to-[#f0e0c2]">
        {primaryImage ? (
          <motion.img 
            initial={{ scale: 1.1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            src={primaryImage} 
            alt={product.name} 
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="w-full h-full object-contain p-5 md:p-6 mix-blend-multiply drop-shadow-[0_18px_26px_rgba(60,30,0,0.12)]"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-surface-container via-surface-container-lowest to-primary/10 flex items-center justify-center">
            <div className="text-center px-6">
              <span className="block font-noto-serif text-2xl text-on-surface mb-2">{product.name}</span>
              <span className="font-manrope text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">Photo coming soon</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
          <span className="font-manrope text-[10px] font-bold text-primary uppercase tracking-widest">{product.tag}</span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <h3 className="font-noto-serif text-xl text-on-surface">{product.name}</h3>
          <span className="font-noto-serif italic text-on-surface-variant text-sm">"{product.hindi}"</span>
        </div>
        <div className="flex justify-between items-center pt-2">
          <div className="flex flex-col">
            <span className="font-manrope text-2xl font-bold text-on-surface">{product.price}</span>
            <span className="font-manrope text-[10px] text-on-surface-variant uppercase tracking-widest">{product.weight}</span>
          </div>
          <button 
            type="button"
            onClick={(e) => onQuickAdd(e, product)}
            className="bg-surface-container text-on-surface p-3 rounded-full group-hover:bg-primary group-hover:text-on-primary transition-all cursor-pointer"
            aria-label={`Open ${product.name} on Shopify`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <Magnetic strength={0.1}>
      <a href={cardLink} rel="noopener noreferrer">
        {cardContent}
      </a>
    </Magnetic>
  );
});

ProductCard.displayName = "ProductCard";

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleQuickAdd = React.useCallback((e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = product.shopifyProductUrl || shopifyStoreUrl;
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (activeFilter === "all") return true;
      return product.type === activeFilter || product.tag === activeFilter;
    });
  }, [activeFilter]);

  return (
    <section id="catalog" className="py-24 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="font-manrope uppercase tracking-[0.3em] text-[10px] text-primary font-bold block">
              The Collection
            </span>
            <h2 className="font-noto-serif text-4xl md:text-5xl text-on-surface">Witness the <span className="italic">Resurrection.</span></h2>
            <p className="font-manrope text-on-surface-variant text-lg leading-relaxed">
              Every purchase you make isn't just a transaction; it's a vote for honesty. Support my father's comeback and taste the difference of spices ground with integrity.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-end">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2 rounded-full font-manrope uppercase tracking-widest text-[10px] font-bold transition-all cursor-pointer border ${
                  activeFilter === filter.value
                    ? "bg-primary text-on-primary border-primary"
                    : "bg-transparent text-on-surface-variant border-outline-variant/30 hover:border-primary/50"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onQuickAdd={handleQuickAdd} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
