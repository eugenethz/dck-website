import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import { Button } from "../components/ui/button";

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-36 pb-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <FAQ />

            {/* Contact Form Section */}
            <div className="mt-24 bg-[#f5f5f5] p-10 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold mb-8 text-gray-900">Request a Free Quote</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900" 
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900" 
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900" 
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900"
                  >
                    <option value="">Select a service</option>
                    <option value="deep-cleaning">Deep Cleaning</option>
                    <option value="regular">Regular Maintenance</option>
                    <option value="office">Office Cleaning</option>
                    <option value="move">Move In/Out Cleaning</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900" 
                    placeholder="Tell us about your cleaning needs"
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#004170] hover:bg-[#003560] text-white font-medium py-3 rounded-md transition-all duration-300"
                >
                  Get Your Free Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage; 
 