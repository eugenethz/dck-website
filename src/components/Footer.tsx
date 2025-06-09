import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-[#004170] text-white pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <p className="text-gray-400 mb-6">
              Professional cleaning services that deliver superior results for homes and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/deepcleanking/" target="_blank" rel="noopener noreferrer">
                <img src="/instagram.png" alt="Instagram" className="w-10 h-10" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100089895265790" target="_blank" rel="noopener noreferrer">
                <img src="/facebook.png" alt="Facebook" className="w-10 h-10" />
              </a>
              <a href="https://g.page/r/CVAg0sWQM7zVEAE/review" target="_blank" rel="noopener noreferrer">
                <img src="/google.png" alt="Google" className="w-10 h-10" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#cleaning-solution" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Residential Cleaning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Commercial Cleaning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Deep Cleaning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Move In/Out Cleaning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carpet Cleaning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="text-brand-lightBlue flex-shrink-0" />
                <a href="tel:0403672299" className="hover:text-brand-lightBlue transition-colors">
                  0403 672 299
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-lightBlue flex-shrink-0" />
                <a href="mailto:support@deepcleanking.com.au" className="hover:text-brand-lightBlue transition-colors">
                  support@deepcleanking.com.au
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="text-brand-lightBlue flex-shrink-0" />
                <div>
                  2/269 Centre Road,<br />
                  Bentleigh VIC 3204
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Deep Clean King. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
