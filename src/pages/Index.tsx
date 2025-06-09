import { useRef, useEffect, useState } from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";
import { useNavigate } from "react-router-dom";
import ServicesList from "../components/hero/ServicesList";
import { services } from "../components/hero/servicesData";
import Expertise from "../components/Expertise";
import FuturePacing from "../components/FuturePacing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import CredibilityLogos from "../components/CredibilityLogos";
import ScrollToTop from "../components/ScrollToTop";
import CompanyComparison from "../components/CompanyComparison";
import { LuMessageSquareText } from "react-icons/lu";

const videos = [
  "/aged-care.mp4",
  "/cleaning-bench.mp4",
  "/floor-scrubbing-1.mp4",
  "/mopping.mp4",
  "/pressure-washing-1.mp4",
  "/school.mp4",
  "/school-1.mp4"
];

const residentialVideos = [
  "/bedroom.mp4",
  "/kitchen.mp4",
  "/cleaning-sink.mp4",
  "/carpet-steam-cleaning.mp4"
];

function CyclingVideo({ sources }) {
  const [idx, setIdx] = useState(0);
  const videoRef = useRef(null);

  const handleEnded = () => {
    setIdx((prev) => (prev + 1) % sources.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [idx]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [idx]);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover z-0"
      src={sources[idx]}
      autoPlay
      muted
      playsInline
      onEnded={handleEnded}
    />
  );
}

