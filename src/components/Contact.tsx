import { motion } from "motion/react";
import { MapPin, Mail, Phone } from "lucide-react";

const whatsappLink = "https://wa.me/916264094456";

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
                content: "1 B, Krishi Vihar Colony Main Vandana Nagar, Indore, M.P, India" 
              },
              { 
                icon: Mail, 
                title: "Inquiries", 
                content: "104manish2020@gmail.com\n+91 8370041808" 
              },
              { 
                icon: Phone, 
                title: "WhatsApp", 
                content: "+91 6264094456",
                href: whatsappLink
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
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-manrope text-on-surface-variant whitespace-pre-line hover:text-primary transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="font-manrope text-on-surface-variant whitespace-pre-line">{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-64 rounded-xl overflow-hidden shadow-sm grayscale opacity-80 bg-[radial-gradient(circle_at_center,rgba(190,133,53,0.25),rgba(20,20,20,0.95))] border border-outline-variant/10"
          />
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
