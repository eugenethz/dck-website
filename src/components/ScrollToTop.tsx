import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[9999] bg-gradient-to-b from-[#004170] to-black text-white p-2 rounded-full shadow-lg hover:from-[#005a9e] hover:to-[#004170] transition-all duration-300"
      aria-label="Back to top"
      style={{
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        width: "35px",
        height: "35px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <svg 
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
  );
};

export default ScrollToTop; 