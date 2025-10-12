import { useParams } from "react-router-dom";
import { designs } from "../data/designs";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Clock,
  IndianRupee,
  MessageCircle,
  ArrowLeft,
  Star,
  X
} from "lucide-react";
// import Navigation from "@/react-app/components/Navigation";
import FloatingParticles from "@/react-app/components/FloatingParticles";
import LanguageSelector from "@/react-app/components/LanguageSelector";
import Footer from "@/react-app/components/Footer";
import WhatsAppButton from "@/react-app/components/WhatsAppButton";

export default function DesignDetailPage() {
  const { id } = useParams<{ id: string }>();
  const design = designs.find((d) => d.id === id);
  const [isImageOpen, setIsImageOpen] = useState(false);

  if (!design) return <div>Design not found</div>;

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  const handleBookDesign = (design: typeof designs[0]) => {
    const message = encodeURIComponent(
      `Hello Twinkle! I loved your ${design.title}. Could you share booking details for this design?`
    );
    const phoneNumber = "917041634002";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="pt-[50px] p-4 ">
      <FloatingParticles />
      <LanguageSelector />
      {/* <Navigation /> */}

      <main className="pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-8 px-3 md:px-4 lg:px-6 mobile-safe">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <a
                href="/gallery"
                className="glass glass-hover p-2 md:p-3 rounded-full inline-flex items-center text-olive mobile-tap"
              >
                <ArrowLeft size={18} />
              </a>
              <h1 className="font-playfair text-xl sm:text-3xl lg:text-4xl font-bold text-olive text-center px-2 flex-1">
                {design.title}
              </h1>
              <div className="w-10" />
            </div>
          </motion.div>

          {/* Responsive Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left - Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 relative cursor-pointer group"
              onClick={() => setIsImageOpen(true)}
            >
              <img
                src={design.image}
                alt={design.title}
                className="w-full aspect-square object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-full text-sm flex items-center space-x-2">
                <Star size={16} fill="currentColor" />
                <span>{design.popularity}% Popular</span>
              </div>
            </motion.div>

            {/* Right - Details */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 glass rounded-2xl p-5 md:p-6"
            >
              <p className="text-pistachio-dark mb-4 text-sm md:text-base leading-relaxed">
                {design.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {design.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-pistachio-light text-olive text-xs md:text-sm px-2 md:px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
                <div className="glass rounded-lg p-2 md:p-3 text-center">
                  <Clock className="w-4 md:w-5 h-4 md:h-5 text-pistachio-dark mx-auto mb-1" />
                  <div className="text-xs md:text-sm text-olive/80">
                    Duration
                  </div>
                  <div className="font-semibold text-olive text-xs md:text-sm">
                    {design.time}
                  </div>
                </div>
                <div className="glass rounded-lg p-2 md:p-3 text-center">
                  <IndianRupee className="w-4 md:w-5 h-4 md:h-5 text-pistachio-dark mx-auto mb-1" />
                  <div className="text-xs md:text-sm text-olive/80">
                    Price Range
                  </div>
                  <div className="font-semibold text-olive text-xs md:text-sm">
                    {design.price}
                  </div>
                </div>
                <div className="glass rounded-lg p-2 md:p-3 text-center">
                  <div className="text-xs md:text-sm text-olive/80 mb-1">
                    Complexity
                  </div>
                  <div
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(
                      design.complexity
                    )}`}
                  >
                    {design.complexity}
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleBookDesign(design)}
                className="w-full bg-pistachio-deep hover:bg-pistachio-soft transition-colors py-3 md:py-4 rounded-lg font-semibold text-olive flex items-center justify-center space-x-2 text-sm md:text-base mobile-tap"
              >
                <MessageCircle size={18} />
                <span>Book This Design</span>
              </button>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
      <div className="fixed bottom-20 right-5 z-50 flex flex-col gap-4">
        <WhatsAppButton />
      </div>

      {/* Image Preview Modal */}
      {isImageOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4"
          onClick={() => setIsImageOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full"
          >
            <img
              src={design.image}
              alt={design.title}
              className="w-full h-auto rounded-2xl shadow-2xl object-contain"
            />
            <button
              onClick={() => setIsImageOpen(false)}
              className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition"
            >
              <X size={22} />
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
