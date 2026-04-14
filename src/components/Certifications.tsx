import { motion } from "motion/react";
import { ShieldCheck, Leaf } from "lucide-react";

export default function Certifications() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-outline-variant/15 pb-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-md"
        >
          <span className="font-noto-serif text-secondary italic text-sm mb-2 block">
            "सत्यं वद, धर्मं चर।"
          </span>
          <h2 className="font-noto-serif text-4xl mb-4">Purity Guaranteed.</h2>
          <p className="font-manrope text-on-surface-variant italic">
            Every batch is tested to meet the highest global standards for safety and ethics.
          </p>
        </motion.div>
        
        <div className="mt-8 md:mt-0 flex gap-12">
          {[
            { icon: ShieldCheck, label: "FSSAI Certified" },
            { icon: Leaf, label: "Certified Vegan" }
          ].map((cert, index) => (
            <motion.div 
              key={cert.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-24 h-24 bg-surface-container flex items-center justify-center rounded-full text-tertiary">
                <cert.icon size={40} strokeWidth={1} />
              </div>
              <span className="font-manrope text-[11px] uppercase tracking-widest font-bold">
                {cert.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
