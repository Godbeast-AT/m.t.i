import { motion } from "motion/react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-surface-container-highest py-32 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Contact Details */}
        <div className="lg:col-span-5 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-noto-serif text-5xl mb-8 tracking-tighter">Let's Connect.</h2>
            <p className="font-manrope text-on-surface-variant leading-relaxed">
              Whether you're a boutique cafe seeking a custom blend or a home cook looking for the real deal, we're here to talk flavor.
            </p>
          </motion.div>
          
          <div className="space-y-10">
            {[
              { 
                icon: MapPin, 
                title: "Heritage Headquarters", 
                content: "Plot 112-B, Industrial Estate, Indore, Madhya Pradesh 452003" 
              },
              { 
                icon: Mail, 
                title: "Inquiries", 
                content: "heritage@mti-spices.com\n+91 731 2450 8XX" 
              }
            ].map((item) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <item.icon className="text-primary shrink-0" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="font-manrope font-bold text-sm uppercase tracking-widest mb-2">{item.title}</h4>
                  <p className="font-manrope text-on-surface-variant whitespace-pre-line">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-64 rounded-xl overflow-hidden shadow-sm grayscale opacity-80"
          >
            <img 
              className="w-full h-full object-cover" 
              src="https://picsum.photos/seed/indore-map/800/400" 
              alt="Map of Indore"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        
        {/* Inquiry Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-20 rounded-xl shadow-sm"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-manrope text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Your Name</label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-noto-serif placeholder:text-neutral-300 transition-colors" 
                  placeholder="Manish Thakur" 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="font-manrope text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Email Address</label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-noto-serif placeholder:text-neutral-300 transition-colors" 
                  placeholder="hello@domain.com" 
                  type="email" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="font-manrope text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Subject</label>
              <select className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-noto-serif appearance-none cursor-pointer">
                <option>Wholesale Inquiry</option>
                <option>Retail Partnership</option>
                <option>Heritage Documentation</option>
                <option>Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="font-manrope text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Your Message</label>
              <textarea 
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-noto-serif placeholder:text-neutral-300 resize-none transition-colors" 
                placeholder="Tell us your story..." 
                rows={4}
              ></textarea>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-on-primary px-12 py-5 rounded-md font-manrope font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-all shadow-lg shadow-primary/20" 
              type="submit"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
