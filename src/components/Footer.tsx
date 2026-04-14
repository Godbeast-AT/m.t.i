import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 bg-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="md:col-span-1">
          <div className="font-noto-serif text-xl italic mb-4 text-primary">M.T.I</div>
          <p className="font-manrope text-sm text-on-surface-variant">
            Documenting heritage through the lens of pure flavor.
          </p>
        </div>
        
        {[
          {
            title: "Quick Links",
            links: [
              { name: "Our Process", path: "/#our-process" },
              { name: "Catalog", path: "/#catalog" },
              { name: "Contact Us", path: "/contact" }
            ]
          },
          {
            title: "Certification",
            links: [
              { name: "FSSAI Certified", path: "#" },
              { name: "Certified Vegan", path: "#" }
            ]
          },
          {
            title: "Transparency",
            links: [
              { name: "Sustainability Report", path: "#" },
              { name: "Privacy Policy", path: "#" }
            ]
          }
        ].map((column) => (
          <div key={column.title} className="md:col-span-1">
            <h5 className="font-manrope font-bold text-xs uppercase tracking-widest mb-6">
              {column.title}
            </h5>
            <ul className="space-y-4 font-manrope text-sm text-on-surface-variant">
              {column.links.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="hover:text-primary underline decoration-primary/30 underline-offset-4 transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto mt-20 pt-8 border-t border-outline-variant/10">
        <p className="font-manrope text-sm text-on-surface-variant/60">
          © 2026 Manish Thakur Industries. Documentation of Heritage.
        </p>
      </div>
    </footer>
  );
}
