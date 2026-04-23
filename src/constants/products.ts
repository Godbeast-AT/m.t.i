export interface Product {
  id: string;
  name: string;
  hindi: string;
  price: string;
  weight: string;
  type: string;
  images: string[];
  tag: string;
  description: string;
  benefits: string[];
  shopifyVariantId?: string;
}

const asset = (path: string) => `/${path}`;

export const products: Product[] = [
  {
    id: "turmeric-powder",
    name: "Stone-Ground Turmeric",
    hindi: "पत्थर पिसी हल्दी",
    price: "₹189",
    weight: "200g",
    type: "Turmeric",
    images: [
      asset("products/turmeric/front.png"),
      asset("products/turmeric/back.png")
    ],
    tag: "Authentic",
    description: "Experience the golden essence of health. Our turmeric is sourced from the finest roots and ground at low temperatures to retain its high curcumin content. It's the same turmeric my father started with in 1989—unadulterated, earthy, and deeply healing.",
    benefits: ["High Curcumin Content", "Anti-inflammatory Properties", "Traditional Grinding", "Zero Adulteration"],
    shopifyVariantId: "gid://shopify/ProductVariant/223456789"
  },
  {
    id: "coriander-powder",
    name: "Premium Coriander Powder",
    hindi: "प्रीमियम धनिया पाउडर",
    price: "₹149",
    weight: "200g",
    type: "Coriander",
    images: [
      asset("products/coriander/front.png"),
      asset("products/coriander/back.png")
    ],
    tag: "Fresh",
    description: "The aroma of freshly ground coriander is unmistakable. We use premium seeds, cleaned and dried to perfection before being stone-ground. This process ensures that the delicate essential oils remain intact, providing a cooling and fragrant addition to every meal.",
    benefits: ["Aromatic Essential Oils", "Premium Quality Seeds", "No Added Starch", "Cooling Properties"]
  },
  {
    id: "chili-powder",
    name: "Pure Stone-Ground Chili",
    hindi: "शुद्ध पत्थर पिसी मिर्च",
    price: "₹249",
    weight: "200g",
    type: "Chili",
    images: [
      asset("products/chili/front.png"),
      asset("products/chili/back.png")
    ],
    tag: "The Fire",
    description: "Our chili powder is not just a spice; it's a testament to purity. Ground slowly on traditional stone mills (chakkis) to preserve the natural oils and vibrant color. Unlike commercial brands, we add zero fillers, zero artificial colors, and zero wood dust. Just pure, sun-dried chilies that pack a punch of authentic flavor.",
    benefits: ["100% Pure & Natural", "No Artificial Colors", "Slow Stone Ground", "Rich in Capsaicin"],
    shopifyVariantId: "gid://shopify/ProductVariant/123456789"
  }
];
