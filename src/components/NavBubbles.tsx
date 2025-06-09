import React, { useEffect, useRef, useState } from 'react';

interface Bubble {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  sparkles: { x: number; y: number; size: number }[];
  isBursting: boolean;
  burstProgress: number;
  highlightX: number;
  highlightY: number;
  highlightSize: number;
}

interface NavBubblesProps {
  width: number;
  height: number;
}

const NavBubbles: React.FC<NavBubblesProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = width;
    canvas.height = height;

    const bubbles: Bubble[] = [];
    const numBubbles = 8;

    // Initialize bubbles
    for (let i = 0; i < numBubbles; i++) {
      const size = Math.random() * 3 + 2;
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        opacity: Math.random() * 0.3 + 0.4,
        sparkles: Array.from({ length: 2 }, () => ({
          x: Math.random() * 2 - 1,
          y: Math.random() * 2 - 1,
          size: Math.random() * 1.2 + 0.3
        })),
        isBursting: false,
        burstProgress: 0,
        highlightX: Math.random() * 0.4 - 0.2,
        highlightY: Math.random() * 0.4 - 0.2,
        highlightSize: Math.random() * 0.3 + 0.2
      });
    }

    const animate = () => {
      if (!isHovered) return;

      ctx.clearRect(0, 0, width, height);

      bubbles.forEach(bubble => {
        if (!bubble.isBursting) {
          // Update position
          bubble.x += bubble.speedX;
          bubble.y += bubble.speedY;

          // Bounce off edges
          if (bubble.x < 0 || bubble.x > width) bubble.speedX *= -1;
          if (bubble.y < 0 || bubble.y > height) bubble.speedY *= -1;

          // Random chance to start bursting
          if (Math.random() < 0.003) {
            bubble.isBursting = true;
            bubble.burstProgress = 0;
          }

          // Draw bubble with realistic lighting
          const gradient = ctx.createRadialGradient(
            bubble.x + bubble.size * bubble.highlightX,
            bubble.y + bubble.size * bubble.highlightY,
            bubble.size * bubble.highlightSize,
            bubble.x,
            bubble.y,
            bubble.size
          );

          gradient.addColorStop(0, `rgba(255, 255, 255, ${bubble.opacity * 0.9})`);
          gradient.addColorStop(0.4, `rgba(255, 255, 255, ${bubble.opacity * 0.4})`);
          gradient.addColorStop(1, `rgba(255, 255, 255, ${bubble.opacity * 0.1})`);

          ctx.beginPath();
          ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Bubble outline
          ctx.beginPath();
          ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${bubble.opacity * 0.6})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();

          // Main highlight
          ctx.beginPath();
          ctx.arc(
            bubble.x + bubble.size * bubble.highlightX,
            bubble.y + bubble.size * bubble.highlightY,
            bubble.size * bubble.highlightSize,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity * 1.2})`;
          ctx.fill();

          // Secondary highlights (sparkles)
          bubble.sparkles.forEach(sparkle => {
            const sparkleX = bubble.x + sparkle.x * bubble.size;
            const sparkleY = bubble.y + sparkle.y * bubble.size;
            
            const sparkleGradient = ctx.createRadialGradient(
              sparkleX,
              sparkleY,
              0,
              sparkleX,
              sparkleY,
              sparkle.size
            );
            sparkleGradient.addColorStop(0, `rgba(255, 255, 255, ${bubble.opacity * 1.5})`);
            sparkleGradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

            ctx.beginPath();
            ctx.arc(sparkleX, sparkleY, sparkle.size, 0, Math.PI * 2);
            ctx.fillStyle = sparkleGradient;
            ctx.fill();
          });
        } else {
          // Handle bursting animation
          bubble.burstProgress += 0.08;
          
          // Draw burst particles
          const numParticles = 8;
          for (let i = 0; i < numParticles; i++) {
            const angle = (i / numParticles) * Math.PI * 2;
            const distance = bubble.burstProgress * bubble.size * 2;
            const particleX = bubble.x + Math.cos(angle) * distance;
            const particleY = bubble.y + Math.sin(angle) * distance;
            
            const particleGradient = ctx.createRadialGradient(
              particleX,
              particleY,
              0,
              particleX,
              particleY,
              bubble.size * 0.4
            );
            particleGradient.addColorStop(0, `rgba(255, 255, 255, ${bubble.opacity * (1 - bubble.burstProgress) * 1.2})`);
            particleGradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

            ctx.beginPath();
            ctx.arc(particleX, particleY, bubble.size * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = particleGradient;
            ctx.fill();
          }

          // Reset bubble when burst is complete
          if (bubble.burstProgress >= 1) {
            bubble.isBursting = false;
            bubble.x = Math.random() * width;
            bubble.y = Math.random() * height;
            bubble.opacity = Math.random() * 0.3 + 0.4;
            bubble.sparkles = Array.from({ length: 2 }, () => ({
              x: Math.random() * 2 - 1,
              y: Math.random() * 2 - 1,
              size: Math.random() * 1.2 + 0.3
            }));
            bubble.highlightX = Math.random() * 0.4 - 0.2;
            bubble.highlightY = Math.random() * 0.4 - 0.2;
            bubble.highlightSize = Math.random() * 0.3 + 0.2;
          }
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    if (isHovered) {
      animate();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [width, height, isHovered]);

  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ zIndex: 20 }}
      />
    </div>
  );
};

export default NavBubbles; 