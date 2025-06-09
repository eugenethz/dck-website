import { CheckCircle2 } from "lucide-react";

const PainPoints = () => {
  const painPoints = [
    {
      title: "Time-Consuming Cleaning",
      description: "Let us handle the cleaning while you focus on what matters most."
    },
    {
      title: "Inconsistent Results",
      description: "Our professional team ensures consistent, high-quality cleaning every time."
    },
    {
      title: "Hidden Dirt & Allergens",
      description: "We use professional-grade equipment to eliminate hidden dirt and allergens."
    },
    {
      title: "Bond Return Worries",
      description: "Our end-of-lease cleaning guarantees your bond return."
    }
  ];

  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {painPoints.map((point, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-8 h-8 text-brand-blue flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PainPoints; 