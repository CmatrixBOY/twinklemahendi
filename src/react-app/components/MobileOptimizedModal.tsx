import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileOptimizedModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  fullScreen?: boolean;
  className?: string;
}

export default function MobileOptimizedModal({
  isOpen,
  onClose,
  children,
  title,
  fullScreen = false,
  className = ''
}: MobileOptimizedModalProps) {
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: fullScreen ? '100%' : '50%',
      scale: fullScreen ? 1 : 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      y: fullScreen ? '100%' : '50%',
      scale: fullScreen ? 1 : 0.8
    }
  };

  const modalTransition = {
    type: "spring" as const,
    damping: 25,
    stiffness: 300
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={modalTransition}
              onClick={(e) => e.stopPropagation()}
              className={`
                glass rounded-t-3xl md:rounded-3xl w-full max-w-lg
                ${fullScreen 
                  ? 'h-full md:h-auto md:max-h-[90vh]' 
                  : 'max-h-[90vh] md:max-h-[80vh]'
                }
                overflow-hidden mobile-safe
                ${className}
              `}
            >
              {/* Header */}
              {(title || !fullScreen) && (
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-olive/10">
                  {title && (
                    <h2 className="font-playfair text-lg md:text-xl font-bold text-olive">
                      {title}
                    </h2>
                  )}
                  <button
                    onClick={onClose}
                    className="ml-auto w-8 h-8 rounded-full glass flex items-center justify-center text-olive hover:text-pistachio-deep transition-colors mobile-tap"
                  >
                    <X size={18} />
                  </button>
                </div>
              )}

              {/* Content */}
              <div className={`
                overflow-y-auto 
                ${fullScreen ? 'h-full' : 'max-h-[calc(90vh-4rem)]'}
                ${title || !fullScreen ? '' : 'pt-4 md:pt-6'}
              `}>
                {fullScreen && !title && (
                  <div className="absolute top-4 right-4 z-10">
                    <button
                      onClick={onClose}
                      className="w-8 h-8 rounded-full glass flex items-center justify-center text-olive hover:text-pistachio-deep transition-colors mobile-tap"
                    >
                      <X size={18} />
                    </button>
                  </div>
                )}
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

// Hook for mobile modal management
export function useMobileModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = React.useCallback(() => setIsOpen(true), []);
  const closeModal = React.useCallback(() => setIsOpen(false), []);
  const toggleModal = React.useCallback(() => setIsOpen(prev => !prev), []);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal
  };
}
