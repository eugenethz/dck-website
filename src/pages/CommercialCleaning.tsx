import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ServicesList from "../components/hero/ServicesList";
import { services } from "../components/hero/servicesData";

const CommercialCleaning = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-36 pb-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
              Commercial Cleaning Services
            </h1>
            
            <p className="text-lg text-gray-600 mb-12">
              Professional cleaning solutions tailored for businesses of all sizes. We help create and maintain pristine environments that impress clients and boost employee productivity.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Office Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive cleaning services for office spaces, including workstations, common areas, and restrooms.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Daily/Weekly cleaning schedules</li>
                  <li>• Sanitization of high-touch areas</li>
                  <li>• Window and glass cleaning</li>
                  <li>• Floor care and maintenance</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Retail Spaces</h3>
                <p className="text-gray-600 mb-4">
                  Specialized cleaning for retail environments to maintain a welcoming atmosphere for customers.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Storefront cleaning</li>
                  <li>• Display case maintenance</li>
                  <li>• Fitting room cleaning</li>
                  <li>• Restroom sanitization</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Industrial Facilities</h3>
                <p className="text-gray-600 mb-4">
                  Heavy-duty cleaning solutions for warehouses, factories, and industrial spaces.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Equipment cleaning</li>
                  <li>• Floor scrubbing and maintenance</li>
                  <li>• Waste management</li>
                  <li>• Safety compliance cleaning</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Healthcare Facilities</h3>
                <p className="text-gray-600 mb-4">
                  Specialized cleaning services meeting healthcare industry standards and regulations.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Medical equipment cleaning</li>
                  <li>• Sterilization protocols</li>
                  <li>• Biohazard handling</li>
                  <li>• Compliance documentation</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-brand-blue text-white hover:bg-brand-dark px-8 py-3">
                Request a Free Commercial Cleaning Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-[#e4e4e2] opacity-100 transition-opacity duration-1000" id="our-cleaning-services">
          <div className="relative flex justify-center">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-12 text-center inline-block" style={{ backgroundColor: '#e4e4e2' }}>
              Our Cleaning Services
            </h2>
          </div>
          <div className="relative" style={{ minHeight: '400px' }}>
            {/* <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#004170] transform -translate-x-1/2 z-10"></div> */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-8 h-8 rounded-full bg-[#004170] border-4 border-white shadow-lg"></div>
            </div>
            <ServicesList services={[
              services.find(s => s.title === "Commercial Cleaning"),
              ...services.filter(s => s.title !== "Commercial Cleaning")
            ].filter(Boolean).map(service => ({
              ...service,
              description: Array.isArray(service.description) ? service.description.join("\n") : service.description
            }))} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CommercialCleaning; 
 