import type { LocalizedText } from "@/lib/i18n";

export type TestimonialItem = {
  id: string;
  quote: LocalizedText;
  name: string;
  role: LocalizedText;
  rating: number;
  imageUrl: string;
  videoUrl?: string;
  videoPoster?: string;
};

export const testimonials: TestimonialItem[] = [
  {
    id: "jaipur-bride",
    quote: {
      en: "Twinkle translated my love story into henna with such grace that every guest paused to admire the details.",
      hi: "ट्विंकल ने मेरी प्रेम कहानी को ऐसे मेहंदी में सजाया कि हर मेहमान उसकी बारीकी देखकर ठहर गया।",
      gu: "ટ્વિંકલે મારી પ્રેમકથા મેહંદીમાં એવી રીતે ગૂંધી ક��� દરેક મહેમાને તેની સૂક્ષ્મતા વખાણી.",
    },
    name: "Aaradhya Malhotra",
    role: {
      en: "Destination bride, Jaipur",
      hi: "डेस्टिनेशन दुल्हन, जयपुर",
      gu: "ડેસ્ટિનેશન વરઘોડાની, જયપુર",
    },
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1600068329254-0b294f1ca5df?auto=format&fit=crop&w=900&q=80",
    videoUrl:
      "https://cdn.coverr.co/videos/coverr-henna-painting-people-1838/1080p.mp4",
    videoPoster:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "mumbai-family",
    quote: {
      en: "Her calming energy kept our family relaxed and the designs mirrored every emotion we hoped to capture.",
      hi: "उनकी शांत ऊर्जा ने पूरे परिवार को सहज रखा और डिज़ाइन ने हमारी हर भावना को दर्शाया।",
      gu: "તેમની શાંત ઉર્જાએ પરિવારને નિરાંતમાં રાખ્યો અને ડિઝાઇનમાં અમારી દરેક લાગ��ી દેખાઇ.",
    },
    name: "The Kapadia Family",
    role: {
      en: "Multi-day celebration, Mumbai",
      hi: "मल्टी-डे समारोह, मुंबई",
      gu: "મલ્ટી-ડે ઉજવણી, મુંબઈ",
    },
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
    videoUrl:
      "https://cdn.coverr.co/videos/coverr-bride-henna-hands-8869/1080p.mp4",
    videoPoster:
      "https://images.unsplash.com/photo-1519752594763-2633d8d4ea29?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "dubai-engagement",
    quote: {
      en: "The glassy pistachio aesthetic matched our decor perfectly — guests thought the designs were printed decals!",
      hi: "पिस्ता ग्लास लुक हमारे डेकोर से बिल्कुल मेल खाता था — मेहमानों को लगा डिज़ाइन प्रिंटेड हैं!",
      gu: "પિસ્તા ગ્લાસ એસ્થેટિક અમારી સજાવટ સાથે સરખી હતી — મહેમાનોને લાગ્યું ડિઝાઇન પ્રિન્ટ છે!",
    },
    name: "Zoya & Imran",
    role: {
      en: "Sunset engagement, Dubai",
      hi: "सूर्यास्त सगाई, दुबई",
      gu: "સૂર્યાસ્ત સગાઈ, દુબઇ",
    },
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1616400619175-5cede98a65b1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "kids-party",
    quote: {
      en: "Our children's mehndi party was the highlight — safe pigments, adorable motifs, and endless giggles.",
      hi: "बच्चों की मेहंदी पार्टी सबसे खास रही — सुरक्षित रंग, प्यारे डिज़ाइन और ढेर सारी हंसी।",
      gu: "બાળકોની મેહંદી પાર્ટી હાઇલાઇટ બની — સુરક્ષિત રંગ, મીઠી નમૂનાઓ અને અનંત હાસ્ય.",
    },
    name: "Raina Dand",
    role: {
      en: "Intimate Mehndi brunch, Ahmedabad",
      hi: "निजी मेहंदी ब्रंच, अहमदाबाद",
      gu: "નિજિ મેહંદી બ્રંચ, અમદાવાદ",
    },
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
];
