import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, MessageCircle, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-pistachio-light/40 bg-white/10 backdrop-blur-lg py-12 sm:py-16 px-6 sm:px-10 lg:px-20">
      <div className="container mx-auto max-w-7xl mb-40 md:md-22 lb:mb-0">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Brand Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="font-dancing text-3xl font-bold text-olive mb-4 text-center sm:text-left">
              Twinkle Batliwala
            </h3>
            <p className="text-olive/80 mb-6 leading-relaxed text-center sm:text-left text-sm sm:text-base">
              Bringing art to your hands with intricate mehndi designs for over 5 years.
              From bridal ceremonies to festive celebrations, every pattern tells a unique story
              crafted with love and precision.
            </p>

            <div className="flex justify-center sm:justify-start flex-wrap gap-4">
              {[
                { icon: Instagram, color: 'from-purple-500 to-pink-500', link: 'https://instagram.com/' },
                { icon: Facebook, color: 'bg-blue-600', link: 'https://facebook.com/' },
                {
                  icon: MessageCircle,
                  color: 'bg-green-500',
                  action: () => {
                    const message = encodeURIComponent("Hello Twinkle! I'm interested in your mehndi services.");
                    window.open(`https://wa.me/917041634002?text=${message}`, '_blank');
                  },
                },
              ].map((item, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={item.action || (() => window.open(item.link, '_blank'))}
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white shadow-md ${
                    item.color.includes('from') ? `bg-gradient-to-br ${item.color}` : item.color
                  }`}
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-playfair text-xl font-bold text-olive mb-4 text-center sm:text-left">
              Quick Links
            </h4>
            <ul className="space-y-2 text-olive/80 text-center sm:text-left">
              {['Home', 'Gallery', 'Reviews', 'FAQ', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-pistachio-deep transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-playfair text-xl font-bold text-olive mb-4 text-center sm:text-left">
              Contact
            </h4>
            <div className="space-y-3 text-olive/80 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Phone className="w-4 h-4 text-pistachio-deep" />
                <span>+91 70416 34002</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <MapPin className="w-4 h-4 text-pistachio-deep" />
                <span>Surat & Surrounding Areas</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-14"
        >
          <h4 className="font-playfair text-xl font-bold text-olive mb-6 text-center">
            Our Services
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
            {[
              'Bridal Mehndi',
              'Engagement Designs',
              'Festival Patterns',
              'Baby Shower Mehndi',
              'Custom Designs',
            ].map((service) => (
              <div
                key={service}
                className="glass rounded-lg p-3 sm:p-4 text-center w-full sm:w-auto"
              >
                <span className="text-olive font-medium text-sm sm:text-base">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-pistachio-light/30 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-xs md:text-md  space-y-4 md:space-y-0 ">
            <div className="flex items-center justify-center space-x-2 text-olive/80">
              <span>© {currentYear} Twinkle Batliwala – Crafted with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>& Henna</span>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm text-olive/80">
              <a href="/privacy" className="hover:text-pistachio-deep transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-pistachio-deep transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>

          <p className="mt-6 text-center text-olive/60 text-xs sm:text-sm">
            Professional Mehndi Artist serving Surat and surrounding areas with love and artistry.
          </p>
        </motion.div>

        {/* Floating Henna Pattern */}
        <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none hidden sm:block">
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
