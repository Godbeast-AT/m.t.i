import React from "react";
import { motion } from "motion/react";

export default function Story() {
  return (
    <section id="our-story" className="bg-surface py-32 overflow-hidden relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none">
        <span className="font-manrope text-[10px] uppercase tracking-[1em] text-primary/20 [writing-mode:vertical-lr] font-bold">
          MANISH THAKUR INDUSTRIES • SINCE 1989
        </span>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl shadow-sm w-full aspect-square bg-[radial-gradient(circle_at_top,rgba(201,134,40,0.5),rgba(92,45,12,0.85))] border border-white/10"
              />
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="mb-12 rounded-xl shadow-sm w-full aspect-square bg-[radial-gradient(circle_at_top,rgba(94,58,22,0.35),rgba(20,20,20,0.88))] border border-white/10"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-on-primary p-8 rounded-2xl hidden md:block shadow-xl">
              <span className="font-noto-serif text-4xl italic block mb-1">1989</span>
              <span className="font-manrope uppercase tracking-widest text-[10px] font-bold opacity-80">Heritage of Truth</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="font-manrope uppercase tracking-[0.3em] text-[10px] text-primary font-bold block">
                The Resurrection
              </span>
              <h2 className="font-noto-serif text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight">
                A Legacy Reclaimed from <br />
                <span className="italic text-primary">the Ashes of 20 Lakhs.</span>
              </h2>
            </div>

            <div className="font-manrope text-on-surface-variant space-y-6 text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              >
                My father, Manish Thakur, is a man whose kindness was often mistaken for weakness. In 1989, he built an empire of purity. But the world isn't always kind to honest men.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              >
                High interest, bad luck, and a mountain of 20-lakh debt forced him to shut his doors. When the factory lights went out, the "family" we trusted walked away. I watched him lose everything, but I never watched him lose his soul.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
                className="font-noto-serif italic text-2xl text-on-surface border-l-4 border-primary pl-6 py-2"
              >
                "If I am going to be broke, I'd rather be broke selling the truth than get rich selling lies."
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
              >
                Today, we are back. Not as a corporation, but as a family. My father at the grinder, my mother ensuring every batch is sacred, and me—telling the world that the truth still has a taste.
              </motion.p>
            </div>

            <div className="flex gap-12 pt-4">
              <div className="space-y-1">
                <span className="font-noto-serif text-3xl text-on-surface block">1989</span>
                <span className="font-manrope uppercase tracking-widest text-[10px] text-on-surface-variant font-bold">Inception</span>
              </div>
              <div className="space-y-1">
                <span className="font-noto-serif text-3xl text-on-surface block">20L</span>
                <span className="font-manrope uppercase tracking-widest text-[10px] text-on-surface-variant font-bold">Debt Overcome</span>
              </div>
              <div className="space-y-1">
                <span className="font-noto-serif text-3xl text-on-surface block">2</span>
                <span className="font-manrope uppercase tracking-widest text-[10px] text-on-surface-variant font-bold">Father & Son</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
