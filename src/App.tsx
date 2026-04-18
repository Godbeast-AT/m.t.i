/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import TrackOrder from "./pages/TrackOrder";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./context/CartContext";
import CartSidebar from "./components/CartSidebar";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <CartSidebar />
        <div className="min-h-screen selection:bg-primary/10 selection:text-primary">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/track" element={<TrackOrder />} />
              <Route path="/product/:id" element={<ProductDetailsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
