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
  shopifyVariantId?: string; // Add this for Shopify integration
}

export const products: Product[] = [
  {
    id: "chili-powder",
    name: "Pure Stone-Ground Chili",
    hindi: "शुद्ध पत्थर पिसी मिर्च",
    price: "₹249",
    weight: "200g",
    type: "Chili",
    images: [
      "https://r.jina.ai/i/06805125345749778292888636888494",
      "https://r.jina.ai/i/06805125345749778292888636888495",
      "https://picsum.photos/seed/mti-chili-1/800/1000",
      "https://picsum.photos/seed/mti-chili-2/800/1000"
    ],
    tag: "The Fire",
    description: "Our chili powder is not just a spice; it's a testament to purity. Ground slowly on traditional stone mills (chakkis) to preserve the natural oils and vibrant color. Unlike commercial brands, we add zero fillers, zero artificial colors, and zero wood dust. Just pure, sun-dried chilies that pack a punch of authentic flavor.",
    benefits: ["100% Pure & Natural", "No Artificial Colors", "Slow Stone Ground", "Rich in Capsaicin"],
    shopifyVariantId: "gid://shopify/ProductVariant/123456789" // Example Shopify GID
  },
  {
    id: "turmeric-powder",
    name: "Stone-Ground Turmeric",
    hindi: "पत्थर पिसी हल्दी",
    price: "₹189",
    weight: "200g",
    type: "Turmeric",
    images: [
      "https://picsum.photos/seed/mti-turmeric-raw/600/800",
      "https://picsum.photos/seed/mti-turmeric-1/800/1000",
      "https://picsum.photos/seed/mti-turmeric-2/800/1000"
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
      "https://r.jina.ai/i/06805125345749778292888636888504",
      "https://r.jina.ai/i/06805125345749778292888636888505",
      "https://picsum.photos/seed/mti-coriander-1/800/1000"
    ],
    tag: "Fresh",
    description: "The aroma of freshly ground coriander is unmistakable. We use premium seeds, cleaned and dried to perfection before being stone-ground. This process ensures that the delicate essential oils remain intact, providing a cooling and fragrant addition to every meal.",
    benefits: ["Aromatic Essential Oils", "Premium Quality Seeds", "No Added Starch", "Cooling Properties"]
  },
  {
    id: "indore-blend",
    name: "Indore Special Blend",
    hindi: "इंदौर स्पेशल ब्लेंड",
    price: "₹299",
    weight: "150g",
    type: "Blend",
    images: [
      "https://picsum.photos/seed/mti-spice-blend/600/800",
      "https://picsum.photos/seed/mti-blend-1/800/1000",
      "https://picsum.photos/seed/mti-blend-2/800/1000"
    ],
    tag: "Signature",
    description: "A secret family recipe reborn. This blend captures the soul of Indore's culinary heritage. It's the very blend that made M.T.I. a household name in 1989. Perfectly balanced, intensely flavorful, and ground with the same love and integrity that defines our family.",
    benefits: ["Secret Family Recipe", "Heritage Flavor", "Small Batch Production", "Versatile Usage"]
  }
];
