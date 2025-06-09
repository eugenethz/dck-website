import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from 'react';
import { Separator } from "@/components/ui/separator";
import type { CarouselApi } from "@/components/ui/carousel";

const FuturePacing = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  
  const steps = [
    {
      number: "01",
      title: "Book Your Service",
      description: "Schedule your cleaning service online or by phone in just a few minutes."
    },
    {
      number: "02",
      title: "We Clean",
      description: "Our professional team arrives on time and transforms your space with meticulous attention to detail."
    },
    {
      number: "03",
      title: "Enjoy Your Space",
      description: "Relax and enjoy your spotless environment while we handle all the cleaning."
    }
  ];

  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", handleSelect);
    
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return null;
};

export default FuturePacing;
