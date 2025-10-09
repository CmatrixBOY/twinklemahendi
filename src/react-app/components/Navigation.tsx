import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, Image, Star, MessageCircle, HelpCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router';

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Image, label: 'Gallery', href: '/gallery' },
  { icon: Star, label: 'Reviews', href: '#reviews' },
  { icon: MessageCircle, label: 'Contact', href: '#contact' },
  { icon: HelpCircle, label: 'FAQ', href: '#faq' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 hidden md:block"
      >
        <div className="glass m-4 rounded-2xl px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="font-dancing text-2xl font-bold text-olive"
            >
              Twinkle Batliwala
            </motion.div>
            
            <div className="flex space-x-8">
              {navItems.map((item, index) => {
                const isExternal = item.href.startsWith('#');
                return isExternal ? (
                  <motion.a
                    key={item.label}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    href={isHomePage ? item.href : `/${item.href}`}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg glass-hover text-olive font-medium"
                  >
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </motion.a>
                ) : (
                  <motion.div
                    key={item.label}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg glass-hover text-olive font-medium"
                    >
                      <item.icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed bottom-4 left-4 right-4 md:hidden z-50"
      >
        <div className="glass rounded-2xl p-4">
          <div className="flex justify-around">
            {navItems.map((item, index) => {
              const isExternal = item.href.startsWith('#');
              return isExternal ? (
                <motion.a
                  key={item.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  href={isHomePage ? item.href : `/${item.href}`}
                  className="flex flex-col items-center space-y-1 p-2 rounded-lg glass-hover text-olive"
                >
                  <item.icon size={20} />
                  <span className="text-xs font-medium">{item.label}</span>
                </motion.a>
              ) : (
                <motion.div
                  key={item.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                >
                  <Link
                    to={item.href}
                    className="flex flex-col items-center space-y-1 p-2 rounded-lg glass-hover text-olive"
                  >
                    <item.icon size={20} />
                    <span className="text-xs font-medium">{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 md:hidden z-50 glass rounded-full p-3 glass-hover"
      >
        {isOpen ? <X size={24} className="text-olive" /> : <Menu size={24} className="text-olive" />}
      </motion.button>
    </>
  );
}
