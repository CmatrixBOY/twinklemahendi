export const WHATSAPP_NUMBER = "919953884422";

export const getWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
