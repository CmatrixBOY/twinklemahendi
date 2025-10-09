import type { LocalizedText } from "@/lib/i18n";

export type StatItem = {
  id: string;
  value: string;
  label: LocalizedText;
  description: LocalizedText;
  icon: "heart" | "sparkles" | "feather" | "smile";
};

export const stats: StatItem[] = [
  {
    id: "clients",
    value: "2,800+",
    label: {
      en: "Clients served globally",
      hi: "दुनिया भर में सेवा किए क्लाइंट",
      gu: "વિશ્વભરના ક્લાઈન્ટ સેવા",
    },
    description: {
      en: "From intimate home ceremonies to grand destination weddings.",
      hi: "घर के छोटे समारोहों से लेकर डेस्टिनेशन वेडिंग तक।",
      gu: "ઘરના નાના પ્રસંગોથી લઈને ડેસ્ટિનેશન વેડિંગ સુધી.",
    },
    icon: "heart",
  },
  {
    id: "designs",
    value: "850+",
    label: {
      en: "Signature designs sketched",
      hi: "तैयार किए गए अनोखे डिज़ाइन",
      gu: "તૈયાર કરેલા વિશિષ્ટ ડિઝાઇન",
    },
    description: {
      en: "Motifs customised for celebrations across cultures.",
      hi: "हर संस्कृति के उत्सवों के लिए विशेष रूप से तैयार।",
      gu: "દરેક સંસ્કૃતિના ઉત્સવો માટે ખાસ તૈયાર.",
    },
    icon: "sparkles",
  },
  {
    id: "experience",
    value: "12",
    label: {
      en: "Years of timeless artistry",
      hi: "अनुभव के वर्ष",
      gu: "અનુભવના વર્ષ",
    },
    description: {
      en: "Guiding brides with calm, detailed mehndi rituals since 2013.",
      hi: "2013 से सुकून भरे मेहंदी अनुष्ठानों का मार्गदर्शन।",
      gu: "2013 થી શાંતિપૂર્ણ મેહંદી વિધિઓનું માર્ગદર્શન.",
    },
    icon: "feather",
  },
  {
    id: "satisfaction",
    value: "98%",
    label: {
      en: "Client delight score",
      hi: "क्लाइंट संतुष्टि",
      gu: "ક્લાઈન્ટ સંતોષ",
    },
    description: {
      en: "Referrals and heartfelt reviews from glowing families.",
      hi: "संतुष्ट परिवारों से मिली सिफ़ारिशें और प्यार भरी बातें।",
      gu: "સંતોષી પરિવારોથી મળેલી ભલામણો અને પ્રેમાળ શબ્દો.",
    },
    icon: "smile",
  },
];
