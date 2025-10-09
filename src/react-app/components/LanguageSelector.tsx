import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, X } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if user has already selected a language
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    } else {
      // Show language selection modal for first-time visitors
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    localStorage.setItem('preferredLanguage', languageCode);
    setIsOpen(false);
    setShowModal(false);
    
    console.log('Attempting to change language to:', languageCode);
    const googleTranslateSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (googleTranslateSelect) {
      console.log('Found Google Translate select element:', googleTranslateSelect);
      googleTranslateSelect.value = languageCode;
      googleTranslateSelect.dispatchEvent(new Event('change'));
      console.log('Dispatched change event.');
    } else {
      console.error('Could not find Google Translate select element.');
    }
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === selectedLanguage) || languages[0];
  };

  return (
    <>
      {/* Language Selector Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="fixed top-4 left-4 z-40"
      >
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="glass rounded-full p-3 glass-hover flex items-center space-x-2"
          >
            <Globe className="w-5 h-5 text-olive" />
            <span className="text-olive font-medium hidden sm:block">
              {getCurrentLanguage().flag} {getCurrentLanguage().name}
            </span>
            <span className="text-olive font-medium sm:hidden">
              {getCurrentLanguage().flag}
            </span>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute top-full left-0 mt-2 glass rounded-xl p-2 min-w-max"
              >
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageSelect(language.code)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors ${
                      selectedLanguage === language.code 
                        ? 'bg-pistachio-light text-olive' 
                        : 'text-olive/80 hover:bg-pistachio-light/50'
                    }`}
                  >
                    <span className="text-xl">{language.flag}</span>
                    <span className="font-medium">{language.name}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* First Visit Language Selection Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass rounded-2xl max-w-md w-full p-8 text-center"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-olive/80 hover:text-olive"
              >
                <X size={16} />
              </button>

              <div className="mb-6">
                <div className="w-16 h-16 bg-pistachio-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-pistachio-deep" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-olive mb-2">
                  Choose Your Language
                </h3>
                <p className="text-olive/80">
                  Select your preferred language for the best experience
                </p>
              </div>

              <div className="space-y-3">
                {languages.map((language) => (
                  <motion.button
                    key={language.code}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleLanguageSelect(language.code)}
                    className="w-full glass glass-hover rounded-xl p-4 flex items-center space-x-4"
                  >
                    <span className="text-2xl">{language.flag}</span>
                    <span className="font-semibold text-olive text-lg">{language.name}</span>
                  </motion.button>
                ))}
              </div>

              <p className="text-olive/60 text-sm mt-6">
                You can change this anytime using the language selector
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
