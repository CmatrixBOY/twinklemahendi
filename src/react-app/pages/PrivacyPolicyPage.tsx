import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-8 px-3 md:px-4 lg:px-6 mobile-safe">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <Link to="/" className="glass glass-hover p-2 md:p-3 rounded-full inline-flex items-center text-olive mobile-tap">
            <ArrowLeft size={18} />
          </Link>
          <h1 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-olive text-center px-2">
            Privacy Policy
          </h1>
          <div className="w-10 h-10"></div>
        </div>
        <div className="glass rounded-2xl p-6 md:p-8 lg:p-12 text-olive/80 space-y-4">
          <p>This is a placeholder for the Privacy Policy page.</p>
        </div>
      </div>
    </div>
  );
}
