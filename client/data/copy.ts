import type { LanguageCode } from "@/lib/i18n";

export type CopySections = {
  nav: {
    home: string;
    gallery: string;
    reviews: string;
    contact: string;
    faq: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
    note: string;
  };
  stats: {
    heading: string;
    subheading: string;
  };
  gallery: {
    heading: string;
    subheading: string;
    filters: {
      type: string;
      budget: string;
      occasion: string;
      complexity: string;
      clear: string;
    };
    aiTitle: string;
    aiSubtitle: string;
    aiCTA: string;
    watermark: string;
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    subheading: string;
    videoLabel: string;
  };
  faq: {
    heading: string;
    subheading: string;
  };
  contact: {
    heading: string;
    subheading: string;
    form: {
      name: string;
      phone: string;
      eventDate: string;
      message: string;
      submit: string;
      whatsapp: string;
      whatsappHint: string;
    };
    calendarTitle: string;
    calendarSubtitle: string;
    socialsTitle: string;
  };
  footer: {
    signature: string;
    rights: string;
  };
  languageModal: {
    title: string;
    subtitle: string;
    button: string;
    reminder: string;
  };
  availability: string;
  legal: {
    privacyTitle: string;
    termsTitle: string;
    privacyIntro: string;
    termsIntro: string;
    placeholder: string;
  };
};

