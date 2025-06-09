import { useEffect, useState } from 'react';

const FloatingLogo = () => {
  const [opacity, setOpacity] = useState(1);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Make logo visible after a slight delay
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    // Set animation as complete after animation duration
    const animationTimer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);
    
    // Handle scroll for fade out effect after entrance animation is complete
    const handleScroll = () => {
      if (!animationComplete) return;
      
      const scrollPosition = window.scrollY;
      const maxScroll = 300;
      const newOpacity = Math.max(0, 1 - (scrollPosition / maxScroll));
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(animationTimer);
      clearTimeout(visibilityTimer);
    };
  }, [animationComplete]);

  return (
    <div 
      className="w-full flex justify-center py-8 overflow-hidden bg-red-500"
      style={{ 
        opacity: opacity,
        transition: 'opacity 0.3s ease-out',
      }}
    >
      <div 
        className={`transform transition-all duration-1000 ease-out relative group w-full max-w-4xl
          ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
          ${isHovered ? 'scale-105' : 'scale-100'}
          animate-swoop-in`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          perspective: '1000px'
        }}
      >
        {/* Shine effect overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
            animate-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
        />
        
        {/* Logo container with 3D transform */}
        <div className="relative z-30 transform flex justify-center items-center"
             style={{
               transform: 'translateZ(40px)',
               filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
             }}>
          <img 
            src="/deep-clean-king-logo.png" 
            alt="Deep Clean King Logo" 
            className="h-auto w-full max-w-md mix-blend-normal pt-64
              transition-all duration-500 ease-out"
            style={{
              maxHeight: '180px',
              objectFit: 'contain',
              filter: 'drop-shadow(2px 4px 8px rgba(0, 64, 128, 0.25))',
              transform: 'scale(1.0)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingLogo;
