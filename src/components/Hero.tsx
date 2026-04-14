import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center bg-on-surface">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          src="https://picsum.photos/seed/mti-hero-cinematic-spices/1920/1080" 
          alt="Cinematic spice grinding"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-on-surface/40 to-transparent" />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-screen-2xl mx-auto w-full">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-surface-container-lowest font-manrope uppercase text-[10px] mb-8 block font-bold tracking-[0.4em]">
              Established in Indore
            </span>
            
            <h1 className="font-noto-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-surface-container-lowest tracking-tighter leading-[0.8] mb-10">
              The Alchemy <br /> 
              <span className="italic text-primary-fixed-dim">of Heritage.</span>
            </h1>

            <p className="font-noto-serif italic text-surface-container-low text-2xl md:text-3xl mb-10 block max-w-2xl">
              "शुद्धता ही हमारी पहचान है।"
            </p>

            <p className="font-manrope text-lg md:text-xl text-surface-container-lowest/70 max-w-2xl leading-relaxed mb-12">
              In the heart of Madhya Pradesh, M.T.I preserves the true, pungent notes of Malwa through the ancient art of stone-grinding.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button className="bg-surface-container-lowest text-primary px-12 py-5 rounded-md font-manrope font-bold uppercase tracking-widest text-xs shadow-2xl hover:bg-primary hover:text-white transition-all">
                Explore Catalog
              </button>
              <button className="border border-surface-container-lowest/30 text-surface-container-lowest px-12 py-5 rounded-md font-manrope font-bold uppercase tracking-widest text-xs hover:bg-surface-container-lowest/10 transition-all backdrop-blur-sm">
                Our Story
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
