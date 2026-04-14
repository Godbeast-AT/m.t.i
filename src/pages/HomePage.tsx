import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Catalog from "../components/Catalog";
import Process from "../components/Process";
import Story from "../components/Story";
import Reviews from "../components/Reviews";
import FAQs from "../components/FAQs";
import Certifications from "../components/Certifications";

export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="relative">
      <Hero />
      <Catalog />
      <Process />
      <Story />
      <Reviews />
      <FAQs />
      <Certifications />
    </div>
  );
}
