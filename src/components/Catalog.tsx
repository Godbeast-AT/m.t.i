import React from "react";
import { motion } from "motion/react";

const products = [
  {
    name: "Premium Chili Powder",
    hindi: "प्रीमियम मिर्च पाउडर",
    price: "₹249",
    weight: "250g",
    images: [
      "https://r.jina.ai/i/06805125345749778292888636888494",
      "https://r.jina.ai/i/06805125345749778292888636888495",
      "https://r.jina.ai/i/06805125345749778292888636888496",
      "https://r.jina.ai/i/06805125345749778292888636888497",
      "https://r.jina.ai/i/06805125345749778292888636888498"
    ],
    tag: "Best Seller"
  },
  {
    name: "Stone-Ground Turmeric",
    hindi: "पत्थर पिसी हल्दी",
    price: "₹189",
    weight: "200g",
    images: ["https://picsum.photos/seed/turmeric-pack/600/800"],
    tag: "Authentic"
  },
  {
    name: "Premium Coriander Powder",
    hindi: "प्रीमियम धनिया पाउडर",
    price: "₹149",
    weight: "200g",
    images: [
      "https://r.jina.ai/i/06805125345749778292888636888504",
      "https://r.jina.ai/i/06805125345749778292888636888505",
      "https://r.jina.ai/i/06805125345749778292888636888506",
      "https://r.jina.ai/i/06805125345749778292888636888507",
      "https://r.jina.ai/i/06805125345749778292888636888508"
    ],
    tag: "Fresh"
  },
  {
    name: "Indore Special Blend",
    hindi: "इंदौर स्पेशल ब्लेंड",
    price: "₹299",
    weight: "150g",
    images: ["https://picsum.photos/seed/blend-pack/600/800"],
    tag: "Signature"
  }
];

function ProductCard({ product, index }: { product: typeof products[0], index: number, key?: string }) {
  const [currentImage, setCurrentImage] = React.useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-container mb-6 shadow-lg">
        {/* Fallback Background */}
        <div className="absolute inset-0 bg-surface-container-high flex items-center justify-center">
          <span className="text-primary/20 font-noto-serif italic">M.T.I Quality</span>
        </div>

        <div 
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out" 
          style={{ 
            transform: `translateX(-${currentImage * 100}%)`,
            width: `${product.images.length * 100}%` 
          }}
        >
          {product.images.map((img, i) => (
            <div key={i} className="h-full relative w-full">
              <img 
                src={img} 
                alt={`${product.name} ${i + 1}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                style={{ opacity: 0, transition: "opacity 0.5s ease-in" }}
              />
            </div>
          ))}
        </div>
        
        {product.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all z-20 hover:bg-primary hover:text-white shadow-xl"
              aria-label="Previous image"
            >
              <span className="text-sm">←</span>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all z-20 hover:bg-primary hover:text-white shadow-xl"
              aria-label="Next image"
            >
              <span className="text-sm">→</span>
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrentImage(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${currentImage === i ? 'bg-primary w-6' : 'bg-primary/20 hover:bg-primary/40'}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute top-4 left-4 z-20">
          <span className="bg-primary text-white px-4 py-1.5 rounded-full font-manrope text-[10px] uppercase tracking-widest font-bold shadow-lg">
            {product.tag}
          </span>
        </div>
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
      </div>
      
      <div className="space-y-3 px-1">
        <span className="font-noto-serif text-primary/60 italic text-sm block">
          "{product.hindi}"
        </span>
        <div className="flex justify-between items-center">
          <h3 className="font-noto-serif text-2xl group-hover:text-primary transition-colors tracking-tight">
            {product.name}
          </h3>
          <span className="font-manrope font-extrabold text-primary text-lg">{product.price}</span>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-manrope text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">
            {product.weight}
          </p>
          <div className="w-1 h-1 rounded-full bg-outline-variant" />
          <p className="font-manrope text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">
            Stone Ground
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Catalog() {
  return (
    <section id="catalog" className="py-32 bg-surface-container-low">
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12"
        >
          <div className="max-w-3xl">
            <span className="font-noto-serif text-primary italic text-2xl mb-6 block">
              "स्वाद की विरासत।"
            </span>
            <h2 className="font-noto-serif text-6xl md:text-8xl tracking-tighter mb-8">Our Catalog</h2>
            <p className="font-manrope text-on-surface-variant leading-relaxed text-lg">
              Explore our collection of high-quality, artisanal spices defined by specific production methods and purity.
            </p>
          </div>
          <motion.button 
            whileHover={{ x: 10 }}
            className="font-manrope uppercase tracking-widest text-[10px] font-bold text-primary border-b-2 border-primary pb-2 hover:opacity-70 transition-all flex items-center gap-4"
          >
            View All Products
            <span className="text-xl">→</span>
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