export const copy: Record<LanguageCode, CopySections> = {
  en: {
    nav: {
      home: "Home",
      gallery: "Gallery",
      reviews: "Reviews",
      contact: "Contact",
      faq: "FAQ",
    },
    hero: {
      eyebrow: "Pistachio Glass Elegance",
      heading: "Twinkle Batliwala — Bringing Art to Your Hands",
      subheading:
        "Signature mehndi artistry that merges heirloom motifs with modern finesse, curated for weddings, celebrations, and cherished life moments.",
      ctaPrimary: "Explore Designs",
      ctaSecondary: "Book a Session",
      note: "Serving joyful brides, families, and luxe events across India and worldwide.",
    },
    stats: {
      heading: "Every stroke tells a heartfelt story",
      subheading:
        "A trusted mehndi companion for soulful brides, destination ceremonies, and families who treasure detail.",
    },
    gallery: {
      heading: "Curated Mehndi Stories",
      subheading:
        "Browse handcrafted designs filtered by style, occasion, and detail — each finished with a bespoke Twinkle touch.",
      filters: {
        type: "Style",
        budget: "Budget",
        occasion: "Occasion",
        complexity: "Detail",
        clear: "Reset filters",
      },
      aiTitle: "Not sure where to begin?",
      aiSubtitle:
        "Let our AI muse suggest the perfect design based on your celebration and investment.",
      aiCTA: "Inspire me",
      watermark: "Twinkle Batliwala",
    },
    testimonials: {
      eyebrow: "Testimonials",
      heading: "Stories written in henna",
      subheading:
        "Real celebrations, real emotions — hear from brides and families who trusted Twinkle's artistry.",
      videoLabel: "Watch the love",
    },
    faq: {
      heading: "Frequently asked moments",
      subheading:
        "Everything you need to plan a calm, joy-filled mehndi experience from consultation to aftercare.",
    },
    contact: {
      heading: "Begin your mehndi journey",
      subheading:
        "Share your event details and we will respond with bespoke schedules, pricing, and availability within 24 hours.",
      form: {
        name: "Full name",
        phone: "Phone number",
        eventDate: "Event date",
        message: "Tell us about your celebration",
        submit: "Send request",
        whatsapp: "Send via WhatsApp",
        whatsappHint: "Opens WhatsApp with your message",
      },
      calendarTitle: "Reserve your date",
      calendarSubtitle:
        "Select a preferred slot and we'll confirm with a personalised itinerary.",
      socialsTitle: "Follow the artistry",
    },
    footer: {
      signature: "© 2025 Twinkle Batliwala – Crafted with love & henna.",
      rights:
        "All artistry and content are protected. Kindly request permission for reuse.",
    },
    languageModal: {
      title: "Choose your language",
      subtitle:
        "Welcome! Select how you'd like to experience Twinkle's world of mehndi.",
      button: "Continue",
      reminder: "You can change this anytime from the menu.",
    },
    availability: "Check availability",
    legal: {
      privacyTitle: "Privacy Policy",
      termsTitle: "Terms & Conditions",
      privacyIntro:
        "We respect your privacy. WhatsApp conversations remain confidential and personal details are only used to coordinate appointments.",
      termsIntro:
        "Bookings are confirmed upon advance payment. Travel requests are fulfilled subject to schedule and additional arrangements.",
      placeholder:
        "Detailed policy content will appear here soon. Reach out if you need the document immediately.",
    },
  },
  hi: {
    nav: {
      home: "होम",
      gallery: "डिज़ाइन",
      reviews: "प्रशंसापत्र",
      contact: "संपर्क",
      faq: "सवाल-जवाब",
    },
    hero: {
      eyebrow: "पिस्ता ग्लास एलिगेंस",
      heading: "Twinkle Batliwala — आपकी हथेलियों पर कला",
      subheading:
        "पारंपरिक ��ेहंदी को आधुनिक नज़ाकत के साथ मिलाकर खास मौकों के लिए तैयार की गई प्रीमियम कला।",
      ctaPrimary: "डिज़ाइन देखें",
      ctaSecondary: "बुकिंग करें",
      note: "भारत और विदेश में खुशियों से भरे समारोहों को स्नेहिल मेहंदी से सज़ाते हुए।",
    },
    stats: {
      heading: "हर रेखा में बसे हैं किस्से",
      subheading:
        "विश्वसनीय मेहंदी साथी, जो हर दुल्हन और परिवार की भावनाओं को बारीकी से सजाता है।",
    },
    gallery: {
      heading: "चुनी हुई मेहंदी कहानियाँ",
      subheading:
        "अवसर, शैली और बारीकी के अनुसार तैयार किए गए डिज़ाइनों को देखें — हर एक पर ट्विंकल की अनूठी छाप।",
      filters: {
        type: "शैली",
        budget: "बजट",
        occasion: "अवसर",
        complexity: "बारीकी",
        clear: "फ़िल्टर हटाएँ",
      },
      aiTitle: "समझ नहीं आ रहा कहाँ से शुरू करें?",
      aiSubtitle:
        "आपके आयोजन और बजट के अनुसार हमारी एआई प्रेरणा सही डिज़ाइन सुझाएगी।",
      aiCTA: "मुझे प्रेरित करें",
      watermark: "Twinkle Batliwala",
    },
    testimonials: {
      eyebrow: "प्रशंसापत्र",
      heading: "मेहंदी में लिखी कहानियाँ",
      subheading:
        "वास्तविक समारोह और भावनाएँ — सुनिए उन परिवारों की आवाज़ जो ट्विंकल की कला पर भरोसा करते हैं।",
      videoLabel: "प्यार को देखें",
    },
    faq: {
      heading: "अक्सर पूछे गए सवाल",
      subheading:
        "परामर्श से लेकर आफ्टरकेयर तक शांत और आनंदमय अनुभव के लिए सारी जानकारी।",
    },
    contact: {
      heading: "अपनी मेहंदी यात्रा शुरू करें",
      subheading:
        "अपने आयोजन का विवरण साझा करें और हम 24 घंटे में शेड्यूल, मूल्य और उपलब्धता के साथ जवाब देंगे।",
      form: {
        name: "पूरा नाम",
        phone: "फोन नंबर",
        eventDate: "कार्यक्रम की तारीख",
        message: "अपने समारोह के बारे में बताइए",
        submit: "अनुरोध भेजें",
        whatsapp: "व्हाट्सऐप से भेजें",
        whatsappHint: "आपका संदेश व्हाट्सऐप में खुलेगा",
      },
      calendarTitle: "अपनी तिथि चुनें",
      calendarSubtitle:
        "पसंदीदा स्लॉट चुनें, हम व्यक्तिगत यात्रा कार्यक्रम के साथ पुष्टि करेंगे।",
      socialsTitle: "कला को फॉ���ो करें",
    },
    footer: {
      signature: "© 2025 ट्विंकल बटलिवाला – प्रेम और मेहंदी से सजी रचना।",
      rights: "सभी कला और सामग्री सुरक्षित हैं। उपयोग से पहले अनुमति लें।",
    },
    languageModal: {
      title: "अपनी भाषा चुनें",
      subtitle:
        "स्वागत है! बताइए कि आप ट्विंकल की दुनिया को किस भाषा में देखना चाहेंगे।",
      button: "आगे बढ़ें",
      reminder: "आप इसे कभी भी मेनू से बदल सकते हैं।",
    },
    availability: "उपलब्धता देखें",
    legal: {
      privacyTitle: "गोपनीयता नीति",
      termsTitle: "नियम व शर्तें",
      privacyIntro:
        "हम आपकी निजता का सम्मान करते हैं। व्हाट्सऐप बातचीत गोपनीय रहती है और व्यक्तिगत जानकारी केवल बुकिंग के लिए उपयोग होती है।",
      termsIntro:
        "बुकिंग अग्रिम भुगतान पर सुनिश्चित होती है। यात्रा संबंधी अनुरोध समय-सारणी और अतिरिक्त व्यवस्थाओं के अनुसार पूरे किए जाते हैं।",
      placeholder:
        "विस्तृत नीति शीघ्र ही उपलब्ध होगी। यदि आपको तुरंत चाहिए तो कृपया संपर्क करें।",
    },
  },
  gu: {
    nav: {
      home: "હોમ",
      gallery: "ડિઝાઇન",
      reviews: "પ્રશંસા",
      contact: "સંપર્ક",
      faq: "પ્રશ્નો",
    },
    hero: {
      eyebrow: "પિસ્તા ગ્લાસ એલિગન્સ",
      heading: "Twinkle Batliwala — તમારી હથેળીઓ પર કળા",
      subheading:
        "પરંપરાગત મેહંદીને આધુનિક નાજુકાઈ સાથે ગૂંથી બનેલો પ્રીમિયમ અનુભવ, લગ્ન અને ઉત્સવો માટે ��ૈયાર.",
      ctaPrimary: "ડિઝાઇન જુઓ",
      ctaSecondary: "સત્ર બુક કરો",
      note: "ભારત અને વિશ્વભરના આનંદમય પ્રસંગોને પ્રેમથી મેહંદીથી શણગારતા.",
    },
    stats: {
      heading: "દરેક રેખા એક કથા કહે છે",
      subheading:
        "વિશ્વાસપાત્ર મેહંદી સાથી, જે દુલ્હનો અને પરિવારની લાગણીઓ ને બારીકાઇથી વ્યક્ત કરે છે.",
    },
    gallery: {
      heading: "પસંદ કરેલી મેહંદી વાર્તાઓ",
      subheading:
        "શૈલી, પ્રસંગ અને વિગત પ્રમાણે ફિલ્ટર કરેલા હસ્તકલા ડિઝાઇન — દરેકમાં ટ્વિંકલનો ખાસ સ્પર્શ.",
      filters: {
        type: "શૈલી",
        budget: "બજેટ",
        occasion: "પ્રસંગ",
        complexity: "વિગત",
        clear: "ફિલ્ટર સાફ કરો",
      },
      aiTitle: "ક્યાંથી શ��ૂઆત કરવી?",
      aiSubtitle:
        "તમારા પ્રસંગ અને રોકાણ પ્રમાણે અમારી AI પ્રેરણા યોગ્ય ડિઝાઇન સૂચવે છે.",
      aiCTA: "મને પ્રેરણા આપો",
      watermark: "Twinkle Batliwala",
    },
    testimonials: {
      eyebrow: "પ્રશંસા",
      heading: "મેહંદીમાં ગૂંથાયેલી યાદો",
      subheading:
        "વાસ્તવિક ઉજવણીઓ અને ભાવનાઓ — પરિવારોની વાણી સાંભળો જેમણે ટ્વિંકલ પર વિશ્વાસ કર્યો.",
      videoLabel: "પ્રેમ જુઓ",
    },
    faq: {
      heading: "વારંવાર પૂછાતા પ્રશ્નો",
      subheading:
        "પરામર્શથી લઈને કાળજી સુધી શાંત અને આનંદમય અનુભવ માટેની તમામ માહિતી.",
    },
    contact: {
      heading: "તમારી મેહંદી સફર શરૂ કરો",
      subheading:
        "તમારા પ્રસંગની વિગતો શેર કરો અને અમે 24 કલાકમાં સમયપત્રક, કિંમત અને ઉપલબ્ધતા સાથે પ્રતિસાદ આપીશું.",
      form: {
        name: "પૂરું નામ",
        phone: "ફોન નંબર",
        eventDate: "ઈવેન્ટની તારીખ",
        message: "તમારા પ્રસંગ વિશે જણાવો",
        submit: "વિનંતી મોકલો",
        whatsapp: "વોટ્સએપ દ્વારા મોકલો",
        whatsappHint: "તમારો સંદેશ વોટ્સએપમાં ખુલશે",
      },
      calendarTitle: "તમારી તારીખ પસંદ કરો",
      calendarSubtitle:
        "પસંદગીનો સમય પસંદ કરો, અમે વ્યક્તિગત આયોજન સાથે ખાતરી આપશું.",
      socialsTitle: "કળાને અનુસરો",
    },
    footer: {
      signature: "© 2025 ટ્વિંકલ બટલીવાલા – પ્રેમ અને મેહંદી સાથે રચાયેલ.",
      rights: "બધી સર્જનાઓ સુરક્ષિત છે. ઉપયોગ પહેલાં મંજૂરી મેળવો.",
    },
    languageModal: {
      title: "તમારી ભાષા પસંદ કરો",
      subtitle:
        "સ્વાગત છે! ટ્વિંકલની દુનિયાનો અનુભવ કઈ ભાષામાં કરશો તે પસંદ કરો.",
      button: "આગળ વધો",
      reminder: "તમે આને ક્યારેય પણ મેનુમાંથી બદલી શકો છો.",
    },
    availability: "ઉપલબ્ધતા તપાસો",
    legal: {
      privacyTitle: "ગોપનીયતા નીતિ",
      termsTitle: "નિયમો અને શરતો",
      privacyIntro:
        "અમે તમારી ગોપનીયતાનો માન રાખીએ છીએ. વોટ્સએપ વાતચીત ગોપનીય રહે છે અને માહિતી માત્ર બુકિંગ માટે વપરાય છે.",
      termsIntro:
        "અડવાન્સ ચુકવણી પર બુકિંગ નિશ્ચિત થાય છે. પ્રવાસ માટેની વિનંતીઓ સમયપત્રક પ્રમાણે હાથ ધરવામાં આવે છે.",
      placeholder:
        "વિગતવાર નીતિ જલ્દી ઉપલબ્ધ થશે. તરત જરૂરી હોય તો કૃપા કરીને સંપર્ક કરો.",
    },
  },
};
