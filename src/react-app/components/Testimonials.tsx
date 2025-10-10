import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Bride',
    rating: 5,
    text: 'Twinkle created the most beautiful bridal mehndi for my wedding. The intricate designs were absolutely stunning and lasted perfectly throughout all the ceremonies. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1494790108755-2616c68e8b8c?w=100&h=100&fit=crop&crop=face',
    occasion: 'Wedding'
  },
  {
    id: 2,
    name: 'Anita Patel',
    role: 'Mother of Bride',
    rating: 5,
    text: 'Professional, punctual, and incredibly talented. Twinkle made our entire family look beautiful for the wedding. The designs were unique and everyone received compliments.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    occasion: 'Family Wedding'
  },
  {
    id: 3,
    name: 'Riya Mehta',
    role: 'Festival Enthusiast',
    rating: 5,
    text: 'Been getting mehndi from Twinkle for the past 3 years for all festivals. Her creativity and attention to detail is unmatched. Always brings new and trendy designs!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    occasion: 'Festivals'
  },
  {
    id: 4,
    name: 'Kavya Singh',
    role: 'Engagement',
    rating: 5,
    text: 'Twinkle understood exactly what I wanted for my engagement. The design was elegant, modern, and perfectly matched my outfit. Thank you for making my day special!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    occasion: 'Engagement'
  },
  {
    id: 5,
    name: 'Deepika Joshi',
    role: 'Corporate Event',
    rating: 5,
    text: 'Hired Twinkle for our office Diwali celebration. She managed to create beautiful designs for 20+ colleagues efficiently. Very professional and accommodating!',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
    occasion: 'Corporate Event'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="testimonial-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="2" fill="currentColor"/>
              <path d="M60,40 Q70,50 60,60 Q50,50 60,40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonial-pattern)" className="text-pistachio-deep"/>
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-olive mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-olive/80 max-w-2xl mx-auto">
            Read testimonials from our happy clients who trusted us with their special moments
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 md:p-10 lg:p-12 max-w-4xl mx-auto mb-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-pistachio-light"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-pistachio-deep rounded-full flex items-center justify-center">
                  <Quote size={16} className="text-olive" />
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              <p className="text-lg md:text-xl text-olive mb-6 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div>
                <h4 className="font-playfair text-xl font-semibold text-olive">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-olive/70">{testimonials[currentIndex].role}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-pistachio-light rounded-full text-xs font-medium text-olive">
                  {testimonials[currentIndex].occasion}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 glass glass-hover rounded-full flex items-center justify-center text-olive"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-pistachio-deep scale-125' : 'bg-olive/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 glass glass-hover rounded-full flex items-center justify-center text-olive"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Testimonial Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 glass-hover"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h5 className="font-semibold text-olive">{testimonial.name}</h5>
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
              <p className="text-olive/80 text-sm">"{testimonial.text.slice(0, 100)}..."</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <div className="glass rounded-xl p-4 md:p-6 text-center">
            <div className="text-olive/70">Happy Clients</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="font-playfair text-3xl font-bold text-pistachio-deep mb-2">99%</div>
            <div className="text-olive/70">Satisfaction Rate</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="font-playfair text-3xl font-bold text-pistachio-deep mb-2">4.9</div>
            <div className="text-olive/70">Average Rating</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="font-playfair text-3xl font-bold text-pistachio-deep mb-2">1000+</div>
            <div className="text-olive/70">Designs Created</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
