import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import SplashScreen from "../components/SplashScreen";
import Story from "../components/Story";
import Process from "../components/Process";
import Catalog from "../components/Catalog";
import Reviews from "../components/Reviews";
import FAQs from "../components/FAQs";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import DraggableSeal from "../components/DraggableSeal";

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
    <div className="relative bg-surface">
      <SplashScreen />
      <Hero />
      <Story />
      <Process />
      <Catalog />
      <Reviews />
      <FAQs />
      <Certifications />
      <Contact />
      <DraggableSeal />
    </div>
  );
}
