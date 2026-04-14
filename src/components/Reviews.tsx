import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chef Arjun Kapoor",
    role: "Executive Chef, Malwa Fine Dining",
    hindi: "स्वाद की शुद्धता का असली प्रमाण।",
    content: "The stone-ground chili powder from M.T.I has a depth of flavor that modern mills simply cannot replicate. It's the soul of my signature dishes.",
    rating: 5,
    image: "https://picsum.photos/seed/chef1/200/200"
  },
  {
    name: "Priya Sharma",
    role: "Home Curator & Food Blogger",
    hindi: "घर के खाने में जान डाल दी।",
    content: "I've tried many brands, but the vibrant color and pungent aroma of M.T.I's spices are unmatched. You can truly taste the heritage in every pinch.",
    rating: 5,
    image: "https://picsum.photos/seed/curator1/200/200"
  },
  {
    name: "Vikram Sethi",
    role: "Owner, Spice Route Exports",
    hindi: "विश्वसनीय और प्रामाणिक।",
    content: "In the export business, purity is everything. M.T.I's commitment to traditional stone-grinding ensures a product that meets global standards while staying local.",
    rating: 5,
    image: "https://picsum.photos/seed/exporter1/200/200"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-surface">
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <span className="font-noto-serif text-primary italic text-2xl mb-6 block">
            "संतुष्ट ग्राहकों की आवाज़।"
          </span>
          <h2 className="font-noto-serif text-6xl md:text-8xl tracking-tighter mb-8">Testimonials</h2>
          <div className="w-24 h-[1px] bg-primary/20 mx-auto mb-8" />
          <p className="font-manrope text-on-surface-variant max-w-2xl mx-auto leading-relaxed text-lg">
            Hear from the culinary experts and home cooks who have made M.T.I a staple in their kitchens.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-surface-container-lowest p-10 rounded-2xl shadow-2xl shadow-on-surface/5 relative overflow-hidden group"
            >
              <Quote className="absolute -top-4 -right-4 text-primary/5 w-32 h-32 rotate-12 transition-transform group-hover:rotate-0 duration-700" />
              
              <div className="relative z-10 space-y-8">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-secondary text-secondary" />
                  ))}
                </div>

                <div className="space-y-4">
                  <span className="font-noto-serif text-primary/60 italic text-lg block">
                    "{testimonial.hindi}"
                  </span>
                  <p className="font-manrope text-on-surface-variant leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/10">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-noto-serif font-bold text-on-surface">{testimonial.name}</h4>
                    <p className="font-manrope text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
