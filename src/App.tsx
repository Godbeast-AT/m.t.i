/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./context/CartContext";
import CartSidebar from "./components/CartSidebar";
import CookieConsentBanner from "./components/CookieConsentBanner";

const HomePage = lazy(() => import("./pages/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

export default function App() {
  return (
    <CartProvider>
      <HashRouter>
        <ScrollToTop />
        <CartSidebar />
        <CookieConsentBanner />
        <div className="min-h-screen selection:bg-primary/10 selection:text-primary">
          <Navbar />
          <main>
            <Suspense fallback={<div className="min-h-[40vh] w-full" />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </CartProvider>
  );
}
