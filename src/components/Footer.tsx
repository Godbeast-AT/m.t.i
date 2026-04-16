import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isReturnOpen, setIsReturnOpen] = useState(false);

  const columns = [
    {
      title: "Quick Links",
      links: [
        { name: "Our Story", path: "/#our-story" },
        { name: "Our Process", path: "/#our-process" },
        { name: "Catalog", path: "/#catalog" },
        { name: "Reviews", path: "/#reviews" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "FAQs", path: "/#faqs" },
        { name: "Shipping Policy", onClick: () => setIsShippingOpen(true) },
        { name: "Return Policy", onClick: () => setIsReturnOpen(true) }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "Instagram", path: "#" },
        { name: "WhatsApp", path: "#" },
        { name: "LinkedIn", path: "#" }
      ]
    }
  ];

  return (
    <footer className="w-full pt-24 pb-12 bg-surface-container-highest/30 border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="md:col-span-1 space-y-6">
          <div className="font-noto-serif text-2xl font-bold text-primary">M.T.I</div>
          <p className="font-manrope text-sm text-on-surface-variant leading-relaxed">
            Ground by a Father. Guided by a Son. Backed by the Truth. <br />
            Established in 1989. Reborn in 2026.
          </p>
          <div className="pt-2">
            <p className="font-noto-serif italic text-primary/80 text-lg">
              "Zameer bech kar naseeb nahi badalte."
            </p>
          </div>
        </div>
        
        {columns.map((column) => (
          <div key={column.title} className="md:col-span-1">
            <h5 className="font-manrope font-bold text-xs uppercase tracking-widest text-on-surface mb-6">
              {column.title}
            </h5>
            <ul className="space-y-4 font-manrope text-sm text-on-surface-variant">
              {column.links.map((link) => (
                <li key={link.name}>
                  {link.path ? (
                    <Link 
                      to={link.path} 
                      className="hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button 
                      onClick={link.onClick}
                      className="hover:text-primary transition-colors cursor-pointer text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto mt-20 pt-8 border-t border-outline-variant/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-manrope text-xs text-on-surface-variant">
            © 2026 Manish Thakur Industries. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <button 
              onClick={() => setIsPrivacyOpen(true)}
              className="font-manrope text-xs text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setIsTermsOpen(true)}
              className="font-manrope text-xs text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Modal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
        title="Privacy Policy"
      >
        <div className="space-y-4">
          <p className="font-bold text-on-surface">Last Updated: April 16, 2026</p>
          <p>At Manish Thakur Industries (M.T.I.), we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
          
          <h3 className="text-lg font-bold text-on-surface">1. Information We Collect</h3>
          <p>We may collect personal information such as your name, email address, and shipping address when you make a purchase or sign up for our newsletter. We also collect non-personal data like browser type and IP address for analytical purposes.</p>
          
          <h3 className="text-lg font-bold text-on-surface">2. How We Use Your Information</h3>
          <p>Your information is used to process orders, improve our services, and communicate with you about your purchases or promotional offers. We do not sell your data to third parties.</p>
          
          <h3 className="text-lg font-bold text-on-surface">3. Data Security</h3>
          <p>We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>
          
          <h3 className="text-lg font-bold text-on-surface">4. Your Rights</h3>
          <p>You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.</p>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
        title="Terms of Service"
      >
        <div className="space-y-4">
          <p className="font-bold text-on-surface">Last Updated: April 16, 2026</p>
          <p>Welcome to Manish Thakur Industries. By accessing our website, you agree to comply with and be bound by the following terms and conditions.</p>
          
          <h3 className="text-lg font-bold text-on-surface">1. Use of the Website</h3>
          <p>The content of this website is for your general information and use only. It is subject to change without notice.</p>
          
          <h3 className="text-lg font-bold text-on-surface">2. Product Information</h3>
          <p>We strive to provide accurate information about our stone-ground spices. However, we do not warrant that product descriptions or other content are error-free.</p>
          
          <h3 className="text-lg font-bold text-on-surface">3. Intellectual Property</h3>
          <p>This website contains material which is owned by or licensed to us. This includes, but is not limited to, the design, layout, look, appearance, and graphics.</p>
          
          <h3 className="text-lg font-bold text-on-surface">4. Limitation of Liability</h3>
          <p>M.T.I. shall not be liable for any indirect, incidental, or consequential damages arising out of the use of our products or website.</p>
        </div>
      </Modal>

      {/* Shipping Policy Modal */}
      <Modal 
        isOpen={isShippingOpen} 
        onClose={() => setIsShippingOpen(false)} 
        title="Shipping Policy"
      >
        <div className="space-y-4">
          <p className="font-bold text-on-surface">Last Updated: April 16, 2026</p>
          <p>We aim to deliver our fresh, stone-ground spices to your doorstep as quickly as possible while ensuring they remain in peak condition.</p>
          
          <h3 className="text-lg font-bold text-on-surface">1. Processing Time</h3>
          <p>Orders are typically processed within 1-2 business days. Since we grind in small batches to ensure freshness, some orders may take slightly longer during high-demand periods.</p>
          
          <h3 className="text-lg font-bold text-on-surface">2. Shipping Rates & Estimates</h3>
          <p>Shipping charges for your order will be calculated and displayed at checkout. We offer standard and express shipping options across India.</p>
          
          <h3 className="text-lg font-bold text-on-surface">3. Shipment Confirmation & Order Tracking</h3>
          <p>You will receive a shipment confirmation email once your order has shipped containing your tracking number(s).</p>
          
          <h3 className="text-lg font-bold text-on-surface">4. Damages</h3>
          <p>M.T.I. is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim.</p>
        </div>
      </Modal>

      {/* Return Policy Modal */}
      <Modal 
        isOpen={isReturnOpen} 
        onClose={() => setIsReturnOpen(false)} 
        title="Return & Refund Policy"
      >
        <div className="space-y-4">
          <p className="font-bold text-on-surface">Last Updated: April 16, 2026</p>
          <p>Your satisfaction is our priority. However, due to the perishable nature of our products (spices), we have specific guidelines for returns.</p>
          
          <h3 className="text-lg font-bold text-on-surface">1. Returns</h3>
          <p>We only accept returns if the product received is incorrect or the packaging was tampered with before delivery. You have 48 hours after receiving your item to request a return.</p>
          
          <h3 className="text-lg font-bold text-on-surface">2. Refunds</h3>
          <p>Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed to your original method of payment within 7-10 business days.</p>
          
          <h3 className="text-lg font-bold text-on-surface">3. Exchanges</h3>
          <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, please contact us.</p>
          
          <h3 className="text-lg font-bold text-on-surface">4. Non-Returnable Items</h3>
          <p>Opened spice packets cannot be returned for health and safety reasons unless there is a clear quality defect.</p>
        </div>
      </Modal>
    </footer>
  );
}
