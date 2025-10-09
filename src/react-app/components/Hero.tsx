import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Users, Award, Calendar, Heart } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Sparkles, value: '1000+', label: 'Unique Designs' },
  { icon: Calendar, value: '5+', label: 'Years Experience' },
  { icon: Heart, value: '99%', label: 'Satisfaction Rate' },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-20 md:pt-0 md:pb-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="henna-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50,10 Q60,20 50,30 Q40,20 50,10 M30,50 Q40,40 50,50 Q40,60 30,50 M70,50 Q80,40 90,50 Q80,60 70,50" 
                    fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#henna-pattern)" className="text-pistachio-deep"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="inline-flex items-center space-x-2 glass rounded-full px-3 md:px-4 py-2 mb-4 md:mb-6"
            >
              <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-pistachio-deep" />
              <span className="text-olive font-medium text-sm md:text-base">professional Mehndi Artist</span>
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-olive mb-4 md:mb-6 leading-tight"
            >
              <span className="font-dancing text-pistachio-deep block text-2xl sm:text-3xl md:text-4xl mb-1 md:mb-2">
                Twinkle Batliwala
              </span>
              <span className="block text-responsive">Bringing Art to Your Hands</span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-olive/80 mb-6 md:mb-8 leading-relaxed px-2 md:px-0"
            >
              Transforming special moments into timeless memories with intricate henna designs. 
              From bridal ceremonies to festive celebrations, every pattern tells a unique story.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12 px-2 md:px-0"
            >
              <a href="/gallery" className="glass glass-hover px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold text-olive pistachio-glow group inline-block mobile-tap">
                <span className="flex items-center justify-center space-x-2 text-sm md:text-base">
                  <span>Explore Designs</span>
                  <ArrowDown className="w-4 md:w-5 h-4 md:h-5 group-hover:animate-bounce" />
                </span>
              </a>
              
              <button className="bg-pistachio-deep hover:bg-pistachio-soft transition-colors px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold text-olive mobile-tap text-sm md:text-base">
                Book Consultation
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 px-2 md:px-0"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1, type: "spring" }}
                  className="glass rounded-xl p-3 md:p-4 text-center glass-hover mobile-tap"
                >
                  <stat.icon className="w-5 md:w-6 h-5 md:h-6 text-pistachio-deep mx-auto mb-1 md:mb-2" />
                  <div className="font-playfair text-lg md:text-2xl font-bold text-olive">{stat.value}</div>
                  <div className="text-xs md:text-sm text-olive/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative order-1 lg:order-2 px-4 md:px-0"
          >
            <div className="glass rounded-3xl p-4 md:p-8 floating-animation">
              <div className="aspect-square bg-gradient-to-br from-pistachio-light to-pistachio-soft rounded-2xl flex items-center justify-center text-olive/30 font-playfair relative overflow-hidden">
                {/* Placeholder for artist image */}
                <div className="absolute inset-2 md:inset-4 bg-gradient-to-br from-pistachio-deep/20 to-blush/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-2 md:mb-4 text-pistachio-deep" />
                    <p className="text-base md:text-lg font-medium text-olive">Artist Photo</p>
                    <p className="text-sm text-olive/60">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-12 md:w-16 h-12 md:h-16 glass rounded-full flex items-center justify-center"
            >
              <Sparkles className="w-6 md:w-8 h-6 md:h-8 text-pistachio-deep" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 w-16 md:w-20 h-16 md:h-20 glass rounded-full flex items-center justify-center"
            >
              <Award className="w-8 md:w-10 h-8 md:h-10 text-blush" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile due to bottom nav */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="glass rounded-full p-3"
        >
          <ArrowDown className="w-6 h-6 text-olive" />
        </motion.div>
      </motion.div>
    </section>
  );
}