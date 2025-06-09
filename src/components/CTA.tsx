import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

interface CTAProps {
  sectionClassName?: string;
}

const CTA = ({ sectionClassName = "py-24 bg-gradient-to-b from-[#e4e4e2] to-[#085089] text-white" }: CTAProps) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    businessType: '',
    message: '',
  });
  const [selectedService, setSelectedService] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.hash.split('?')[1]);
      const service = params.get('service');
      if (service === 'commercial') {
        return 'commercial';
      }
      return '';
    }
    return '';
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === 'service') setSelectedService(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, service: selectedService }),
    });
    if (res.ok) {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: '', businessType: '', message: '' });
      setSelectedService('');
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-[#004170] to-black">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="max-w-xl mx-auto text-center mt-[175px]">
            <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-[#f5f5f5]">
              Contact Us
            </h2>
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-3 text-xl mb-4">
                <Phone className="text-brand-lightBlue flex-shrink-0" />
                <a href="tel:0403672299" className="hover:text-brand-lightBlue transition-colors text-[#f5f5f5]">
                  0403 672 299
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 text-xl mb-4">
                <Mail className="text-brand-lightBlue flex-shrink-0" />
                <a href="mailto:support@deepcleanking.com.au" className="hover:text-brand-lightBlue transition-colors text-[#f5f5f5]">
                  support@deepcleanking.com.au
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 text-xl mb-4">
                <MapPin className="text-brand-lightBlue flex-shrink-0" />
                <div className="text-left text-[#f5f5f5]">
                  <p>2/269 Centre Road,</p>
                  <p>Bentleigh VIC 3204</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Request a Quote Form */}
          <div className="bg-[#f5f5f5] p-10 rounded-lg shadow-lg animate-card">
            <h3 className="text-3xl font-semibold mb-8 text-gray-900">Request a Free Quote</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md animate-form-element text-gray-900" 
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md animate-form-element text-gray-900" 
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Your phone number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md animate-form-element text-gray-900" 
                  placeholder="Your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                <select 
                  id="service" 
                  name="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md animate-form-element text-gray-900"
                  value={selectedService}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="commercial">Commercial Cleaning</option>
                  <option value="move">Move In/Out Cleaning</option>
                  <option value="deep-cleaning">Deep Cleaning</option>
                  <option value="regular">Regular Cleaning</option>
                  <option value="carpet">Carpet Cleaning</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {selectedService === 'commercial' && (
                <div>
                  <label htmlFor="business-type" className="block text-sm font-medium text-gray-700 mb-1">Type of Business</label>
                  <select 
                    id="business-type" 
                    name="businessType"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md animate-form-element text-gray-900"
                    value={form.businessType}
                    onChange={handleChange}
                  >
                    <option value="">Select business type</option>
                    <option value="office">Office Buildings</option>
                    <option value="educational">Schools & Educational Facilities</option>
                    <option value="medical">Medical & Aged Care Facilities</option>
                    <option value="retail">Retail Stores & Shopping Centres</option>
                    <option value="restaurant">Restaurants & Cafés</option>
                    <option value="hotel">Hotels & Short-Stay Accommodation</option>
                    <option value="warehouse">Warehouses & Industrial Facilities</option>
                    <option value="gym">Gyms & Fitness Centres</option>
                    <option value="government">Government & Council Buildings</option>
                    <option value="construction">Construction Site Cleanups</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              )}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md animate-form-element text-gray-900" 
                  placeholder="Tell us about your cleaning needs"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#004170] hover:bg-[#002d4d] text-white font-medium py-3 rounded-md transition-all duration-300 animate-button"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Get Your Free Quote'}
              </button>
              {status === 'success' && <p className="text-green-500">Quote sent successfully!</p>}
              {status === 'error' && <p className="text-red-500">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
