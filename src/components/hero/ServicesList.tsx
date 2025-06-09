import { useState, useEffect } from "react";
import ServiceItem from "./ServiceItem";
import { Separator } from "@/components/ui/separator";
import { Circle } from "lucide-react";

interface Service {
  title: string;
  description: string;
  image?: string;
  images?: Array<{
    src: string;
    alt: string;
  }>;
}

interface ServicesListProps {
  services: Service[];
}

const ServicesList = ({ services }: ServicesListProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    // Handle Commercial Cleaning image rotation
    const commercialCleaningService = services.find(s => s.title === "Commercial Cleaning");
    
    if (commercialCleaningService?.images) {
      const interval = setInterval(() => {
        setActiveImageIndex((prevIndex) => (prevIndex + 1) % commercialCleaningService.images!.length);
      }, 8000); // Changed from 45000ms to 8000ms for faster rotation

      return () => clearInterval(interval);
    }
  }, [services]);

  return (
    <div className="mt-16">
      <div className="relative">
        <Separator className="absolute top-1/2 left-0 right-0 -z-10" />
      </div>
      
      {/* Adjusted spacing to accommodate the resized service cards */}
      <div className="space-y-20 relative mt-16">
        {services.map((service, index) => (
          <div key={index} className="relative">
            <ServiceItem 
              service={service}
              index={index}
              isLast={index === services.length - 1}
              activeImageIndex={activeImageIndex}
              onHover={(isHovered) => setHoveredIndex(isHovered ? index : null)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
