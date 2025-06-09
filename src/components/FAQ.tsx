import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [animationStarted] = useState(true);
  
  const faqs = [
    {
      question: "How often should I schedule cleaning services?",
      answer: "This depends on your specific needs. For homes, we recommend weekly or bi-weekly services for regular maintenance. For offices and commercial spaces, daily or several times per week might be more appropriate. We'll help you determine the best schedule during your consultation."
    },
    {
      question: "Do I need to provide cleaning supplies and equipment?",
      answer: "No, we bring all necessary cleaning supplies and professional equipment. We use eco-friendly, high-quality products that are effective yet safe for your family, pets, and the environment. If you have specific products you'd prefer us to use, we're happy to accommodate your preferences."
    },
    {
      question: "How do you price your cleaning services?",
      answer: "Our pricing is based on the size of your space, the type of cleaning needed, and the frequency of service. We provide customized quotes after understanding your specific requirements. Contact us for a free estimate tailored to your needs."
    },
    {
      question: "Are your cleaning professionals background-checked?",
      answer: "Yes, all our cleaning professionals undergo rigorous background checks and thorough training before joining our team. We only hire trustworthy, experienced individuals who meet our high standards for professionalism and cleaning expertise."
    },
    {
      question: "What if I'm not satisfied with the cleaning service?",
      answer: "Your satisfaction is our priority. If you're not completely happy with any aspect of our service, please let us know within 24 hours, and we'll return to address any areas of concern at no additional cost. We stand behind our 100% satisfaction guarantee."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="section-container max-w-4xl">
        <h2 className={`text-4xl md:text-5xl font-light text-gray-800 mb-6 text-center animate-fade-in-up ${animationStarted ? 'opacity-100' : 'opacity-0'}`}>Frequently Asked Questions</h2>
        <p className={`text-lg text-gray-600 max-w-3xl mx-auto text-center mb-20 animate-fade-in-up ${animationStarted ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          Find answers to common questions about our cleaning services
        </p>

        <div className="mt-16 space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border border-gray-200 rounded-lg overflow-hidden ${animationStarted ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15 + 0.2}s` }}
            >
              <button
                className="flex justify-between items-center w-full p-8 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-medium">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-blue flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 p-6 pt-0' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
