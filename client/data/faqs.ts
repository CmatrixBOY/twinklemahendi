import type { LocalizedText } from "@/lib/i18n";

export type FaqItem = {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
};

export const faqs: FaqItem[] = [
  {
    id: "booking",
    question: {
      en: "How far in advance should I book my bridal mehndi?",
      hi: "ब्राइडल मेहंदी कितने समय पहले बुक करनी चाहिए?",
      gu: "બ્રાઇડલ મેહંદી કેટલા સમય પહેલા બુક કરવી?",
    },
    answer: {
      en: "Peak season brides reserve 3–6 months ahead. Weekday or intimate bookings can often be accommodated sooner — share your dates and we'll confirm instantly.",
      hi: "व्यस्त सीज़न में 3-6 महीने पहले बुकिंग करना बेहतर है। सप्��ाह के दिनों या छोटे समारोहों की तारीखें अक्सर जल्दी मिल जाती हैं — तारीखें भेजें और हम तुरंत पुष्टि करेंगे।",
      gu: "પીક સીઝનમાં 3-6 મહિના અગાઉ બુક કરવું શ્રેષ્ઠ છે. સપ્તાહના દિવસો અથવા નાના પ્રસંગો વહેલા મળી શકે — તમારી તારીખો મોકલો અને અમે તરત ખાતરી આપીશું.",
    },
  },
  {
    id: "travel",
    question: {
      en: "Do you travel for destination weddings?",
      hi: "क्या आप डेस्टिनेशन वेडिंग के लिए यात्रा करती हैं?",
      gu: "શું તમે ડેસ્ટિનેશન વેડિંગ માટે મુસાફરી કરો છો?",
    },
    answer: {
      en: "Absolutely. Travel and stay are coordinated with your planner. We bring sterile cones, aftercare kits, and an assistant for large guest lists.",
      hi: "हाँ, हम ट्रैवल और स्टे आपके प्ला��र के साथ समन्वयित करते हैं। बड़े गेस्ट लिस्ट के लिए स्टरल कोन, आफ्टरकेयर किट और सहायक साथ लाते हैं।",
      gu: "હા, મુસાફરી અને રહેવાની વ્યવસ્થા તમારા પ્લાનર સાથે કરીએ છીએ. મોટી મહેમાન યાદી માટે સ્ટેરાઇલ કોણ, આફ્ટરકેર કિટ અને સહાયક લવીએ છીએ.",
    },
  },
  {
    id: "aftercare",
    question: {
      en: "How do I ensure a deep, long-lasting stain?",
      hi: "गाढ़ा और लंबे समय तक टिकने वाला दाग कैसे मिले?",
      gu: "ઘાટો અને લાંબો ટકાઉ ડાઘ કેવી રીતે મેળવવો?",
    },
    answer: {
      en: "Keep the mehndi paste on for 6–8 hours, seal with our clove-lemon mist, avoid water for 24 hours, and moisturise with natural balms only.",
      hi: "मेहंदी को 6-8 घंटे लगाए रखें, हमारे लौंग-नींबू मिस्ट से सील करे��, 24 घंटे तक पानी से बचें और केवल प्राकृतिक बाम से मॉइस्चराइज़ करें।",
      gu: "મેહંદી 6-8 કલાક રાખો, અમારી લવિંગ-લીંબુ સ્પ્રે થી સીલ કરો, 24 કલાક પાણીથી બચો અને કુદરતી બામથી જ ભેજ આપો.",
    },
  },
  {
    id: "pricing",
    question: {
      en: "What influences the pricing tiers?",
      hi: "मूल्य निर्धारण किन बातों पर निर्भर करता है?",
      gu: "ભાવ કેટલાં પરિબળો પર આધારિત છે?",
    },
    answer: {
      en: "Coverage, intricacy, travel, and guest count guide the investment. We share transparent quotations with multiple package pathways for you to choose from.",
      hi: "कवरेज, बारीकी, यात्रा और मेहमानों की संख्या निवेश को प्रभावित करती है। हम आपके लिए कई पैकेज विकल्पों के साथ पारदर्शी कोटेशन भेजते हैं���",
      gu: "કવરેજ, સૂક્ષ્મતા, મુસાફરી અને મહેમાનોની સંખ્યા રોકાણ નક્કી કરે છે. અમે પારદર્શક કોટેશન અને વિવિધ પેકેજ વિકલ્પો મોકલીએ છીએ.",
    },
  },
  {
    id: "henna-safety",
    question: {
      en: "Is the henna safe for sensitive skin?",
      hi: "क्या मेहंदी संवेदनशील त्वचा के लिए सुरक्षित है?",
      gu: "શું મેહંદી સંવેદનશીલ ત્વચા માટે સુરક્ષિત છે?",
    },
    answer: {
      en: "We hand-mix natural Rajasthani henna with organic oils. No PPD, dyes, or chemical accelerators — patch tests are offered on request.",
      hi: "हम प्राकृतिक राजस्थानी मेहंदी को ऑर्गेनिक तेलों के साथ हाथ से मिलाते हैं। इसमें कोई PPD, डाई या रसायन नहीं होते — अनुरोध पर पैच टेस्ट उपलब्ध है।",
      gu: "અમે કુદરતી ર���જસ્થાની મેહંદીને ઓર્ગેનિક તેલ સાથે હાથેથી તૈયાર કરીએ છીએ. તેમાં PPD, રંગ કે કેમિકલ નથી — વિનંતી પર પેચ ટેસ્ટ આપીએ છીએ.",
    },
  },
];
