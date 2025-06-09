import React, { useRef, useEffect } from "react";

const logos = [
  { src: "/Removed background/ace-body-corp.png", alt: "Ace Body Corp" },
  { src: "/Removed background/besser-co.png", alt: "Besser Co" },
  { src: "/Removed background/chisholm-gamon.png", alt: "Chisholm Gamon" },
  { src: "/Removed background/haileybury.png", alt: "Haileybury" },
  { src: "/Removed background/harcourts-melbourne.png", alt: "Harcourts Melbourne" },
  { src: "/Removed background/knox-school.png", alt: "Knox School" },
  { src: "/Removed background/network-pacific.png", alt: "Network Pacific" },
  { src: "/Removed background/p-di-natale.png", alt: "P Di Natale" },
  { src: "/Removed background/property-x.png", alt: "Property X" },
  { src: "/Removed background/regis-aged-care.png", alt: "Regis Aged Care" },
  { src: "/Removed background/stockdale-leggo.png", alt: "Stockdale Leggo" },
  { src: "/Removed background/vbcs.png", alt: "VBCS" },
  { src: "/Removed background/woodards.png", alt: "Woodards" },
  { src: "/Removed background/xynergy.png", alt: "Xynergy" },
  { src: "/Removed background/ypa.png", alt: "YPA" },
];

const LOGO_WIDTH = 192; // px, adjust as needed
const GAP = 32; // px

const CredibilityLogos = () => {
  const trackRef = useRef(null);
  // Duplicate logos for seamless looping
  const items = [...logos, ...logos];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animationId;
    let start;
    let left = 0;
    const totalWidth = (LOGO_WIDTH + GAP) * logos.length;
    function animate(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      // 40px per second (double speed)
      left = -(elapsed * 0.08) % totalWidth;
      track.style.transform = `translateX(${left}px)`;
      animationId = requestAnimationFrame(animate);
    }
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="bg-gradient-to-b from-black to-[#004170]">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-center mb-8 text-white" style={{ fontFamily: 'DIN Regular, sans-serif' }}>
          Our Clients
        </h2>
        <div className="bg-transparent w-full overflow-hidden p-0 m-0 flex justify-center items-center">
          <div className="w-[75%] relative flex justify-center items-center py-8" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
            <div
              ref={trackRef}
              className="flex gap-8"
              style={{ willChange: 'transform' }}
            >
              {items.map((logo, idx) => (
                <div key={idx} className="flex-shrink-0 flex justify-center items-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-28 w-48 object-contain opacity-80 hover:opacity-100 transition duration-300 bg-transparent"
                    style={{ maxHeight: 120 }}
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilityLogos; 
 
 
 