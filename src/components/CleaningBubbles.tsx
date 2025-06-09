import React, { useEffect, useRef } from 'react';

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

const CleaningBubbles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match logo container
    canvas.width = 147;
    canvas.height = 147;

    const bubbles: Bubble[] = [];
    const numBubbles = 10; // Reduced number of bubbles

    // Initialize bubbles
    for (let i = 0; i < numBubbles; i++) {
      const size = Math.random() * 4 + 3; // Slightly larger bubbles
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        speedX: (Math.random() - 0.5) * 1.2,
        speedY: (Math.random() - 0.5) * 1.2,
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
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach(bubble => {
        if (!bubble.isBursting) {
          // Update position
          bubble.x += bubble.speedX;
          bubble.y += bubble.speedY;

          // Bounce off edges
          if (bubble.x < 0 || bubble.x > canvas.width) bubble.speedX *= -1;
          if (bubble.y < 0 || bubble.y > canvas.height) bubble.speedY *= -1;

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

          // Main bubble
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
          
          // Draw burst particles with realistic lighting
          const numParticles = 12;
          for (let i = 0; i < numParticles; i++) {
            const angle = (i / numParticles) * Math.PI * 2;
            const distance = bubble.burstProgress * bubble.size * 2.5;
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
            bubble.x = Math.random() * canvas.width;
            bubble.y = Math.random() * canvas.height;
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

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 20 }}
    />
  );
};

export default CleaningBubbles; 