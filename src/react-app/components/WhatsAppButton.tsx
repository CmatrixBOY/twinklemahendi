import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Twinkle! I'm interested in your mehndi services. Could you please share more details?"
    );
    const phoneNumber = "917041634002"; // Replace with actual phone number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      onClick={handleWhatsAppClick}
      className="fixed right-4 bottom-9 mb-16 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-8 h-8 text-white group-hover:animate-pulse" />

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-green-400 rounded-full"
        initial={{ scale: 1, opacity: 0.7 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.button>
  );
}
