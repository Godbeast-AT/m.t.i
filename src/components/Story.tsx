import { motion } from "motion/react";

export default function Story() {
  return (
    <section id="our-story" className="bg-surface-container-low py-32">
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-12"
              >
                <img 
                  className="rounded-xl shadow-sm w-full aspect-square object-cover" 
                  src="https://picsum.photos/seed/chilies/500/500" 
                  alt="Dried red chilies"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12"
              >
                <img 
                  className="rounded-xl shadow-sm w-full aspect-square object-cover" 
                  src="https://picsum.photos/seed/turmeric/500/500" 
                  alt="Artisanal hands mixing turmeric"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 md:order-2 space-y-12"
          >
            <div className="space-y-4">
              <span className="font-noto-serif text-primary/60 italic text-2xl block">
                "परम्परा और स्वाद का संगम।"
              </span>
              <h2 className="font-noto-serif text-6xl text-primary leading-tight tracking-tighter">
                From Mandi to Global Pantry.
              </h2>
            </div>
            <div className="font-manrope text-on-surface-variant space-y-6 leading-relaxed">
              <p>
                For three generations, Manish Thakur Industries has been the silent custodian of the Malwa region's culinary secrets. Our journey began not in a boardroom, but amidst the vibrant chaos of the local Mandi, where our founders hand-selected pods and seeds from farmers who shared our reverence for purity.
              </p>
              <p>
                Today, M.T.I stands as a testament to that legacy. We have bridged the gap between ancient grinding techniques and modern safety standards, ensuring that every grain of spice that leaves our facility carries the authentic soul of Indore.
              </p>
            </div>
            
            <div className="flex gap-12 pt-8">
              {[
                { label: "The Beginning", value: "1958" },
                { label: "Spice Varieties", value: "42+" },
                { label: "Countries", value: "12" }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="block font-noto-serif text-3xl text-primary">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest font-manrope text-on-surface-variant font-bold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
