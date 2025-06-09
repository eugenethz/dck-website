import HeroIntro from "./hero/HeroIntro";
import PainPoints from "./hero/PainPoints";

const Hero = () => {
  
  return (
    <section id="hero" className="pt-36 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#004170]/10 to-white z-0">
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>
      
      <div className="section-container relative z-10">
        <HeroIntro />
        <PainPoints />
      </div>
    </section>
  );
};

export default Hero;
