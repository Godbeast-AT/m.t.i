import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What makes M.T.I chili powder different from others?",
    hindi: "M.T.I मिर्च पाउडर दूसरों से अलग क्यों है?",
    answer: "Unlike mass-produced spices that use high-speed industrial mills, we use traditional stone-grinding (Chakki). This slow process prevents heat buildup, preserving the natural oils and vibrant color of the chilies."
  },
  {
    question: "Are your spices 100% pure and unadulterated?",
    hindi: "क्या आपके मसाले 100% शुद्ध और मिलावट रहित हैं?",
    answer: "Absolutely. We pride ourselves on 'Fervent Purity'. Every batch is tested for purity and contains no artificial colors, fillers, or preservatives. Our FSSAI certification is a testament to our standards."
  },
  {
    question: "Where do you source your chilies from?",
    hindi: "आप अपनी मिर्च कहाँ से प्राप्त करते हैं?",
    answer: "We source our chilies directly from the best mandis in the Malwa region of Madhya Pradesh. We only select the plumpest, most vibrant whole peppers that meet our strict quality criteria."
  },
  {
    question: "How should I store M.T.I spices for maximum freshness?",
    hindi: "अधिकतम ताजगी के लिए मुझे M.T.I मसालों को कैसे स्टोर करना चाहिए?",
    answer: "To preserve the delicate aroma and flavor, store our spices in a cool, dry place away from direct sunlight. We recommend using airtight containers once the original packaging is opened."
  },
  {
    question: "Do you offer bulk orders for B2B clients like hotels?",
    hindi: "क्या आप होटलों जैसे B2B ग्राहकों के लिए थोक ऑर्डर देते हैं?",
    answer: "Yes, we specialize in premium B2B supply. We provide consistent quality and custom packaging options for hotels, restaurants, and catering services. Please contact us via our inquiry form."
  }
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-32 bg-surface-container-low">
      <div className="px-6 md:px-12 max-w-screen-xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <span className="font-noto-serif text-primary italic text-2xl mb-6 block">
            "अक्सर पूछे जाने वाले प्रश्न।"
          </span>
          <h2 className="font-noto-serif text-6xl md:text-8xl tracking-tighter mb-8">Common Inquiries</h2>
          <div className="w-24 h-[1px] bg-primary/20 mx-auto mb-8" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-outline-variant/10"
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full py-8 flex justify-between items-center text-left group"
              >
                <div className="space-y-2">
                  <span className="font-noto-serif text-primary/60 italic text-sm block">
                    "{faq.hindi}"
                  </span>
                  <h3 className="font-noto-serif text-2xl md:text-3xl text-on-surface group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>
                <div className="ml-8 flex-shrink-0">
                  {activeIndex === index ? (
                    <Minus className="text-primary" size={24} />
                  ) : (
                    <Plus className="text-on-surface-variant group-hover:text-primary transition-colors" size={24} />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-manrope text-on-surface-variant leading-relaxed text-lg pb-12 max-w-3xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
