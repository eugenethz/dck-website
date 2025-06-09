import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceItemProps {
  service: {
    title: string;
    description: string;
    image?: string;
    images?: Array<{
      src: string;
      alt: string;
    }>;
    imageOptions?: {
      objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
      objectPosition?: string;
    };
  };
  index: number;
  isLast: boolean;
  activeImageIndex: number;
  onHover: (isHovered: boolean) => void;
}

const ServiceItem = ({ service, index, isLast, activeImageIndex, onHover }: ServiceItemProps) => {
  const [localActiveIndex, setLocalActiveIndex] = useState(0);
  const isCommercialCleaning = service.title === "Commercial Cleaning";
  const isInverseAnimation = false;
  
  // Animation state for all sections
  const [animate, setAnimate] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  // Animation state for content
  const [popOut, setPopOut] = useState(false);
  const contentRef = useRef(null);
  
  // For pressure washing, handle local state
  useEffect(() => {
    if (service.images) {
      const interval = setInterval(() => {
        setLocalActiveIndex((prevIndex) => (prevIndex + 1) % service.images!.length);
      }, 45000);
      return () => clearInterval(interval);
    }
  }, [isCommercialCleaning, service.images]);
  
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    if (imageRef.current && !hasAnimated) {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setAnimate(true);
            setPopOut(true);
            setHasAnimated(true);
            setTimeout(() => setAnimationComplete(true), 2000);
            observer.disconnect();
          }
        },
        { 
          threshold: 0.3,
          rootMargin: "0px"
        }
      );
      observer.observe(imageRef.current);
      return () => observer.disconnect();
    }
  }, [hasAnimated, service.title]);
  
  useEffect(() => {
    if (service.title === "Commercial Cleaning" && contentRef.current) {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !popOut) setPopOut(true);
        },
        { threshold: 0.3 }
      );
      observer.observe(contentRef.current);
      return () => observer.disconnect();
    }
  }, [service.title, popOut]);
  
  // For commercial cleaning, use the parent's activeImageIndex
  const currentImageIndex = isCommercialCleaning ? activeImageIndex : localActiveIndex;

  // Handler for manual cycling
  const handlePrev = () => {
    if (isCommercialCleaning && service.images) {
      setLocalActiveIndex((prev) => (prev - 1 + service.images.length) % service.images.length);
    } else if (service.images) {
      setLocalActiveIndex((prev) => (prev - 1 + service.images.length) % service.images.length);
    }
  };
  const handleNext = () => {
    if (isCommercialCleaning && service.images) {
      setLocalActiveIndex((prev) => (prev + 1) % service.images.length);
    } else if (service.images) {
      setLocalActiveIndex((prev) => (prev + 1) % service.images.length);
    }
  };

  const [carouselIndex, setCarouselIndex] = useState(0);
  useEffect(() => {
    if (!isCommercialCleaning) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % (service.images?.length || 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isCommercialCleaning, service.images]);

  const handleNavScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`relative max-w-[85%] mx-auto font-[DIN] px-[250px]`}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className="flex flex-col lg:flex-row gap-1 items-center">
        <div className="w-[80%] lg:w-[40%] relative">
          <div ref={imageRef} className="relative overflow-hidden rounded-lg shadow-xl">
            {service.images && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <div className="relative w-full h-full">
                    {service.images.map((image, imgIndex) => (
                      <img 
                        key={imgIndex}
                        src={image.src} 
                        alt={image.alt}
                        className={cn(
                          `absolute inset-0 w-full h-full object-cover`,
                          "transition-opacity duration-700 ease-in-out",
                          imgIndex === currentImageIndex ? "opacity-100" : "opacity-0"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
            {!service.images && service.image && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <img 
                  src={service.image}
                  alt={service.title} 
                  className={cn(
                    "w-full aspect-[4/3] object-cover",
                    service.imageOptions?.objectFit ? `object-${service.imageOptions.objectFit}` : ""
                  )}
                  style={{
                    objectPosition: service.imageOptions?.objectPosition || "center"
                  }}
                />
              </>
            )}
          </div>
        </div>
        
        <div
          ref={contentRef}
          className={`w-full lg:w-1/2 mx-auto ${
            !animationComplete ? `transition-all duration-[2000ms] ease-out ${
              popOut 
                ? "translate-x-0 opacity-100" 
                : isInverseAnimation 
                  ? "translate-x-[100%] opacity-0"
                  : "translate-x-[-100%] opacity-0"
            }` : ""
          }`}
          style={{
            position: 'relative',
            left: '0',
            ...(animationComplete
              ? {
                  transform: 'none',
                  opacity: 1,
                  transition: 'none',
                  willChange: 'auto',
                  transformOrigin: isInverseAnimation ? 'right center' : 'left center',
                }
              : {
                  transformOrigin: isInverseAnimation ? 'right center' : 'left center',
                  willChange: 'transform, opacity',
                  transform: !popOut
                    ? isInverseAnimation
                      ? 'translateX(100%)'
                      : 'translateX(-100%)'
                    : 'translateX(0)',
                  opacity: !popOut ? 0 : 1,
                }
            )
          }}
        >
          <h3 className={`${
            [
              'Commercial Cleaning',
              'End of Lease Cleaning',
              'Regular Cleaning',
              'Carpet Steam Cleaning',
              'Pressure Washing'
            ].includes(service.title) ? 'text-3xl' : 'text-4xl'
          } text-3xl font-medium text-[#e4e4e2] mb-4`} style={{ fontFamily: 'DIN, sans-serif' }}>{service.title}</h3>
          {service.title === 'Commercial Cleaning' && typeof service.description === 'string' && service.description.includes('\n') ? (
            <ul className="text-[#e4e4e2] text-2xl font-light mb-6 max-w-lg list-disc list-inside space-y-1" style={{ fontFamily: 'DIN, sans-serif' }}>
              {service.description.split('\n').map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : Array.isArray(service.description) && service.title === 'Commercial Cleaning' ? (
            <ul className="text-[#e4e4e2] text-2xl font-light mb-6 max-w-lg list-disc list-inside space-y-1" style={{ fontFamily: 'DIN, sans-serif' }}>
              {service.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : Array.isArray(service.description) ? (
            <ul className="text-[#e4e4e2] text-2xl font-light mb-6 max-w-lg list-disc list-inside space-y-1" style={{ fontFamily: 'DIN, sans-serif' }}>
              {service.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-[#e4e4e2] text-2xl font-light mb-6 max-w-lg" style={{ fontFamily: 'DIN, sans-serif' }}>{service.description}</p>
          )}
          <div className="flex flex-row gap-4">
            <a 
              href="#contact"
              onClick={(e) => handleNavScroll(e, 'contact')}
              className="inline-flex items-center font-bold transition-colors px-6 py-3 rounded-full bg-[#e4e4e2] text-[#004170] hover:bg-[#d4d4d2] shadow-md text-xl"
              style={{ fontFamily: 'DIN, sans-serif' }}
            >
              Book Now
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
