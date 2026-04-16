import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.5 }}
          className="fixed inset-0 z-[100] bg-[#121212] flex items-center justify-center overflow-hidden"
        >
          <div className="relative z-10 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, filter: "blur(20px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="space-y-4"
            >
              <span className="font-manrope text-primary tracking-[0.8em] text-[10px] uppercase block font-bold">
                Established 1989
              </span>
              <h2 className="font-noto-serif text-5xl md:text-7xl text-white tracking-[0.2em] font-bold">
                M.T.I
              </h2>
            </motion.div>

            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
              className="h-px bg-primary/40 mx-auto"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.5 }}
            >
              <p className="font-noto-serif italic text-white/40 text-sm tracking-widest">
                The Resurrection of Purity
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
