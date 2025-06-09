import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const CleaningSolution = () => {
  const services = [
    {
      title: "Deep Cleaning",
      description: "Thorough cleaning of all surfaces, removing built-up dirt and grime from even the hardest to reach areas.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=100&w=500"
    },
    {
      title: "Regular Maintenance",
      description: "Scheduled cleaning services to keep your space consistently pristine with flexible weekly, bi-weekly, or monthly options.",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=100&w=500"
    },
    {
      title: "Specialized Services",
      description: "From carpet deep-cleaning to upholstery revitalization, we offer specialized cleaning for all surfaces.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=100&w=500"
    },
    {
      title: "Commercial Cleaning",
      description: "Comprehensive cleaning solutions for offices, retail spaces, and commercial properties.",
      image: "https://images.unsplash.com/photo-1556911220-bda9f33a8b25?auto=format&fit=crop&q=100&w=500"
    },
    {
      title: "Eco-Friendly Options",
      description: "Environmentally conscious cleaning services using sustainable products and practices.",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=100&w=500"
    },
    {
      title: "Post-Construction Cleanup",
      description: "Detailed cleaning after renovation or construction to make your space move-in ready.",
      image: "https://images.unsplash.com/photo-1556909114-44e3e9699e84?auto=format&fit=crop&q=100&w=500"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const maxVisible = 5; // Show 5 items at once on desktop

  useEffect(() => {
    const updateVisibleItems = (centerIndex: number) => {
      const totalItems = services.length;
      const newVisibleItems: number[] = [];
      
      // Calculate indices for visible items (showing 5 items at once)
      for (let i = 0; i < maxVisible; i++) {
        const idx = (centerIndex + i) % totalItems;
        newVisibleItems.push(idx);
      }
      
      setVisibleItems(newVisibleItems);
    };

    updateVisibleItems(activeIndex);
  }, [activeIndex, services.length]);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToIndex = (index: number) => {
    setActiveIndex(index);
  };

  // Alternative view that shows services in a vertical connected layout
  const verticalServices = [
    {
      title: "End of Lease Cleaning",
      description: "Professional move-out cleaning that ensures you get your bond back. We leave no corner untouched.",
      image: "/lovable-uploads/1f932157-5739-40a5-bf8d-d56e2c6e2b3c.png",
      position: "left"
    },
    {
      title: "Commercial Cleaning",
      description: "Comprehensive cleaning solutions for businesses of all sizes. Create a pristine environment for your clients and staff.",
      image: "/lovable-uploads/ddbd9f91-e431-49e7-a691-45eee9be7b40.png",
      position: "right"
    },
    {
      title: "Regular Cleaning",
      description: "Scheduled home cleaning services tailored to your specific needs and preferences. Enjoy a consistently clean home.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1470",
      position: "left"
    },
    {
      title: "Carpet Steam Cleaning",
      description: "Deep carpet treatment that removes stains, allergens, and embedded dirt. Revitalize your carpets to look like new.",
      image: "https://images.unsplash.com/photo-1604328727766-a151d1045ab4?auto=format&fit=crop&q=80&w=1470",
      position: "right"
    }
  ];

  return (
    <section id="cleaning-solution" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title text-center">Our Cleaning Solutions</h2>
        <p className="section-subtitle text-center">
          Comprehensive cleaning services designed to meet your unique needs
        </p>

        {/* Vertical Connected Services View */}
        <div className="mt-20 hidden lg:block">
          <div className="relative">
            {verticalServices.map((service, index) => (
              <div key={index} className="mb-24 relative">
                <div className={`flex ${service.position === 'left' ? 'flex-row' : 'flex-row-reverse'} gap-16 items-center`}>
                  <div className="w-1/2">
                    <Card className={`overflow-hidden shadow-lg h-full transition-all duration-300 hover:shadow-xl ${service.position === 'left' ? 'animate-card' : ''}`}>
                      <div className="aspect-[3/2] w-full overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </Card>
                  </div>
                  
                  <div className="w-1/2 px-6">
                    <CardTitle className="text-2xl font-medium text-gray-800 mb-4">{service.title}</CardTitle>
                    <p className="text-gray-600 text-lg font-light mb-6">{service.description}</p>
                    <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                      Book Now
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
                
                {/* Connector arrows */}
                {index < verticalServices.length - 1 && (
                  <div className="absolute flex justify-center w-full mt-6">
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-[1px] bg-gray-300"></div>
                      <div className={`flex items-center ${service.position === 'left' ? 'flex-row-reverse' : ''}`}>
                        <div className="h-[1px] w-[50px] bg-gray-300"></div>
                        <ArrowRight 
                          className={`text-gray-400 ${service.position === 'left' ? 'transform rotate-180 mr-1' : 'ml-1'}`} 
                          size={16} 
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel View */}
        <div className="mt-12 relative lg:hidden">
          {/* Numbered progress indicator */}
          <div className="hidden md:flex justify-center items-center mb-8 relative">
            <div className="w-4/5 h-0.5 bg-gray-200 absolute"></div>
            {services.map((_, index) => (
              <div 
                key={index}
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 mx-4 cursor-pointer transition-all duration-300 animate-button ${
                  visibleItems.includes(index) 
                    ? index === activeIndex 
                      ? "bg-[#004170] text-white font-bold" 
                      : "bg-brand-light border-2 border-[#004170] text-[#004170]" 
                    : "bg-gray-200 text-gray-500"
                }`}
                onClick={() => goToIndex(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>

          {/* Carousel removed as requested */}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary inline-block animate-button">
            Schedule Your Cleaning
          </a>
        </div>
      </div>
    </section>
  );
};

export default CleaningSolution;
