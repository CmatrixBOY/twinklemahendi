import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { copy } from "@/data/copy";
import { getWhatsAppLink } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export const FloatingWhatsApp = () => {
  const { language } = useLanguage();
  const strings = copy[language];
  const message = `${strings.contact.heading} — ${strings.contact.subheading}`;

  return (
    <motion.a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 hidden rounded-full bg-primary px-5 py-3 text-primary-foreground shadow-glow transition hover:-translate-y-1 hover:shadow-xl md:flex md:items-center md:gap-3"
      aria-label={strings.contact.form.whatsapp}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="font-medium">{strings.contact.form.whatsapp}</span>
    </motion.a>
  );
};
