import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    message: '',
    designType: 'bridal'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = () => {
    const message = encodeURIComponent(
      `Hello Twinkle! I would like to book your services.\n\nDetails:\nName: ${formData.name}\nPhone: ${formData.phone}\nEvent Date: ${formData.eventDate}\nDesign Type: ${formData.designType}\nMessage: ${formData.message}`
    );
    const phoneNumber = "917041634002";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle regular form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4 sm:px-6"> {/* Adjusted vertical padding and horizontal padding for mobile */}
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-olive mb-4"> {/* Adjusted font size for smaller screens */}
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-olive/80 max-w-2xl mx-auto px-2"> {/* Adjusted text size and added padding */}
            Ready to book your mehndi session? Contact me to discuss your requirements and schedule your appointment
          </p>
        </motion.div>

        {/* The main grid switches from one column (default) to two columns on large screens (lg) */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12"> 
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-6 sm:p-8"> {/* Reduced padding slightly for mobile */}
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-olive mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Each contact item is already responsive */}
                <div className="flex items-start space-x-4"> {/* Changed to items-start for better alignment on wrap/small text */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pistachio-light rounded-full flex items-center justify-center flex-shrink-0"> {/* Adjusted size and added flex-shrink-0 */}
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-pistachio-deep" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-olive">Phone</h4>
                    <p className="text-olive/80 text-sm sm:text-base">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pistachio-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-pistachio-deep" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-olive">Email</h4>
                    <p className="text-olive/80 text-sm sm:text-base break-words">twinkle.batliwala@gmail.com</p> {/* Added break-words */}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pistachio-light rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-pistachio-deep" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-olive">Service Area</h4>
                    <p className="text-olive/80 text-sm sm:text-base">Mumbai & Surrounding Areas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pistachio-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-pistachio-deep" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-olive">Working Hours</h4>
                    <p className="text-olive/80 text-sm sm:text-base">9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="font-playfair text-xl font-bold text-olive mb-6">Follow Me</h3>
              <div className="flex space-x-3 sm:space-x-4"> {/* Adjusted spacing for mobile */}
                <button className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              <p className="text-olive/70 text-xs sm:text-sm mt-4"> {/* Adjusted font size for mobile */}
                Stay updated with my latest designs and booking availability
              </p>
            </div>

            {/* Quick Booking */}
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="font-playfair text-xl font-bold text-olive mb-4">Quick Booking</h3>
              <p className="text-olive/80 text-sm sm:text-base mb-4">
                For immediate booking and faster response, contact me directly via WhatsApp
              </p>
              <button
                onClick={() => {
                  const message = encodeURIComponent("Hello Twinkle! I would like to book your mehndi services. Please share your availability.");
                  window.open(`https://wa.me/917041634002?text=${message}`, '_blank');
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors text-sm sm:text-base"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Book via WhatsApp</span>
              </button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-2xl p-6 sm:p-8"> {/* Reduced padding slightly for mobile */}
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-olive mb-6">Send Message</h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-5 sm:space-y-6"> {/* Reduced vertical space for mobile */}
                <div>
                  <label className="block text-olive font-medium mb-1 sm:mb-2 text-sm sm:text-base">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 sm:py-3 glass rounded-lg border border-pistachio-light focus:border-pistachio-deep focus:outline-none text-olive placeholder-olive/50 text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-olive font-medium mb-1 sm:mb-2 text-sm sm:text-base">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 sm:py-3 glass rounded-lg border border- pistachio-light focus:border-pistachio-deep focus:outline-none text-olive placeholder-olive/50 text-sm sm:text-base"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-olive font-medium mb-1 sm:mb-2 text-sm sm:text-base">Event Date</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 sm:py-3 glass rounded-lg border border-pistachio-light focus:border-pistachio-deep focus:outline-none text-olive text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-olive font-medium mb-1 sm:mb-2 text-sm sm:text-base">Design Type</label>
                  <select
                    name="designType"
                    value={formData.designType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 sm:py-3 glass rounded-lg border border-pistachio-light focus:border-pistachio-deep focus:outline-none text-olive text-sm sm:text-base"
                  >
                    <option value="bridal">Bridal</option>
                    <option value="engagement">Engagement</option>
                    <option value="festival">Festival</option>
                    <option value="kids">Kids</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>

                <div>
                  <label className="block text-olive font-medium mb-1 sm:mb-2 text-sm sm:text-base">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 sm:py-3 glass rounded-lg border border-pistachio-light focus:border-pistachio-deep focus:outline-none text-olive placeholder-olive/50 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your requirements, preferred design style, or any specific requests..."
                  />
                </div>

                {/* Excellent use of flex-col (default) and sm:flex-row (for larger screens) */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4"> 
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors text-sm sm:text-base"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Send via WhatsApp</span>
                  </button>
                  
                  <button
                    type="submit"
                    className="flex-1 bg-pistachio-deep hover:bg-pistachio-soft text-olive py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors text-sm sm:text-base"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-pistachio-light/30 rounded-lg"> {/* Reduced padding and margin for mobile */}
                <p className="text-olive/80 text-xs sm:text-sm"> {/* Reduced text size for mobile */}
                  <strong>Note:</strong> For faster response and immediate booking confirmation, I recommend using WhatsApp. 
                  I typically respond within 2-3 hours during business hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
