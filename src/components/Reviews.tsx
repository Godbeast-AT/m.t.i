import React from "react";
import { motion } from "motion/react";

const reviews = [
  {
    name: "Vikram S.",
    role: "Executive Chef",
    content: "The depth of flavor in M.T.I.'s stone-ground chili is incomparable. It's not just heat; it's a complex, smoky narrative that transforms a dish."
  },
  {
    name: "Ananya R.",
    role: "Culinary Historian",
    content: "Finding spices that haven't been stripped of their essential oils is nearly impossible today. M.T.I. is a rare guardian of authentic Indian flavor."
  },
  {
    name: "Rajesh K.",
    role: "Connoisseur",
    content: "The transparency and batch-level detail remind me of high-end horology. This is the first time I've felt a spice brand respects the ingredient."
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="text-center mb-32 space-y-8">
          <span className="font-manrope text-primary tracking-[0.5em] text-[10px] uppercase block font-bold">
            The Testimony
          </span>
          <h2 className="font-noto-serif text-4xl md:text-6xl text-on-surface">The Verdict</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="border border-outline-variant/30 p-12 space-y-8 hover:bg-surface-container-low transition-colors duration-500 rounded-3xl"
            >
              <div className="space-y-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-primary rounded-full" />
                  ))}
                </div>
              </div>
              <p className="font-noto-serif italic text-xl text-on-surface leading-relaxed">
                "{review.content}"
              </p>
              <div className="pt-8 border-t border-outline-variant/10">
                <h4 className="font-manrope text-[10px] uppercase tracking-[0.3em] text-on-surface font-bold">{review.name}</h4>
                <span className="font-manrope text-[8px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
