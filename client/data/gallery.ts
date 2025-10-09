import type { LocalizedText } from "@/lib/i18n";

export type GalleryCategory = "bridal" | "engagement" | "festival" | "kids" | "custom";
export type BudgetLevel = "classic" | "signature" | "premium" | "luxury";
export type OccasionType = "wedding" | "sangeet" | "festival" | "baby-shower" | "eid" | "party";
export type ComplexityLevel = "minimal" | "ornate" | "intricate" | "playful";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  budget: BudgetLevel;
  occasion: OccasionType;
  complexity: ComplexityLevel;
  imageUrl: string;
  thumbUrl?: string;
  title: LocalizedText;
  description: LocalizedText;
  timeEstimate: LocalizedText;
  priceRange: LocalizedText;
  tags: LocalizedText[];
};

export const galleryItems: GalleryItem[] = [
  {
    id: "bridal-symphony",
    category: "bridal",
    budget: "luxury",
    occasion: "wedding",
    complexity: "intricate",
    imageUrl:
      "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=1200&q=80",
    title: {
      en: "Emerald Bridal Symphony",
      hi: "एमरल्ड ब्राइडल सिम्फनी",
      gu: "એમરાલ્ડ બ્રાઇડલ સિમ્ફની",
    },
    description: {
      en: "Full-hand peacock weaves with personalised love stories etched in micro florals.",
      hi: "पूरे हाथ पर मोर और बारीक फूलों में उकेरी गई प्रेम कहानी।",
      gu: "પૂરે હાથ પર મોર અને સૂક્ષ્મ ફૂલોમાં ઉકેલાયેલ પ્રેમકથા.",
    },
    timeEstimate: {
      en: "Time: 5.5 hours",
      hi: "समय: 5.5 घंटे",
      gu: "સમય: 5.5 કલાક",
    },
    priceRange: {
      en: "₹28,000 – ₹34,000",
      hi: "₹28,000 – ₹34,000",
      gu: "₹28,000 – ₹34,000",
    },
    tags: [
      {
        en: "Peacock",
        hi: "मोर",
        gu: "મોર",
      },
      {
        en: "Full hand",
        hi: "पूर्ण हाथ",
        gu: "પૂર્ણ હાથ",
      },
    ],
  },
  {
    id: "engagement-cascade",
    category: "engagement",
    budget: "premium",
    occasion: "sangeet",
    complexity: "ornate",
    imageUrl:
      "https://images.unsplash.com/photo-1542826438-539bf71d2d75?auto=format&fit=crop&w=1200&q=80",
    title: {
      en: "Celestial Vines Engagement",
      hi: "स्वर्गीय बेलें सगाई",
      gu: "દિવ્ય વેલો સગાઇ",
    },
    description: {
      en: "Wrist-to-elbow lattice with crescents and initials for a dreamy sangeet.",
      hi: "कलाई से कुहनी तक झालर, चाँद और अक्षरों के साथ खूबसूरत संगीत।",
      gu: "કળીથી કાંડા સુધી જાળ, ચાંદ અને અક્ષરોથી સજ્જ સગાઈ.",
    },
    timeEstimate: {
      en: "Time: 3.5 hours",
      hi: "समय: 3.5 घंटे",
      gu: "સમય: 3.5 કલાક",
    },
    priceRange: {
      en: "₹16,500 – ₹19,500",
      hi: "₹16,500 – ₹19,500",
      gu: "₹16,500 – ₹19,500",
    },
    tags: [
      {
        en: "Initials",
        hi: "इनीशियल",
        gu: "આરંભાક્ષર",
      },
      {
        en: "Lattice",
        hi: "झालर",
        gu: "જાળ",
      },
    ],
  },
  {
    id: "festival-bloom",
    category: "festival",
    budget: "signature",
    occasion: "festival",
    complexity: "intricate",
    imageUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    title: {
      en: "Festival Bloom Mandala",
      hi: "उत्सव मंडला खिलावट",
      gu: "ઉત્સવ મંદિરા ખીલા",
    },
    description: {
      en: "Palm mandalas weaving paisleys for Karwa Chauth and Diwali evenings.",
      hi: "करवा चौथ और दिवाली की शामों के लिए हथेली पर मंडला और पेसली।",
      gu: "કરવા ચૌથ અને દિવાળી માટે હાથે મંડલ અને પેસ્લી.",
    },
    timeEstimate: {
      en: "Time: 2 hours",
      hi: "समय: 2 घंटे",
      gu: "સમય: 2 કલાક",
    },
    priceRange: {
      en: "₹5,500 – ₹7,500",
      hi: "₹5,500 – ₹7,500",
      gu: "₹5,500 – ₹7,500",
    },
    tags: [
      {
        en: "Mandalas",
        hi: "मंडला",
        gu: "મંડળ",
      },
      {
        en: "Paisley",
        hi: "पेसली",
        gu: "પેસ્લી",
      },
    ],
  },
  {
    id: "kids-playful",
    category: "kids",
    budget: "classic",
    occasion: "party",
    complexity: "playful",
    imageUrl:
      "https://images.unsplash.com/photo-1542293787938-4d2226a67625?auto=format&fit=crop&w=1200&q=80",
    title: {
      en: "Little Lotus Story",
      hi: "नन्ही कमल कहानी",
      gu: "નાની કમલ વાર્તા",
    },
    description: {
      en: "Quick-drying floral doodles with glitter-safe highlights for kids.",
      hi: "बच्चों के लिए ग्लिटर से सुरक्षित तेज़ सूख���े वाले फूल और डूडल।",
      gu: "બાળકો માટે ગ્લિટર સુરક્ષિત ઝડપી સુકાતી ફૂલો અને ડૂડલ્સ.",
    },
    timeEstimate: {
      en: "Time: 20 minutes",
      hi: "समय: 20 मिनट",
      gu: "સમય: 20 મિનિટ",
    },
    priceRange: {
      en: "₹1,200 – ₹1,800",
      hi: "₹1,200 – ₹1,800",
      gu: "₹1,200 – ₹1,800",
    },
    tags: [
      {
        en: "Kids",
        hi: "बच्चे",
        gu: "બાળકો",
      },
      {
        en: "Glitter",
        hi: "ग्लिटर",
        gu: "ગ્લિટર",
      },
    ],
  },
  {
    id: "custom-travel",
    category: "custom",
    budget: "luxury",
    occasion: "wedding",
    complexity: "intricate",
    imageUrl:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
    title: {
      en: "Destination Storyline",
      hi: "डेस्टिनेशन कहानी",
      gu: "ડેસ્ટિનેશન સ્ટોરીલાઇન",
    },
    description: {
      en: "Travel maps, vows, and venue silhouettes woven through palms and feet.",
      hi: "हथेलियों और पैरों पर यात्रा मानचित्र, वचन और स्थल की झलक।",
      gu: "હાથ અને પગ પર પ્રવાસના નકશા, પ્રતિજ્ઞા અને સ્થળની ઝલક.",
    },
    timeEstimate: {
      en: "Time: 7 hours",
      hi: "समय: 7 घंटे",
      gu: "સમય: 7 કલાક",
    },
    priceRange: {
      en: "₹36,000 – ₹45,000",
      hi: "₹36,000 – ₹45,000",
      gu: "₹36,000 – ₹45,000",
    },
    tags: [
      {
        en: "Story",
        hi: "कहानी",
        gu: "વાર્તા",
      },
      {
        en: "Custom",
        hi: "कस्टम",
        gu: "કસ્ટમ",
      },
    ],
  },
  {
    id: "bridal-heirloom",
    category: "bridal",
    budget: "premium",
    occasion: "wedding",
    complexity: "ornate",
    imageUrl:
      "https://images.unsplash.com/photo-1520854221050-0f4caff449fb?auto=format&fit=crop&w=1200&q=80",
    title: {
      en: "Heirloom Phool-Jaals",
      hi: "विरासत फूल-जल",
      gu: "હેરલૂમ ફૂલ-જાલ",
    },
    description: {
      en: "Heritage jaali patterns with temple bells and couple monograms.",
      hi: "मंदिर घंटियों और कपल मोनोग्राम के साथ विरासत जाली पैटर्न।",
      gu: "મંદિર ઘંટ અને દંપતી મોનોગ્રામવાળા વારસી જાળી પેટર્ન.",
    },
    timeEstimate: {
      en: "Time: 4.5 hours",
      hi: "समय: 4.5 घंटे",
      gu: "સમય: 4.5 કલાક",
    },
    priceRange: {
      en: "₹22,000 – ₹27,000",
      hi: "₹22,000 – ₹27,000",
      gu: "₹22,000 – ₹27,000",
    },
    tags: [
      {
        en: "Heritage",
        hi: "विरासत",
        gu: "વારસો",
      },
      {
        en: "Temple bells",
        hi: "मंदिर घंटियाँ",
        gu: "મંદિર ઘંટડીઓ",
      },
    ],
  },
  {
    id: "festival-eid",
    category: "festival",
    budget: "signature",
    occasion: "eid",
    complexity: "intricate",
    imageUrl:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80",
    title: {
      en: "Moonlit Eid Crescent",
      hi: "चाँदनी ईद क्रेसेंट",
      gu: "ચાંદની ઈદ અર્ધચંદ્ર",
    },
    description: {
      en: "Geometric moons with twinkling stars and Arabic calligraphy.",
      hi: "ज्यामितीय चाँद, सितारे और अरबी सुलेख का मेल।",
      gu: "જ્યામિતીય ચાંદ, તારાઓ અને અરબી સુલેખનું સંયોજન.",
    },
    timeEstimate: {
      en: "Time: 2.5 hours",
      hi: "समय: 2.5 घंटे",
      gu: "સમય: 2.5 કલાક",
    },
    priceRange: {
      en: "₹6,500 – ₹8,500",
      hi: "₹6,500 – ₹8,500",
      gu: "₹6,500 – ₹8,500",
    },
    tags: [
      {
        en: "Moon",
        hi: "चाँद",
        gu: "ચાંદ",
      },
      {
        en: "Calligraphy",
        hi: "सुलेख",
        gu: "સુલેખ",
      },
    ],
  },
  {
    id: "custom-corporate",
    category: "custom",
    budget: "signature",
    occasion: "party",
    complexity: "minimal",
    imageUrl:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80",
    title: {
      en: "Corporate Chic Mehndi",
      hi: "कॉर्पोरेट शीक मेहंदी",
      gu: "કાર્પોરેટ શીક મેહંદી",
    },
    description: {
      en: "Contemporary cuffs for brand events and media launches.",
      hi: "ब्रांड इवेंट और मीडिया लॉन्च के लिए समकालीन बैंड।",
      gu: "બ્રાન્ડ ઇવેન્ટ અને મીડિયા લોન્ચ માટે આધુનિક કફ્સ.",
    },
    timeEstimate: {
      en: "Time: 1.5 hours",
      hi: "समय: 1.5 घंटे",
      gu: "સમય: 1.5 કલાક",
    },
    priceRange: {
      en: "₹4,500 – ₹6,000",
      hi: "₹4,500 – ₹6,000",
      gu: "₹4,500 – ₹6,000",
    },
    tags: [
      {
        en: "Contemporary",
        hi: "आधुनिक",
        gu: "આધુનિક",
      },
      {
        en: "Minimal",
        hi: "सरल",
        gu: "સરળ",
      },
    ],
  },
];
