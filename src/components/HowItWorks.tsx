import { CheckCircle, ArrowRightCircle, ClipboardList } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="h-8 w-8 text-brand-blue mb-2" />,
    title: 'Book Your Service',
    description: 'Choose your cleaning service and schedule a time that works for you.'
  },
  {
    icon: <ArrowRightCircle className="h-8 w-8 text-brand-blue mb-2" />,
    title: 'We Get to Work',
    description: 'Our professional team arrives on time and gets your space spotless.'
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-brand-blue mb-2" />,
    title: 'Enjoy Your Clean Space',
    description: 'Relax and enjoy a sparkling clean environment, every time.'
  }
];

const HowItWorks = () => (
  <section className="py-16 bg-gray-50">
    <div className="section-container text-center">
      <h2 className="text-3xl font-bold mb-8">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center">
            {step.icon}
            <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks; 