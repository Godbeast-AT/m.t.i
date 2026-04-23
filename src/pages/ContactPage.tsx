import { motion } from "motion/react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 bg-surface">
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-noto-serif text-primary italic text-xl mb-4 block">
                "रिश्तों में स्वाद घोलें।"
              </span>
              <span className="text-primary font-manrope uppercase tracking-[0.3em] text-[10px] mb-6 block font-bold">
                Get in Touch
              </span>
              <h1 className="font-noto-serif text-6xl md:text-7xl text-on-surface tracking-tighter leading-[0.9] mb-8">
                Let's Start a <br /> Conversation.
              </h1>
              <p className="font-manrope text-lg text-on-surface-variant leading-relaxed">
                Whether you're looking for a custom spice blend for your restaurant or have a question about our stone-grinding process, our team is here to help.
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  title: "Heritage Headquarters",
                  content: "Plot 112-B, Industrial Estate, Indore, Madhya Pradesh 452003"
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "heritage@mti-spices.com\nsales@mti-spices.com"
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+91 731 2450 8XX\n+91 98260 XXXXX"
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  content: "Monday - Saturday: 9:00 AM - 7:00 PM\nSunday: Closed"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-full shrink-0">
                    <item.icon className="text-primary" size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-manrope font-bold text-xs uppercase tracking-widest mb-2">{item.title}</h4>
                    <p className="font-manrope text-on-surface-variant text-sm whitespace-pre-line leading-relaxed">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="bg-surface-container-lowest p-8 md:p-16 rounded-2xl shadow-2xl shadow-on-surface/5">
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="font-manrope text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">First Name</label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-noto-serif placeholder:text-neutral-300 transition-colors"
                      placeholder="Manish"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-manrope text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Last Name</label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-noto-serif placeholder:text-neutral-300 transition-colors"
                      placeholder="Thakur"
                      type="text"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="font-manrope text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Email Address</label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-noto-serif placeholder:text-neutral-300 transition-colors"
                      placeholder="hello@domain.com"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-manrope text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Phone Number</label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-noto-serif placeholder:text-neutral-300 transition-colors"
                      placeholder="+91 00000 00000"
                      type="tel"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-manrope text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Nature of Inquiry</label>
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-noto-serif appearance-none cursor-pointer">
                    <option>Wholesale & Distribution</option>
                    <option>Restaurant Partnership</option>
                    <option>Export Inquiry</option>
                    <option>Feedback & Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-manrope text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Your Message</label>
                  <textarea
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary font-noto-serif placeholder:text-neutral-300 resize-none transition-colors"
                    placeholder="Tell us about your requirements..."
                    rows={5}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-on-primary py-6 rounded-md font-manrope font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                  type="submit"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mt-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 bg-[radial-gradient(circle_at_top,rgba(190,133,53,0.25),rgba(17,24,39,0.97))] border border-outline-variant/10 relative">
          <img
            src="/images/turmeric-pack.jpg"
            alt="Spice pack on display"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
