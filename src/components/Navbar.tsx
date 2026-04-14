import React from "react";
import { motion } from "motion/react";
import { ShoppingBag, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Process", path: "/#our-process" },
    { name: "Catalog", path: "/#catalog" },
    { name: "Our Story", path: "/#our-story" },
    { name: "Reviews", path: "/#reviews" },
    { name: "FAQs", path: "/#faqs" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith("/#")) {
      const id = path.split("#")[1];
      if (location.pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/" className="text-2xl font-bold tracking-tighter text-primary font-noto-serif">
            M.T.I
          </Link>
        </motion.div>
        
        <div className="hidden md:flex gap-12 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className={`font-manrope uppercase tracking-widest text-[10px] font-bold transition-colors duration-300 ${
                location.pathname === item.path || (location.pathname === "/" && item.path === "/") || (location.pathname === "/" && location.hash === item.path.split("#")[1])
                  ? "text-primary border-b-2 border-primary pb-1" 
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="text-on-surface hover:text-primary transition-colors cursor-pointer">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
          <button className="md:hidden text-on-surface cursor-pointer">
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </nav>
  );
}
