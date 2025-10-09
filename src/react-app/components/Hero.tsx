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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
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

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-5 h-5 text-pistachio-deep" />
              <span className="text-olive font-medium">Premium Mehndi Artist</span>
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-playfair text-5xl md:text-7xl font-bold text-olive mb-6"
            >
              <span className="font-dancing text-pistachio-deep block text-3xl md:text-4xl mb-2">
                Twinkle Batliwala
              </span>
              Bringing Art to Your Hands
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-lg md:text-xl text-olive/80 mb-8 leading-relaxed"
            >
              Transforming special moments into timeless memories with intricate henna designs. 
              From bridal ceremonies to festive celebrations, every pattern tells a unique story.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a href="/gallery" className="glass glass-hover px-8 py-4 rounded-2xl font-semibold text-olive pistachio-glow group inline-block">
                <span className="flex items-center justify-center space-x-2">
                  <span>Explore Designs</span>
                  <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
                </span>
              </a>
              
              <button className="bg-pistachio-deep hover:bg-pistachio-soft transition-colors px-8 py-4 rounded-2xl font-semibold text-olive">
                Book Consultation
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1, type: "spring" }}
                  className="glass rounded-xl p-4 text-center glass-hover"
                >
                  <stat.icon className="w-6 h-6 text-pistachio-deep mx-auto mb-2" />
                  <div className="font-playfair text-2xl font-bold text-olive">{stat.value}</div>
                  <div className="text-sm text-olive/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 floating-animation">
              <div className="aspect-square bg-gradient-to-br from-pistachio-light to-pistachio-soft rounded-2xl flex items-center justify-center text-olive/30 text-6xl font-playfair relative overflow-hidden">
                {/* Placeholder for artist image */}
                <div className="absolute inset-4 bg-gradient-to-br from-pistachio-deep/20 to-blush/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-16 h-16 mx-auto mb-4 text-pistachio-deep" />
                    <p className="text-lg font-medium text-olive">Artist Photo</p>
                    <p className="text-sm text-olive/60">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-16 h-16 glass rounded-full flex items-center justify-center"
            >
              <Sparkles className="w-8 h-8 text-pistachio-deep" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-20 h-20 glass rounded-full flex items-center justify-center"
            >
              <Award className="w-10 h-10 text-blush" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
