import React from "react";
import { motion } from "motion/react";

const certs = [
  { name: "FSSAI", label: "Food Safety Standard" },
  { name: "ISO 22000", label: "Quality Management" },
  { name: "GMP", label: "Manufacturing Practice" },
  { name: "100% PURE", label: "Zero Adulteration" }
];

export default function Certifications() {
  return (
    <section className="py-24 bg-surface border-t border-outline-variant/5">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-50 hover:opacity-100 transition-opacity duration-1000">
          {certs.map((cert) => (
            <div key={cert.name} className="text-center space-y-2">
              <span className="font-noto-serif text-xl md:text-2xl text-on-surface tracking-[0.3em] block">{cert.name}</span>
              <span className="font-manrope text-[8px] uppercase tracking-[0.4em] text-on-surface-variant font-bold">{cert.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
