import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Why stone-grinding over modern mills?",
    answer: "Modern high-speed mills generate intense heat (up to 80°C) which evaporates the essential oils and volatile compounds of the spice. Our traditional stone chakkis operate at a fraction of the speed, keeping the temperature below 24°C to preserve the full sensory profile."
  },
  {
    question: "How do you ensure zero adulteration?",
    answer: "We bypass the industrial supply chain entirely. Every pod and seed is hand-selected from trusted farmers. We don't use fillers like wood dust or starch because our business isn't volume—it's integrity."
  },
  {
    question: "What is the shelf life of an M.T.I. batch?",
    answer: "Because we preserve the natural oils, our spices remain potent for 12-18 months if stored in a cool, dark place. However, for the peak 'Resurrection' experience, we recommend consumption within 6 months of the batch date."
  }
];

function FAQItem({ faq }: { faq: typeof faqs[0]; key?: React.Key }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-outline-variant/10">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-10 flex justify-between items-center text-left group"
      >
        <h3 className={`font-noto-serif text-sm md:text-lg uppercase tracking-[0.2em] transition-colors duration-500 ${isOpen ? "text-primary" : "text-on-surface group-hover:text-primary"}`}>
          {faq.question}
        </h3>
        <div className={`transition-transform duration-500 ${isOpen ? "rotate-180 text-primary" : "text-on-surface-variant"}`}>
          {isOpen ? <Minus size={18} strokeWidth={1} /> : <Plus size={18} strokeWidth={1} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10">
              <p className="font-manrope text-on-surface-variant text-sm leading-relaxed font-light max-w-3xl">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQs() {
  return (
    <section id="faqs" className="py-32 bg-surface-container-lowest">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="mb-24 space-y-8">
          <span className="font-manrope text-primary tracking-[0.5em] text-[10px] uppercase block font-bold">
            The Inquiry
          </span>
          <h2 className="font-noto-serif text-4xl md:text-6xl text-on-surface">Technical FAQ</h2>
        </div>

        <div className="border border-outline-variant/30 rounded-3xl px-8 md:px-16 bg-surface">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
