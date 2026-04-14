import { motion } from "motion/react";

const steps = [
  {
    title: "Rigorous Selection",
    hindi: "श्रेष्ठ चयन",
    description: "We only pass the plumpest and most vibrant whole chili peppers, ensuring color, heat, and moisture levels are perfect.",
    image: "https://picsum.photos/seed/selection/600/400"
  },
  {
    title: "Slow Stone Grinding",
    hindi: "धीमी पत्थर पिसाई",
    description: "Rejecting high-speed mills, we use traditional stone chakkis. This preserves delicate flavor compounds and essential oils.",
    image: "https://picsum.photos/seed/grinding/600/400"
  },
  {
    title: "Heritage Preservation",
    hindi: "विरासत का संरक्षण",
    description: "Every batch is an act of preserving the rich heritage of traditional Indian spice-making, ensuring authentic depth of aroma.",
    image: "https://picsum.photos/seed/heritage/600/400"
  }
];

export default function Process() {
  return (
    <section id="our-process" className="py-32 bg-surface">
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-32"
        >
          <span className="font-noto-serif text-primary italic text-2xl mb-6 block">
            "शुद्धता की यात्रा।"
          </span>
          <h2 className="font-noto-serif text-6xl md:text-8xl tracking-tighter mb-8">Our Process</h2>
          <div className="w-24 h-[1px] bg-primary/20 mx-auto mb-8" />
          <p className="font-manrope text-on-surface-variant max-w-2xl mx-auto leading-relaxed text-lg">
            M.T.I distinguishes itself not by what it is, but by how it is made. We reject modern shortcuts to preserve the soul of the spice.
          </p>
        </motion.div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="flex-1 space-y-6">
                <span className="text-primary font-manrope uppercase tracking-[0.3em] text-[10px] font-bold">
                  Step {index + 1}
                </span>
                <div className="space-y-2">
                  <span className="font-noto-serif text-primary/60 italic text-lg block">
                    "{step.hindi}"
                  </span>
                  <h3 className="font-noto-serif text-4xl">{step.title}</h3>
                </div>
                <p className="font-manrope text-on-surface-variant leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
