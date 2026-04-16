import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[110] bg-surface/80 backdrop-blur-xl"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              drag
              dragMomentum={false}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="bg-surface-container-lowest border border-outline-variant/20 w-full max-w-4xl max-h-[80vh] overflow-hidden rounded-3xl shadow-2xl pointer-events-auto flex flex-col cursor-default"
            >
              {/* Header - Drag Handle */}
              <div className="flex justify-between items-center px-8 py-6 border-b border-outline-variant/10 cursor-grab active:cursor-grabbing">
                <h2 className="font-noto-serif text-2xl text-on-surface font-bold tracking-tight">
                  {title}
                </h2>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-surface-container rounded-full transition-colors text-on-surface-variant hover:text-primary"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-8 font-manrope text-on-surface-variant leading-relaxed space-y-6 custom-scrollbar">
                {children}
              </div>

              {/* Footer */}
              <div className="px-8 py-6 border-t border-outline-variant/10 flex justify-end">
                <button 
                  onClick={onClose}
                  className="bg-primary text-on-primary px-8 py-3 rounded-full font-manrope font-bold uppercase tracking-widest text-[10px] hover:bg-primary/90 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
