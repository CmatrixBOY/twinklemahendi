import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Clock, DollarSign, MessageCircle, X, Eye } from 'lucide-react';
import { isMobile } from 'react-device-detect';

const categories = ['All', 'Bridal', 'Engagement', 'Siders', 'Baby shower', 'Minimalist'];

const designs = [
  {
    id: 1,
    title: 'Classic Full Bridal Mehendi',
    category: 'Bridal',
    image: '/Mahendi_images/Bridal/bridal_3_4500.webp',
    time: '4-5 hours',
    price: '₹4500-5500',
    complexity: 'High',
    description: 'A stunning full-hand bridal design with intricate human figures, offering a rich and traditional look.'
  },
  {
    id: 2,
    title: 'Romantic Engagement Ceremony Design',
    category: 'Engagement',
    image: '/Mahendi_images/Engagement/engagement_1_2500.webp',
    time: '4-5 hours',
    price: '₹4500-5500',
    complexity: 'High',
    description: 'A romantic traditional design with human figures, lotus motifs, and rich detailing.'
  },
  {
    id: 3,
    title: 'Traditional Festival Mehendi',
    category: 'Festival',
    image: '/Mahendi_images/Festival/festival_1_900.webp',
    time: '2-3 hours',
    price: '₹900-1000',
    complexity: 'Medium',
    description: 'An elegant, affordable festival design blending traditional and modern styles with lotus motifs.'
  },
  {
    id: 4,
    title: 'Traditional Baby Shower Henna',
    category: 'Baby shower',
    image: '/Mahendi_images/BabyShower/babyshower_1_3500.webp',
    time: '4-5 hours',
    price: '₹3500-4000',
    complexity: 'High',
    description: 'A special traditional baby shower design with delicate lotus motifs and symbolic human figures.'
  },
  {
    id: 5,
    title: 'Ultra-Minimalist Finger/Wrist Design',
    category: 'Minimalist',
    image: '/Mahendi_images/minimal/minimal_1_200.webp',
    time: '1-2 hours',
    price: '₹200-300',
    complexity: 'Variable',
    description: 'Our most affordable, quick, and minimalist design with delicate lotus motifs for a subtle everyday look.'
  },
  {
    id: 6,
    title: 'Peacock & Lotus Sider',
    category: 'Siders',
    image: '/Mahendi_images/Sider/sider_6_700.webp',
    time: '1-2 hours',
    price: '₹700-800',
    complexity: 'Low',
    description: 'Affordable Mordan design with peacock and lotus motifs.'
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDesign, setSelectedDesign] = useState<typeof designs[0] | null>(null);
  const [likedDesigns, setLikedDesigns] = useState<number[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const filteredDesigns = selectedCategory === 'All' 
    ? designs 
    : designs.filter(design => design.category === selectedCategory);

  useEffect(() => {
    const imagePromises = filteredDesigns.map(design => {
      return new Promise<void>(resolve => {
        const img = new Image();
        img.src = design.image;
        img.onload = () => resolve();
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, [filteredDesigns]);

  const toggleLike = (designId: number) => {
    setLikedDesigns(prev => 
      prev.includes(designId) 
        ? prev.filter(id => id !== designId)
        : [...prev, designId]
    );
  };

  const handleBookDesign = (design: typeof designs[0]) => {
    const message = encodeURIComponent(`Hello Twinkle! I loved your ${design.title}. Could you share booking details for this design?`);
    const phoneNumber = "918154922104";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="gallery" className="py-12 mt-10 md:py-16 lg:py-20 px-3 md:px-4 lg:px-6 mobile-safe">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={isMobile ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          whileInView={isMobile ? {} : { y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={isMobile ? { duration: 0 } : { duration: 0.8 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-olive mb-3 md:mb-4 lg:mb-6 px-2">
            Design Gallery
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-olive/80 max-w-2xl mx-auto px-4">
            Explore our collection of exquisite mehndi designs, each crafted with love and attention to detail
          </p>
        </motion.div>

        {/* Mobile Category Filter */}
        <motion.div
          initial={isMobile ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          whileInView={isMobile ? {} : { y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
          className="mb-6 md:mb-8 lg:mb-12"
        >
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="glass glass-hover px-4 py-3 rounded-2xl font-medium text-olive w-full flex items-center justify-between mobile-tap"
            >
              <span>Category: {selectedCategory}</span>
              <span className={`transform transition-transform ${showMobileFilters ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
          </div>

          {/* Desktop Filter */}
          <div className="hidden md:flex flex-wrap justify-center gap-2 lg:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-all duration-300 text-sm lg:text-base mobile-tap ${
                  selectedCategory === category
                    ? 'bg-pistachio-deep text-olive shadow-lg'
                    : 'glass glass-hover text-olive'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile Filter Dropdown */}
          <AnimatePresence>
            {showMobileFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden glass rounded-2xl p-4 mt-2 overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowMobileFilters(false);
                      }}
                      className={`px-3 py-2 rounded-xl font-medium transition-all duration-300 text-sm mobile-tap ${
                        selectedCategory === category
                          ? 'bg-pistachio-deep text-olive shadow-lg'
                          : 'glass glass-hover text-olive'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {!imagesLoaded && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-olive"></div>
          </div>
        )}

        {/* Design Grid */}
        <motion.div
          layout
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 ${imagesLoaded ? '' : 'hidden'}`}
        >
          <AnimatePresence>
            {filteredDesigns.map((design, index) => (
              <motion.div
                key={design.id}
                layout
                initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                animate={isMobile ? {} : { opacity: 1, scale: 1 }}
                exit={isMobile ? {} : { opacity: 0, scale: 0.8 }}
                transition={isMobile ? { duration: 0 } : { duration: 0.5, delay: index * 0.05 }}
                className="glass rounded-2xl overflow-hidden glass-hover group mobile-tap"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Watermark */}
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white font-dancing text-2xl font-bold opacity-50">
                      Twinkle Batliwala
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-2 md:top-4 right-2 md:right-4 flex flex-col gap-1 md:gap-2">
                    <button
                      onClick={() => toggleLike(design.id)}
                      className={`w-8 md:w-10 h-8 md:h-10 rounded-full glass flex items-center justify-center transition-colors mobile-tap ${
                        likedDesigns.includes(design.id) ? 'text-red-500' : 'text-olive'
                      }`}
                    >
                      <Heart size={16} fill={likedDesigns.includes(design.id) ? 'currentColor' : 'none'} />
                    </button>
                    
                    <button
                      onClick={() => setSelectedDesign(design)}
                      className="w-8 md:w-10 h-8 md:h-10 rounded-full glass flex items-center justify-center text-olive hover:text-pistachio-deep transition-colors mobile-tap"
                    >
                      <Eye size={16} />
                    </button>
                  </div>

                  {/* Complexity Badge */}
                  <div className="absolute top-2 md:top-4 left-2 md:left-4">
                    <span className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium ${
                      design.complexity === 'High' ? 'bg-red-100 text-red-800' :
                      design.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {design.complexity}
                    </span>
                  </div>
                </div>

                <div className="p-3 md:p-4 lg:p-6">
                  <h3 className="font-playfair text-base md:text-lg lg:text-xl font-semibold text-olive mb-1 md:mb-2 line-clamp-2">
                    {design.title}
                  </h3>
                  <p className="text-olive/70 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{design.description}</p>
                  
                  <div className="flex items-center justify-between text-xs md:text-sm text-olive/80 mb-3 md:mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span className="truncate">{design.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign size={12} />
                      <span className="truncate">{design.price}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookDesign(design)}
                    className="w-full bg-pistachio-deep hover:bg-pistachio-soft transition-colors py-2 md:py-3 rounded-lg font-medium text-olive flex items-center justify-center space-x-2 mobile-tap text-sm md:text-base"
                  >
                    <MessageCircle size={16} />
                    <span>Book Now</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Design Detail Modal */}
        <AnimatePresence>
          {selectedDesign && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedDesign(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <img
                    src={selectedDesign.image}
                    alt={selectedDesign.title}
                    className="w-full aspect-square object-cover rounded-t-2xl"
                  />
                  <button
                    onClick={() => setSelectedDesign(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-olive"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-pistachio-deep mb-2">
                    {selectedDesign.title}
                  </h3>
                  <p className="text-pistachio-deep mb-4">{selectedDesign.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="glass rounded-lg p-3 text-center">
                      <Clock className="w-5 h-5 text-pistachio-deep mx-auto mb-1" />
                      <div className="text-sm text-olive/80">Duration</div>
                      <div className="font-semibold text-olive">{selectedDesign.time}</div>
                    </div>
                    <div className="glass rounded-lg p-3 text-center">
                      <DollarSign className="w-5 h-5 text-pistachio-deep mx-auto mb-1" />
                      <div className="text-sm text-olive/80">Price Range</div>
                      <div className="font-semibold text-olive">{selectedDesign.price}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookDesign(selectedDesign)}
                    className="w-full bg-pistachio-deep hover:bg-pistachio-soft transition-colors py-4 rounded-lg font-semibold text-olive flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={20} />
                    <span>Book This Design</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
