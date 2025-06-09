import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ServicesList from "../components/hero/ServicesList";
import { services } from "../components/hero/servicesData";

const ResidentialCleaning = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-36 pb-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
              Residential Cleaning Services
            </h1>
            
            <p className="text-lg text-gray-600 mb-12">
              Transform your home into a pristine sanctuary with our comprehensive residential cleaning services. We bring professional expertise and attention to detail to every corner of your living space.
            </p>

            {/* Premium services section with curved connectors */}
            <div className="mt-16 py-8 bg-gradient-to-b from-white to-gray-50/60 rounded-2xl shadow-sm">
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-12 text-center relative inline-block mx-auto px-8 bg-white">
                  Our Residential Services
                </h2>
              </div>
              <ServicesList services={services} />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16 mt-16">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Regular Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Maintain a consistently clean home with our regular cleaning services, tailored to your schedule and preferences.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Weekly/Bi-weekly cleaning</li>
                  <li>• Customized cleaning plans</li>
                  <li>• Flexible scheduling</li>
                  <li>• Eco-friendly products</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Deep Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive deep cleaning that reaches every corner and surface of your home.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Detailed surface cleaning</li>
                  <li>• Appliance cleaning</li>
                  <li>• Baseboard and corner cleaning</li>
                  <li>• Window and blind cleaning</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Move In/Out Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Specialized cleaning services for moving transitions, ensuring your space is spotless.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pre-move cleaning</li>
                  <li>• Post-move cleaning</li>
                  <li>• Carpet cleaning</li>
                  <li>• Refrigerator cleaning</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Specialized Services</h3>
                <p className="text-gray-600 mb-4">
                  Additional cleaning services to meet your specific needs and preferences.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Carpet steam cleaning</li>
                  <li>• Upholstery cleaning</li>
                  <li>• Window cleaning</li>
                  <li>• Post-construction cleaning</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-brand-blue text-white hover:bg-brand-dark px-8 py-3">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResidentialCleaning; 
 