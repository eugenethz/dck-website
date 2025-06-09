import React from 'react';
import { Check, X } from 'lucide-react';
import { LuMessageSquareText } from "react-icons/lu";

const CompanyComparison = () => {
  // Add console log to verify icon import
  console.log('LuMessageSquareText component:', LuMessageSquareText);

  const comparisonData = [
    {
      feature: "No Poor Communication",
      deepCleanKing: true,
      otherCompanies: false,
      description: "We keep you in the loop with clear and consistent communication at every step"
    },
    {
      feature: "No Hidden Fees",
      deepCleanKing: true,
      otherCompanies: false,
      description: "Upfront honest pricing with zero surprise charges"
    },
    {
      feature: "No Inconsistent Quality",
      deepCleanKing: true,
      otherCompanies: false,
      description: "Our high standards ensure every clean is as good as the last"
    },
    {
      feature: "No No Shows",
      deepCleanKing: true,
      otherCompanies: false,
      description: "We show up on time every time because reliability matters"
    },
    {
      feature: "No Rushed Work",
      deepCleanKing: true,
      otherCompanies: false,
      description: "We take the time to do it right the first time with no shortcuts"
    },
    {
      feature: "No Lack of Accountability",
      deepCleanKing: true,
      otherCompanies: false,
      description: "We take full responsibility for our work with no blame shifting and no excuses"
    },
    {
      feature: "Trained Not Outsourced",
      deepCleanKing: true,
      otherCompanies: false,
      description: "Every cleaner is trained in house and never subcontracted"
    },
    {
      feature: "High First Time Pass Rate",
      deepCleanKing: true,
      otherCompanies: false,
      description: "Our work often passes inspections on the first go saving you stress"
    },
    {
      feature: "We Never Say No",
      deepCleanKing: true,
      otherCompanies: false,
      description: "No job is too hard too late or too last minute we make it happen"
    }
  ];

  const handleEnquireClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#004170] to-black relative overflow-hidden">
      <div className="section-container relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-white" style={{ fontFamily: 'DIN Regular, sans-serif' }}>
          Why Choose Us?
        </h2>
        <p className="text-lg text-blue-100 text-center mb-12 max-w-3xl mx-auto" style={{ fontFamily: 'DIN Regular, sans-serif' }}>
          See how we stand out from other cleaning companies with our commitment to excellence
        </p>

        <div className="overflow-x-auto relative z-20">
          <table className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-white/20">
                <th className="px-6 py-4 text-left text-white font-semibold text-lg">Features</th>
                <th className="px-6 py-4 text-center text-white font-semibold text-lg">
                  <img 
                    src="/dck-logo-blue-1.png" 
                    alt="DCK" 
                    className="h-20 w-auto mx-auto"
                  />
                </th>
                <th className="px-6 py-4 text-center text-white font-semibold text-lg">Other Companies</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-6">
                    <div className="text-white flex items-center gap-3">
                      <div>
                        <h3 className="font-semibold text-lg">{item.feature}</h3>
                        <p className="text-sm text-blue-100 mt-2">{item.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-center">
                    {item.deepCleanKing ? (
                      <Check className="w-6 h-6 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-400 mx-auto" />
                    )}
                  </td>
                  <td className="px-6 py-6 text-center">
                    {item.otherCompanies ? (
                      <Check className="w-6 h-6 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-400 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-12 relative z-20">
          <button
            onClick={handleEnquireClick}
            className="px-8 py-4 bg-white text-[#004170] font-bold text-xl rounded-lg hover:bg-blue-50 transition-colors duration-300 flex items-center mx-auto"
          >
            Need I say more? Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyComparison; 