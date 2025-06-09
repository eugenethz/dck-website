import { Star } from 'lucide-react';
import React, { useRef, useEffect, useMemo } from 'react';

const CARD_HEIGHT = 440; // doubled from 220
const GAP = 48; // doubled from 24
const VISIBLE_CARDS = 2; // Number of cards visible at once per column
const COLUMNS = 3;

function chunkArray(arr, chunkCount) {
  const result = Array.from({ length: chunkCount }, () => []);
  arr.forEach((item, idx) => {
    result[idx % chunkCount].push(item);
  });
  return result;
}

const TestimonialGridCarousel = ({ testimonials }) => {
  const trackRefs = useRef([useRef(null), useRef(null), useRef(null)]);
  
  // Memoize columns calculation
  const columns = useMemo(() => chunkArray(testimonials, COLUMNS), [testimonials]);

  useEffect(() => {
    const animationIds = [];
    const starts = [null, null, null];
    const speeds = [0.03, 0.036, 0.042]; // Doubled speeds for each column
    columns.forEach((col, colIdx) => {
      const track = trackRefs.current[colIdx].current;
      if (!track) return;
      let top = 0;
      const totalHeight = (CARD_HEIGHT + GAP) * col.length;
      function animate(ts) {
        if (!starts[colIdx]) starts[colIdx] = ts;
        const elapsed = ts - starts[colIdx];
        top = -(elapsed * speeds[colIdx]) % totalHeight;
        track.style.transform = `translateY(${top}px)`;
        animationIds[colIdx] = requestAnimationFrame(animate);
      }
      animationIds[colIdx] = requestAnimationFrame(animate);
    });
    return () => animationIds.forEach(id => cancelAnimationFrame(id));
  }, [columns]);

  return (
    <div className="w-full py-8 flex gap-16 justify-center items-center h-[1200px] md:h-[768px]">
      {columns.map((col, colIdx) => (
        <div key={colIdx} className="overflow-hidden w-[680px] h-full flex-shrink-0">
          <div
            ref={trackRefs.current[colIdx]}
            className="flex flex-col gap-12"
            style={{ willChange: 'transform' }}
          >
            {[...col, ...col].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-[#f5f5f5] rounded-2xl p-12 shadow-2xl text-gray-800 flex flex-col min-h-[300px] border-2 border-[#e0e0e0] min-w-[600px] max-w-[680px] w-full"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mr-8 object-cover border-4 border-[#e0e0e0]"
                  />
                  <div>
                    <h4 className="font-semibold text-3xl text-gray-800">{testimonial.name}</h4>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400 mr-2" />
                  ))}
                </div>
                <blockquote className="italic text-gray-700 flex-grow text-2xl leading-relaxed">"{testimonial.quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialGridCarousel; 