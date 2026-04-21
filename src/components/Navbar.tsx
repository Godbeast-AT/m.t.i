import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Magnetic from "./Magnetic";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const location = useLocation();
  const { totalItems, toggleCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/#our-story" },
    { name: "Our Process", path: "/#our-process" },
    { name: "Catalog", path: "/#catalog" },
    { name: "Reviews", path: "/#reviews" },
    { name: "FAQs", path: "/#faqs" },
    { name: "Track Order", path: "/track" },
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
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/" && !location.hash;
    if (path.startsWith("/#")) return location.pathname === "/" && location.hash === `#${path.split("#")[1]}`;
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Magnetic strength={0.2}>
            <Link to="/" className="text-2xl font-bold tracking-tighter text-primary font-noto-serif px-4 py-2">
              M.T.I
            </Link>
          </Magnetic>
        </motion.div>

        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Magnetic key={item.name} strength={0.2}>
              <Link
                to={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`font-manrope uppercase tracking-widest text-[10px] font-bold transition-colors duration-300 px-4 py-2 ${
                  isActive(item.path) ? "text-primary" : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            </Magnetic>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <button
            type="button"
            onClick={toggleCart}
            className="text-on-surface hover:text-primary transition-colors cursor-pointer p-4 relative"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute top-2 right-2 bg-primary text-on-primary text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          <button
            type="button"
            className="md:hidden text-on-surface cursor-pointer p-4"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="md:hidden px-6 pb-6"
          >
            <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-4 flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`py-3 px-2 font-manrope uppercase tracking-widest text-[10px] font-bold ${
                    isActive(item.path) ? "text-primary" : "text-on-surface-variant"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
