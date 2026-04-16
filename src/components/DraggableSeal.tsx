import React from "react";
import { motion } from "motion/react";

export default function DraggableSeal() {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.8}
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
      className="fixed bottom-12 right-12 z-[90] cursor-grab group"
    >
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Rotating Text Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="font-manrope text-[8px] uppercase tracking-[0.2em] fill-primary font-bold">
              <textPath href="#circlePath">
                • MANISH THAKUR INDUSTRIES • ESTD 1989 •
              </textPath>
            </text>
          </svg>
        </motion.div>
        
        {/* Center Seal */}
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-surface">
          <span className="font-noto-serif text-white text-xs font-bold">MTI</span>
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[8px] uppercase tracking-widest px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Drag Me
      </div>
    </motion.div>
  );
}
