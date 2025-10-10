import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, MapPin, CreditCard, Shield, Palette, Calendar } from 'lucide-react';

const faqData = [
  {
    id: 1,
    icon: Calendar,
    question: 'How far in advance should I book?',
    answer: 'For bridal bookings, I recommend booking 2-3 months in advance, especially during wedding season (October-March). For regular occasions, 1-2 weeks notice is usually sufficient. However, I do accommodate last-minute bookings when possible.'
  },
  {
    id: 2,
    icon: Clock,
    question: 'How long does the mehndi application take?',
    answer: 'The time varies based on design complexity: Simple designs (30 minutes - 1 hour), Medium designs (1-3 hours), Bridal designs (3-6 hours). I always provide time estimates during consultation so you can plan accordingly.'
  },
  {
    id: 3,
    icon: MapPin,
    question: 'Do you travel for appointments?',
    answer: 'Yes! I provide home service within 25km of the city center. Travel charges may apply for distant locations. I also have a studio for those who prefer to visit. Group bookings at your location are welcome for weddings and parties.'
  },
  {
    id: 4,
    icon: CreditCard,
    question: 'What are your pricing and payment options?',
    answer: 'Pricing varies by design complexity and time required. Simple designs start from ₹300, engagement designs from ₹800, and bridal packages from ₹2500. I accept cash, UPI, and bank transfers. 50% advance required for bridal bookings.'
  },
  {
    id: 5,
    icon: Palette,
    question: 'What type of henna do you use?',
    answer: 'I use only premium quality, natural henna that gives a rich, dark color. The henna is freshly prepared and chemical-free. I also provide natural aftercare tips to ensure the best color development and longevity.'
  },
  {
    id: 6,
    icon: Shield,
    question: 'What are your aftercare recommendations?',
    answer: 'Keep the mehndi on for 6-8 hours minimum, avoid water contact for 12 hours, apply sugar-lemon mixture for better color, and moisturize regularly. I provide detailed aftercare instructions after each session.'
  },
  {
    id: 7,
    icon: Calendar,
    question: 'Do you offer group discounts?',
    answer: 'Yes! I offer attractive packages for group bookings, family functions, and corporate events. The more people in your group, the better the rates. Contact me for customized group pricing.'
  },
  {
    id: 8,
    icon: Shield,
    question: 'What is your cancellation policy?',
    answer: 'Cancellations 48 hours before the appointment are fully refundable. Cancellations within 24-48 hours are 50% refundable. Same-day cancellations forfeit the advance payment unless due to emergencies.'
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-olive mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-olive/80 max-w-2xl mx-auto">
            Find answers to common questions about our mehndi services, booking process, and aftercare
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-6 flex items-center justify-between text-left glass-hover transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pistachio-light rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-pistachio-dark" />
                  </div>
                  <h3 className="font-semibold text-olive text-lg">{item.question}</h3>
                </div>
                <motion.div
                  animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-olive" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 ml-16">
                      <p className="text-olive/80 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="font-playfair text-2xl font-bold text-olive mb-4">
              Still Have Questions?
            </h3>
            <p className="text-olive/80 mb-6">
              Don't hesitate to reach out! I'm here to help make your mehndi experience perfect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const message = encodeURIComponent("Hello Twinkle! I have some questions about your mehndi services. Could you please help me?");
                  const phoneNumber = "917041634002";
                  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                }}
                className="bg-pistachio-deep hover:bg-pistachio-soft transition-colors px-8 py-3 rounded-lg font-semibold text-olive"
              >
                WhatsApp Us
              </button>
              <button className="glass glass-hover px-8 py-3 rounded-lg font-semibold text-olive">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>

        {/* Quick Tips */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="font-playfair text-2xl font-bold text-olive text-center mb-8">
            Quick Tips for First-Time Clients
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-xl p-6">
              <h4 className="font-semibold text-olive mb-3">Before Your Appointment</h4>
              <ul className="space-y-2 text-olive/80 text-sm">
                <li>• Clean your hands/feet thoroughly</li>
                <li>• Avoid lotions or oils on the skin</li>
                <li>• Wear comfortable, loose clothing</li>
                <li>• Have a clear design preference in mind</li>
              </ul>
            </div>
            <div className="glass rounded-xl p-6">
              <h4 className="font-semibold text-olive mb-3">During the Session</h4>
              <ul className="space-y-2 text-olive/80 text-sm">
                <li>• Stay relaxed and comfortable</li>
                <li>• Feel free to ask questions</li>
                <li>• Avoid sudden movements</li>
                <li>• Let me know if you need breaks</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
