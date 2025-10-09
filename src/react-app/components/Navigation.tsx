import { motion } from 'framer-motion';
import {Home, Image, Star, MessageCircle, HelpCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: Image, label: 'Gallery', href: '/gallery' },
  { icon: Star, label: 'Reviews', href: '#reviews' },
  { icon: MessageCircle, label: 'Contact', href: '#contact' },
  { icon: HelpCircle, label: 'FAQ', href: '#faq' },
];

export default function Navigation() {
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 hidden md:block mr-40 ml-40 "
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
                const isAnchor = item.href.startsWith('#');
                if (isAnchor) {
                  return (
                    <motion.a
                      key={item.label}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg glass-hover text-olive font-medium"
                    >
                      <item.icon size={18} />
                      <span>{item.label}</span>
                    </motion.a>
                  );
                }
                return (
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
        className="fixed bottom-0 left-0 right-0 md:hidden z-50 mobile-safe"
      >
        <div className="glass rounded-t-3xl px-2 py-3 border-t-2 border-white/30">
          <div className="flex justify-around items-center max-w-sm mx-auto">
            {navItems.map((item, index) => {
              const isAnchor = item.href.startsWith('#');
              if (isAnchor) {
                return (
                  <motion.a
                    key={item.label}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="flex flex-col items-center space-y-1 p-3 rounded-2xl glass-hover text-olive mobile-tap min-w-0 flex-1"
                  >
                    <item.icon size={22} strokeWidth={1.5} />
                    <span className="text-xs font-medium truncate">{item.label}</span>
                  </motion.a>
                );
              }
              return (
                <motion.div
                  key={item.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  className="flex-1 min-w-0"
                >
                  <Link
                    to={item.href}
                    className="flex flex-col items-center space-y-1 p-3 rounded-2xl glass-hover text-olive mobile-tap w-full"
                  >
                    <item.icon size={22} strokeWidth={1.5} />
                    <span className="text-xs font-medium truncate">{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Mobile Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 md:hidden z-40 mobile-safe-top mr-10 ml-40"
      >
        <div className="glass m-2 rounded-2xl px-4 py-3 flex items-center justify-between text-center">

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="font-dancing text-xl font-bold text-olive"
            >
            Twinkle Batliwala
          </motion.div>
          
          {/* <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            onClick={() => setIsOpen(!isOpen)}
            className="glass rounded-full p-2 glass-hover mobile-tap"
          >
            {isOpen ? <X size={20} className="text-olive" /> : <Menu size={20} className="text-olive" />}
          </motion.button> */}
        </div>
      </motion.div>
    </>
  );
}
