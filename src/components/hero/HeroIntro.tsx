import React from "react";
import { MousePointerClick, ArrowRight, CheckCircle, Clock, Star } from "lucide-react";

const HeroIntro = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
      <div className="w-full lg:w-1/2 text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 leading-tight mb-6">
          Experience <span className="relative inline-block">
            Exceptional <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-brand-blue/20"></span>
          </span> <br />
          Cleaning
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed max-w-lg">
          We deliver premium cleaning solutions with meticulous attention to detail, transforming your spaces into immaculate environments.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center group px-8 py-3.5 bg-[#004170] text-white rounded-md hover:bg-brand-dark transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span className="font-medium">Book a Service</span>
            <MousePointerClick size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>
          
          <div className="relative group">
            <button
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white border border-gray-200 text-gray-800 rounded-md hover:bg-gray-50 transition-all duration-300 focus:outline-none"
          >
            <span className="font-light">Explore Services</span>
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50 hidden group-hover:block group-focus-within:block">
              <a
                href="/commercial-cleaning"
                className="block px-6 py-3 text-gray-800 text-left"
              >
                Commercial Cleaning Services
              </a>
              <a
                href="/residential-cleaning"
                className="block px-6 py-3 text-gray-800 text-left"
              >
                Residential Cleaning Services
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
              <CheckCircle className="h-6 w-6 text-[#004170]" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">100% Satisfaction</p>
              <p className="text-xs text-gray-500">Guaranteed</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
              <Clock className="h-6 w-6 text-[#004170]" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">24/7 Support</p>
              <p className="text-xs text-gray-500">Always available</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 relative">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-blue/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100/20 rounded-full filter blur-3xl"></div>
        
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <div className="border border-gray-100 overflow-hidden rounded-lg">
            {/* Our Cleaning Promise section removed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroIntro;
