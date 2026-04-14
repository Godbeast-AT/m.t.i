import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] bg-on-surface flex items-center justify-center overflow-hidden"
        >
          {/* Cinematic Background with Ken Burns Effect */}
          <div className="absolute inset-0 opacity-40">
            <motion.img 
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 3, ease: "linear" }}
              src="https://picsum.photos/seed/mti-splash-cinematic/1920/1080" 
              className="w-full h-full object-cover grayscale"
              alt="Cinematic Spices"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
          </div>

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="space-y-6 px-6"
            >
              <h2 className="text-surface-container-lowest font-noto-serif text-4xl sm:text-5xl md:text-7xl tracking-[0.2em] italic">
                M.T.I
              </h2>
              <div className="h-[1px] w-24 bg-primary mx-auto" />
              <p className="text-surface-container-lowest/60 font-manrope uppercase tracking-[0.5em] text-[10px]">
                The Alchemy of Heritage
              </p>
            </motion.div>
          </div>

          {/* Film Grain Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