const Index = () => {
  const [sectionsVisible, setSectionsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  // const [locomotiveScroll, setLocomotiveScroll] = useState<LocomotiveScroll | null>(null);
  const navigate = useNavigate();
  const [painPointsVisible, setPainPointsVisible] = useState(false);
  const painPointsRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const promiseRef = useRef(null);
  const qualificationsRef = useRef(null);
  const credibilityRef = useRef(null);
  const comparisonRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);
  
  useEffect(() => {
    // Delay revealing sections for a staggered effect
    const timer = setTimeout(() => {
      setSectionsVisible(true);
    }, 500);
    
    // let scroll: LocomotiveScroll | undefined;
    // if (scrollRef.current) {
    //   scroll = new LocomotiveScroll({
    //     el: scrollRef.current,
    //     smooth: true,
    //     lerp: 0.08, // Adjust for inertia feel
    //   });
    //   setLocomotiveScroll(scroll);
    // }
    return () => {
      clearTimeout(timer);
      // scroll?.destroy();
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!painPointsRef.current) return;
      const rect = painPointsRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setPainPointsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Function to create staggered delays
  const getAnimationDelay = (index: number) => {
    return { animationDelay: `${index * 0.2}s` };
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="site-zoom-wrapper">
        <header className="w-full bg-gradient-to-b from-black to-[#004170] shadow-md !mt-0 !pt-0 !mb-0 !pb-0" style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
          <div className="flex items-center w-full h-[140px]">
            <img 
              src="/dck-logo-black-1.png" 
              alt="Deep Clean King Logo" 
              className="h-[147px] w-auto ml-[500px]"
            />
            <div className="mx-auto flex space-x-8 items-center">
              <a href="/#our-cleaning-services" onClick={e => handleNavScroll(e, 'our-cleaning-services')} className="px-6 py-2 font-bold text-white text-2xl relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-1/2 after:-bottom-1 after:transform after:-translate-x-1/2 hover:after:w-full after:transition-all after:duration-300">Our Services</a>
              <a href="/#testimonials" onClick={e => handleNavScroll(e, 'testimonials')} className="px-6 py-2 font-bold text-white text-2xl relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-1/2 after:-bottom-1 after:transform after:-translate-x-1/2 hover:after:w-full after:transition-all after:duration-300">Testimonials</a>
              <a href="/#contact" onClick={e => handleNavScroll(e, 'contact')} className="px-6 py-2 font-bold text-white text-2xl relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-1/2 after:-bottom-1 after:transform after:-translate-x-1/2 hover:after:w-full after:transition-all after:duration-300">Book Now</a>
              <a href="/#contact" onClick={e => handleNavScroll(e, 'contact')} className="px-6 py-2 font-bold text-white text-2xl relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-1/2 after:-bottom-1 after:transform after:-translate-x-1/2 hover:after:w-full after:transition-all after:duration-300">Contact</a>
            </div>
          </div>
        </header>
        {/* Existing Cleaning Types Section */}
        <section className="w-full flex flex-col md:flex-row h-[897px] relative overflow-hidden py-0">
          {/* Commercial Cleaning */}
          <div
            className="flex-1 relative flex flex-col justify-center items-center p-2 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ cursor: "pointer" }}
          >
            <CyclingVideo sources={videos} />
            <div className="absolute inset-0 bg-black z-10 opacity-80" style={{backgroundColor: 'rgba(0,0,0,0.8)'}} />
            <div className="relative z-20 flex flex-col items-center">
              <h2 className="text-white text-4xl md:text-6xl font-bold mb-8 text-center">LOOKING FOR<br />COMMERCIAL CLEANING</h2>
              <a 
                href="#contact" 
                onClick={e => handleNavScroll(e, 'contact')} 
                className="mt-4 px-16 py-6 border-2 border-white text-white font-semibold rounded transition hover:bg-white hover:text-black text-3xl"
              >
                Enquire Now
              </a>
            </div>
          </div>
          {/* Residential Cleaning */}
          <div className="flex-1 relative flex flex-col justify-center items-center p-2 overflow-hidden">
            <CyclingVideo sources={residentialVideos} />
            <div className="absolute inset-0 bg-black z-10 opacity-80" style={{backgroundColor: 'rgba(0,0,0,0.8)'}} />
            <div className="relative z-20 flex flex-col items-center">
              <h2 className="text-white text-4xl md:text-6xl font-bold mb-8 text-center">LOOKING FOR<br />RESIDENTIAL CLEANING</h2>
              <a 
                href="#contact" 
                onClick={e => handleNavScroll(e, 'contact')} 
                className="mt-4 px-16 py-6 border-2 border-white text-white font-semibold rounded transition hover:bg-white hover:text-black text-3xl"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </section>
        {/* Pain Points Section - Common Cleaning Frustrations */}
        <section id="pain-points-section" className="bg-gradient-to-b from-[#004170] to-black text-white border-none shadow-none outline-none" ref={painPointsRef}>
          <div className="section-container max-w-7xl mx-auto">
            <h2 className="text-6xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'DIN Regular, sans-serif' }}>Common Cleaning Frustrations</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center mb-20" style={{ fontFamily: 'DIN Regular, sans-serif' }}>We get what other cleaners miss, and that's why we're different.</p>
            <div className="grid grid-cols-1 md:grid-cols-6 mt-16 relative px-8 justify-items-center" style={{ columnGap: '50px' }}>
              {[
                {
                  title: "Poor Communication",
                  frustration: "",
                  image: "/slow-message.png",
                  icon: null
                },
                {
                  title: "Hidden Fees",
                  frustration: "",
                  image: "/no-hidden-fees.png",
                  icon: null
                },
                {
                  title: "Inconsistent Quality",
                  frustration: "",
                  image: "/disadvantage.png"
                },
                {
                  title: "No-Shows",
                  frustration: "",
                  image: "/confused.png"
                },
                {
                  title: "Rushed Work",
                  frustration: "",
                  image: "/rush.png"
                },
                {
                  title: "No Accountability",
                  frustration: "",
                  image: "/argument.png"
                }
              ].map((point, index) => {
                const cardDelay = index * 0.2;
                return (
                  <div key={index} className={`rounded-lg p-6 text-center flex flex-col h-full fade-in-left w-72${index === 0 ? ' -ml-[200px]' : ''}${index === 1 ? ' -ml-[100px]' : ''}${[3,4,5].includes(index) ? ' ml-[200px]' : ''}`} style={{ animationDelay: `${index * 0.3}s` }}>
                    {(index === 0)
                      ? <img src={point.image} alt={point.title} className="mx-auto mb-4 h-32 w-32 object-contain" />
                      : <img src={point.image} alt={point.title} className="mx-auto mb-4 h-32 w-32 object-contain" />}
                    <h4 className="font-bold text-[#f5f5f5] text-4xl mb-2" style={{ fontFamily: 'DIN Regular, sans-serif' }}>
                      <button
                        className="px-4 py-2 rounded-lg font-bold text-[#004170] select-none shadow-md"
                        style={{ background: 'white', border: 'none', outline: 'none', userSelect: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', pointerEvents: 'none' }}
                        tabIndex={-1}
                        onMouseDown={e => e.preventDefault()}
                        onFocus={e => e.target.blur()}
                      >
                        {point.title}
                      </button>
                    </h4>
                    {point.frustration && <p className="text-[#f5f5f5] text-base">{point.frustration}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Our Cleaning Promise Section */}
        <section className="bg-gradient-to-b from-black to-[#004170] border-none shadow-none outline-none" ref={promiseRef}>
          <div className="section-container">
            <h2 className="text-6xl font-bold text-center mb-2 text-[#f5f5f5]" style={{ fontFamily: 'DIN Regular, sans-serif' }}>Our Cleaning Promise</h2>
            <p className="text-xl text-[#f5f5f5] text-center mb-10" style={{ fontFamily: 'DIN Regular, sans-serif' }}>What makes our cleaning services exceptional</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center">
              <div className="rounded-lg p-6 text-center">
                <img src="/checklist.png" alt="Trained Not Outsourced" className="mx-auto mb-4 h-32 w-32 object-contain" />
                <h3 className="font-bold text-4xl text-[#f5f5f5] mb-2" style={{ fontFamily: 'DIN Regular, sans-serif' }}>
                  <button
                    className="px-4 py-2 rounded-lg font-bold text-[#004170] select-none shadow-md"
                    style={{ background: 'white', border: 'none', outline: 'none', userSelect: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', pointerEvents: 'none' }}
                    tabIndex={-1}
                    onMouseDown={e => e.preventDefault()}
                    onFocus={e => e.target.blur()}
                  >
                    Trained, Not Outsourced
                  </button>
                </h3>
              </div>
              <div className="rounded-lg p-6 text-center">
                <img src="/growth.png" alt="High First-Time Pass Rate" className="mx-auto mb-4 h-32 w-32 object-contain" />
                <h3 className="font-bold text-4xl text-[#f5f5f5] mb-2" style={{ fontFamily: 'DIN Regular, sans-serif' }}>
                  <button
                    className="px-4 py-2 rounded-lg font-bold text-[#004170] select-none shadow-md"
                    style={{ background: 'white', border: 'none', outline: 'none', userSelect: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', pointerEvents: 'none' }}
                    tabIndex={-1}
                    onMouseDown={e => e.preventDefault()}
                    onFocus={e => e.target.blur()}
                  >
                    High First-Time Pass Rate
                  </button>
                </h3>
              </div>
              <div className="rounded-lg p-6 text-center">
                <img src="/yes.png" alt="We Never Say No" className="mx-auto mb-4 h-32 w-32 object-contain" />
                <h3 className="font-bold text-4xl text-[#f5f5f5] mb-2" style={{ fontFamily: 'DIN Regular, sans-serif' }}>
                  <button
                    className="px-4 py-2 rounded-lg font-bold text-[#004170] select-none shadow-md"
                    style={{ background: 'white', border: 'none', outline: 'none', userSelect: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', pointerEvents: 'none' }}
                    tabIndex={-1}
                    onMouseDown={e => e.preventDefault()}
                    onFocus={e => e.target.blur()}
                  >
                    We Never Say No
                  </button>
                </h3>
              </div>
              <div className="rounded-lg p-6 text-center">
                <img src="/boss.png" alt="Owners Run and Trained Staff" className="mx-auto mb-4 h-32 w-32 object-contain" />
                <h3 className="font-bold text-4xl text-[#f5f5f5] mb-2" style={{ fontFamily: 'DIN Regular, sans-serif' }}>
                  <button
                    className="px-4 py-2 rounded-lg font-bold text-[#004170] select-none shadow-md"
                    style={{ background: 'white', border: 'none', outline: 'none', userSelect: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', pointerEvents: 'none' }}
                    tabIndex={-1}
                    onMouseDown={e => e.preventDefault()}
                    onFocus={e => e.target.blur()}
                  >
                    Owners Run and Trained Staff
                  </button>
                </h3>
              </div>
            </div>
          </div>
        </section>
        {/* Company Comparison Section */}
        <div ref={comparisonRef}>
          <CompanyComparison />
        </div>
        {/* Credibility Logos Section */}
        <div className="bg-gradient-to-b from-black to-[#004170]" ref={credibilityRef}>
          <CredibilityLogos />
        </div>
        {/* Qualifications Section */}
        <div className="bg-[#004170] pb-[100px]">
          <div className="flex items-center justify-center gap-8 flex-wrap" ref={qualificationsRef}>
            <img src="/Removed background/iso_test-removebg-preview.png" alt="ISO 9001 Certificate" className="h-48 w-auto inline-block mx-2 bg-transparent" />
            <img src="/Removed background/iso_test_2-removebg-preview.png" alt="ISO 14001 Certificate" className="h-48 w-auto inline-block mx-2 bg-transparent" />
            <img src="/Removed background/iso_test_3-removebg-preview.png" alt="ISO 45001 Certificate" className="h-48 w-auto inline-block mx-2 bg-transparent" />
            <img src="/Removed background/nra-white.png" alt="NRA Logo" className="h-48 w-auto inline-block mx-2 bg-transparent" />
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#004170] to-black text-[#f5f5f5]" id="our-cleaning-services" ref={servicesRef}>
          <div className="relative flex justify-center">
            <h2 className="text-4xl md:text-5xl font-light text-[#f5f5f5] mb-12 text-center inline-block" style={{ backgroundColor: 'transparent' }}>
              Our Cleaning Services
            </h2>
          </div>
          {/* Edge-to-edge ServicesList, no section-container or padding */}
          <div className="relative">
            {/* <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#004170] transform -translate-x-1/2 z-10"></div> */}
            <ServicesList services={[
              services.find(s => s.title === "Commercial Cleaning"),
              ...services.filter(s => s.title !== "Commercial Cleaning")
            ].filter(Boolean).map(service => ({
              ...service,
              description: Array.isArray(service.description) ? service.description.join("\n") : service.description
            }))} />
          </div>
        </div>
        {/* Google Review Testimonials Section */}
        <div className="bg-gradient-to-b from-black to-[#004170]" ref={testimonialsRef}>
          <Testimonials />
        </div>
        <div className="bg-gradient-to-b from-black to-[#004170]" ref={ctaRef}>
          <CTA sectionClassName="bg-gradient-to-b from-black to-[#004170]" />
        </div>
      </div>
      <div className="relative">
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
