import { Play, CheckCircle, Star, Wrench, Leaf, ShieldCheck, Phone, Shield } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Expertise = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-[#004170]" />,
      title: "Cleaners You Won't Have to Chase",
      description: "We show up when we say we will. Simple as that."
    },
    {
      icon: <Star className="h-8 w-8 text-[#004170]" />,
      title: "Consistency Is Our Secret Weapon",
      description: "First clean or fiftieth, you'll always get the same high standard."
    },
    {
      icon: <Wrench className="h-8 w-8 text-[#004170]" />,
      title: "Old School Work Ethic, Modern Tools",
      description: "The care of yesteryear with the tech of today."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-[#004170]" />,
      title: "Certified, Insured and All In",
      description: "We've ticked every box so you don't have to worry."
    },
  ];

  return null;
};

export default Expertise;
