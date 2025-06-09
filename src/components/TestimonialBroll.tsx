import React from 'react';

const TestimonialBroll = () => {
  // Sample testimonial videos - replace these with your actual video URLs
  const testimonialVideos = [
    {
      url: "/testimonial1.mp4",
      name: "Sarah J.",
      role: "Homeowner"
    },
    {
      url: "/testimonial2.mp4",
      name: "Michael P.",
      role: "Office Manager"
    },
    {
      url: "/testimonial3.mp4",
      name: "Jessica W.",
      role: "Property Manager"
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* First row - moving up */}
      <div className="flex space-x-4 mb-4 animate-scroll-up">
        {testimonialVideos.map((video, index) => (
          <div key={`row1-${index}`} className="flex-shrink-0 w-[300px] h-[400px] relative overflow-hidden rounded-lg">
            <video
              src={video.url}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              style={{ transform: 'scale(1.1)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
              <h4 className="font-semibold">{video.name}</h4>
              <p className="text-sm opacity-80">{video.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Second row - moving down */}
      <div className="flex space-x-4 mb-4 animate-scroll-down">
        {testimonialVideos.map((video, index) => (
          <div key={`row2-${index}`} className="flex-shrink-0 w-[300px] h-[400px] relative overflow-hidden rounded-lg">
            <video
              src={video.url}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              style={{ transform: 'scale(1.1)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
              <h4 className="font-semibold">{video.name}</h4>
              <p className="text-sm opacity-80">{video.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Third row - moving up */}
      <div className="flex space-x-4 animate-scroll-up">
        {testimonialVideos.map((video, index) => (
          <div key={`row3-${index}`} className="flex-shrink-0 w-[300px] h-[400px] relative overflow-hidden rounded-lg">
            <video
              src={video.url}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              style={{ transform: 'scale(1.1)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
              <h4 className="font-semibold">{video.name}</h4>
              <p className="text-sm opacity-80">{video.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialBroll; 