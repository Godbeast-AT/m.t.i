import React from "react";
import { motion } from "motion/react";

const steps = [
  {
    title: "No Fillers, No Lies",
    hindi: "मिलावट मुक्त",
    description: "Big brands use wood dust and artificial colors. We use only the truth. If it isn't good enough for my mother's kitchen, it doesn't leave our doors.",
    image: ""
  },
  {
    title: "Slow Stone Grinding",
    hindi: "धीमी पत्थर पिसाई",
    description: "We use the same slow-grinding methods my father perfected in 1989. High-heat grinding kills oils; our process preserves the soul of the spice.",
    image: ""
  },
  {
    title: "Family Integrity",
    hindi: "पारिवारिक ईमानदारी",
    description: "We work independently. No middlemen, no toxic outside influence. Just a father and son ensuring that what enters your home is sacred.",
    image: ""
  }
];

const asset = (path: string) => `${(import.meta as any).env.BASE_URL}${path}`;

export default function Process() {
  return (
    <section id="our-process" className="bg-surface py-32 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-32 space-y-4">
          <span className="font-manrope uppercase tracking-[0.3em] text-[10px] text-primary font-bold block">
            The M.T.I. Standard
          </span>
          <h2 className="font-noto-serif text-5xl md:text-6xl text-on-surface leading-tight">
            Grinding Honesty, <br />
            <span className="italic">Not Just Spices.</span>
          </h2>
        </div>

        <div className="space-y-40">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="relative w-full lg:w-1/2">
                <span className="absolute -top-12 -left-8 lg:-top-20 lg:-left-16 font-noto-serif font-black text-[120px] lg:text-[200px] text-primary/5 leading-none select-none z-0">
                  0{index + 1}
                </span>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                  className="relative z-10 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/10 bg-[radial-gradient(circle_at_top,rgba(238,205,145,0.45),rgba(94,58,22,0.88))]"
                >
                  {index === 1 && (
                    <img
                      src={`${(import.meta as any).env.BASE_URL}images/grinding-stone.jpg`}
                      alt="Grinding spices with a traditional stone mill"
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                </motion.div>
                <div className={`absolute -bottom-8 ${index % 2 === 1 ? "-left-8" : "-right-8"} bg-surface-container-lowest p-6 rounded-2xl shadow-xl hidden lg:block border border-outline-variant/10`}>
                  <span className="font-noto-serif italic text-primary text-xl px-4">{step.hindi}</span>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="font-noto-serif text-3xl md:text-4xl text-on-surface">
                  {step.title}
                </h3>
                <p className="font-manrope text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-xl">
                  {step.description}
                </p>
                <div className="pt-6">
                  <div className="h-px w-20 bg-primary/30" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
