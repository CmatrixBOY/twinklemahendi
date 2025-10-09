import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Clock, DollarSign, MessageCircle, X, Eye } from 'lucide-react';

const categories = ['All', 'Bridal', 'Engagement', 'Festival', 'Kids', 'Custom'];

const designs = [
  {
    id: 1,
    title: 'Royal Bridal Design',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    time: '3-4 hours',
    price: '₹2500-3500',
    complexity: 'High',
    description: 'Intricate traditional bridal pattern with peacock motifs'
  },
  {
    id: 2,
    title: 'Engagement Elegance',
    category: 'Engagement',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop',
    time: '2-3 hours',
    price: '₹1500-2000',
    complexity: 'Medium',
    description: 'Delicate engagement design with rose patterns'
  },
  {
    id: 3,
    title: 'Festival Joy',
    category: 'Festival',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    time: '1-2 hours',
    price: '₹800-1200',
    complexity: 'Medium',
    description: 'Vibrant festival design with traditional motifs'
  },
  {
    id: 4,
    title: 'Kids Delight',
    category: 'Kids',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop',
    time: '30-45 mins',
    price: '₹300-500',
    complexity: 'Low',
    description: 'Simple and fun designs perfect for children'
  },
  {
    id: 5,
    title: 'Custom Creation',
    category: 'Custom',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    time: '2-5 hours',
    price: '₹1000-4000',
    complexity: 'Variable',
    description: 'Personalized design based on your preferences'
  },
  {
    id: 6,
    title: 'Minimalist Modern',
    category: 'Engagement',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop',
    time: '1-2 hours',
    price: '₹1200-1800',
    complexity: 'Low',
    description: 'Contemporary minimal design for modern brides'
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDesign, setSelectedDesign] = useState<typeof designs[0] | null>(null);
  const [likedDesigns, setLikedDesigns] = useState<number[]>([]);

  const filteredDesigns = selectedCategory === 'All' 
    ? designs 
    : designs.filter(design => design.category === selectedCategory);

  const toggleLike = (designId: number) => {
    setLikedDesigns(prev => 
      prev.includes(designId) 
        ? prev.filter(id => id !== designId)
        : [...prev, designId]
    );
  };

  const handleBookDesign = (design: typeof designs[0]) => {
    const message = encodeURIComponent(`Hello Twinkle! I loved your ${design.title}. Could you share booking details for this design?`);
    const phoneNumber = "919876543210";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="gallery" className="py-16 md:py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-olive mb-4 md:mb-6">
            Design Gallery
          </h2>
          <p className="text-lg text-olive/80 max-w-2xl mx-auto">
            Explore our collection of exquisite mehndi designs, each crafted with love and attention to detail
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                selectedCategory === category
                  ? 'bg-pistachio-deep text-olive shadow-lg'
                  : 'glass glass-hover text-olive'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Design Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredDesigns.map((design, index) => (
              <motion.div
                key={design.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden glass-hover group"
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
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button
                      onClick={() => toggleLike(design.id)}
                      className={`w-10 h-10 rounded-full glass flex items-center justify-center transition-colors ${
                        likedDesigns.includes(design.id) ? 'text-red-500' : 'text-olive'
                      }`}
                    >
                      <Heart size={18} fill={likedDesigns.includes(design.id) ? 'currentColor' : 'none'} />
                    </button>
                    
                    <button
                      onClick={() => setSelectedDesign(design)}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center text-olive hover:text-pistachio-deep transition-colors"
                    >
                      <Eye size={18} />
                    </button>
                  </div>

                  {/* Complexity Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      design.complexity === 'High' ? 'bg-red-100 text-red-800' :
                      design.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {design.complexity}
                    </span>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="font-playfair text-xl font-semibold text-olive mb-2">
                    {design.title}
                  </h3>
                  <p className="text-olive/70 text-sm mb-4">{design.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-olive/80 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{design.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign size={14} />
                      <span>{design.price}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookDesign(design)}
                    className="w-full bg-pistachio-deep hover:bg-pistachio-soft transition-colors py-3 rounded-lg font-medium text-olive flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={18} />
                    <span>Book This Design</span>
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
                  <h3 className="font-playfair text-2xl font-bold text-olive mb-2">
                    {selectedDesign.title}
                  </h3>
                  <p className="text-olive/80 mb-4">{selectedDesign.description}</p>
                  
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
