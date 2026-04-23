import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Magnetic from "./Magnetic";

export default function Hero() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const goToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return;
    }
    navigate(`/#${sectionId}`);
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden flex items-center bg-on-surface">
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ scale }}
          className="w-full h-full bg-[radial-gradient(circle_at_top,rgba(140,87,35,0.75),rgba(17,24,39,0.96)_55%,rgba(2,6,23,1))]"
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-on-surface via-on-surface/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-transparent to-on-surface/20" />
      </div>

      <div className="absolute inset-0 z-[1]">
        <img
          src="/images/home-hero-gemini.png"
          alt="Family product and spice portrait"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-on-surface/80 via-on-surface/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/55 via-transparent to-on-surface/10" />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-screen-2xl mx-auto w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 4 }}
          >
            <span className="text-surface-container-lowest font-manrope uppercase text-[10px] mb-8 block font-bold tracking-[0.4em]">
              Established in Indore
            </span>

            <h1 className="font-noto-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-surface-container-lowest tracking-tighter leading-[0.8] mb-10 overflow-hidden">
              {"Ground by a Father.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 4.2 + (i * 0.2),
                    ease: [0.19, 1, 0.22, 1]
                  }}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {"Guided by a Son.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 4.8 + (i * 0.2),
                    ease: [0.19, 1, 0.22, 1]
                  }}
                  className="inline-block mr-4 italic text-primary"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 5.5, ease: [0.19, 1, 0.22, 1] }}
              className="font-noto-serif italic text-surface-container-low text-2xl md:text-3xl mb-10 block max-w-2xl"
            >
              "Girr kar sambhalna hi asli mard ki pehchaan hai."
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 5.8, ease: [0.19, 1, 0.22, 1] }}
              className="font-manrope text-lg md:text-xl text-surface-container-lowest/70 max-w-2xl leading-relaxed mb-12"
            >
              In 1989, my father started M.T.I. After losing everything to debt, he is back at the stone-grinder. We don't just sell spices; we sell the resilience of a man who refused to stay broken.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 6.2, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-wrap gap-6"
            >
              <Magnetic strength={0.3}>
                <button
                  type="button"
                  onClick={() => goToSection("catalog")}
                  className="bg-surface-container-lowest text-primary px-12 py-5 rounded-md font-manrope font-bold uppercase tracking-widest text-xs shadow-2xl hover:bg-primary hover:text-white transition-all cursor-pointer"
                >
                  Explore Catalog
                </button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <button
                  type="button"
                  onClick={() => goToSection("our-story")}
                  className="border border-surface-container-lowest/30 text-surface-container-lowest px-12 py-5 rounded-md font-manrope font-bold uppercase tracking-widest text-xs hover:bg-surface-container-lowest/10 transition-all backdrop-blur-sm cursor-pointer"
                >
                  Our Story
                </button>
              </Magnetic>
            </motion.div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
