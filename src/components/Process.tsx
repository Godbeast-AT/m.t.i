import React from "react";
import { motion } from "motion/react";

const steps = [
  {
    title: "No Fillers, No Lies",
    hindi: "मिलावट मुक्त",
    description: "Big brands use wood dust and artificial colors. We use only the truth. If it isn't good enough for my mother’s kitchen, it doesn't leave our doors.",
    image: "https://picsum.photos/seed/mti-pure-spices/800/600"
  },
  {
    title: "Slow Stone Grinding",
    hindi: "धीमी पत्थर पिसाई",
    description: "We use the same slow-grinding methods my father perfected in 1989. High-heat grinding kills oils; our process preserves the soul of the spice.",
    image: "https://picsum.photos/seed/mti-stone-chakki/800/600"
  },
  {
    title: "Family Integrity",
    hindi: "पारिवारिक ईमानदारी",
    description: "We work independently. No middlemen, no toxic outside influence. Just a father and son ensuring that what enters your home is sacred.",
    image: "https://picsum.photos/seed/mti-family-kitchen/800/600"
  }
];

export default function Process() {
  return (
    <section id="our-process" className="bg-surface-container py-24">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 space-y-4">
          <span className="font-manrope uppercase tracking-[0.3em] text-[10px] text-primary font-bold block">
            The M.T.I. Standard
          </span>
          <h2 className="font-noto-serif text-4xl md:text-5xl text-on-surface">Grinding Honesty, <span className="italic">Not Just Spices.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="aspect-video overflow-hidden relative">
                <motion.img 
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-noto-serif text-xl text-on-surface">{step.title}</h3>
                  <span className="font-noto-serif italic text-primary text-sm">{step.hindi}</span>
                </div>
                <p className="font-manrope text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
