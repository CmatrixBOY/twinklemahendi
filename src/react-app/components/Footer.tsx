import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 border-t border-pistachio-light/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="font-dancing text-3xl font-bold text-olive mb-4">
              Twinkle Batliwala
            </h3>
            <p className="text-olive/80 mb-6 leading-relaxed">
              Bringing art to your hands with intricate mehndi designs for over 5 years. 
              From bridal ceremonies to festive celebrations, every pattern tells a unique story 
              crafted with love and precision.
            </p>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white"
              >
                <Instagram className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white"
              >
                <Facebook className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const message = encodeURIComponent("Hello Twinkle! I'm interested in your mehndi services.");
                  window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
                }}
                className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white"
              >
                <MessageCircle className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-playfair text-xl font-bold text-olive mb-4">Quick Links</h4>
            <ul className="space-y-3 text-olive/80">
              <li><a href="#home" className="hover:text-pistachio-deep transition-colors">Home</a></li>
              <li><a href="#gallery" className="hover:text-pistachio-deep transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-pistachio-deep transition-colors">Reviews</a></li>
              <li><a href="#faq" className="hover:text-pistachio-deep transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-pistachio-deep transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-playfair text-xl font-bold text-olive mb-4">Contact</h4>
            <div className="space-y-3 text-olive/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-pistachio-deep" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-pistachio-deep" />
                <span>twinkle.batliwala@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-pistachio-deep" />
                <span>Mumbai & Surrounding Areas</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h4 className="font-playfair text-xl font-bold text-olive mb-6 text-center">Our Services</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Bridal Mehndi', 'Engagement Designs', 'Festival Patterns', 'Kids Mehndi', 'Custom Designs'].map((service) => (
              <div key={service} className="glass rounded-lg p-4 text-center">
                <span className="text-olive font-medium text-sm">{service}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-pistachio-light/30 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-olive/80">
              <span>© {currentYear} Twinkle Batliwala – Crafted with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>& Henna</span>
            </div>
            
            <div className="flex space-x-6 text-sm text-olive/80">
              <a href="/privacy" className="hover:text-pistachio-deep transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-pistachio-deep transition-colors">Terms & Conditions</a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-olive/60 text-sm">
              Premium Mehndi Artist serving Mumbai and surrounding areas with love and artistry
            </p>
          </div>
        </motion.div>

        {/* Floating Henna Pattern */}
        <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <path 
              d="M100,50 Q120,70 100,90 Q80,70 100,50 M70,100 Q90,80 110,100 Q90,120 70,100 M130,100 Q150,80 170,100 Q150,120 130,100 M100,150 Q120,130 100,110 Q80,130 100,150"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="text-pistachio-deep"
            />
            <circle cx="100" cy="100" r="5" fill="currentColor" className="text-pistachio-deep" />
          </svg>
        </div>
      </div>
    </footer>
  );
}
