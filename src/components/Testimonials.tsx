import { Star } from 'lucide-react';
import { useState } from 'react';
// import TestimonialBroll from './TestimonialBroll';
import TestimonialGridCarousel from './TestimonialGridCarousel';

const DEFAULT_AVATAR = "https://randomuser.me/api/portraits/men/32.jpg";

  const testimonials = [
    {
    name: "Brock McGuire",
    role: "Google Review",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    quote: "I cannot speak highly enough of Deep Clean King. My real estate agent referred Deep Clean King to me for a mould issue I was having in my rental property. They gave me a step-by-step process on how to avoid mould from growing and the damage mould can have on your health. Deep Clean King treated the mould problem in my rental property in January 2023, and no issues whatsoever. My health started to improve once the mould was removed safely and effectively. If only I could give them more than 5 stars, highly recommended.",
    rating: 5
  },
  {
    name: "Emma Mary Williams",
    role: "Google Review",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    quote: "Best cleaning crew in Melbourne. Would recommend.",
    rating: 5
  },
  {
    name: "Cody Robinson",
    role: "Google Review",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    quote: "Excellent cleaning service and very handsome staff.",
    rating: 5
  },
  {
    name: "Eve Papishaya",
    role: "Google Review",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    quote: "We got our full bond back because of Deep Clean King. Thank you thank you thank you!!! Amazing service, great communication from start to finish.😊",
    rating: 5
  },
  {
    name: "Chonrada Sajjakhet (Kira)",
    role: "Google Review",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    quote: "Brock is the real MVP. Straight talk, clear prices, no upsells or tricky crap. Just came in, smashed out the clean, and left it spotless.",
    rating: 5
  },
  {
    name: "อนุชา จ้ายอ่อง",
    role: "Google Review",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    quote: "Angus and Brock are honestly miracle workers. I was embarrassed by the state of my windows. Mold, grime, years of buildup. They now sparkle so much, birds think it's open air. Couldn't be happier.",
    rating: 5
  },
  {
    name: "keshia jade cardenas",
    role: "Google Review",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    quote: "I was on the verge of losing my bond until Deep Clean King swooped in like superheroes. Eugene handled everything with such precision – oven, skirting boards, blinds – you name it. The agent was shocked at how clean it was. Bond back. Legends.",
    rating: 5
  },
  {
    name: "Emily Pt",
    role: "Google Review",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    quote: "Amazing service, very responsive and never had a seamless experience before in my life. 10/10!",
    rating: 5
  },
  {
    name: "Joanne Williams",
    role: "Google Review",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    quote: "Very impressed with job done. Busy household, pets and kids. Looks wonderful. Recommend highly.",
    rating: 5
  },
  {
    name: "Berryice Icecreamwippy",
    role: "Google Review",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    quote: "Used Deep Clean King for my end of lease clean and wow... I didn't think my oven could look brand new again. Bond was returned without a single question. Brock was super responsive and explained everything clearly. Will be using them again for sure!👍",
    rating: 5
  },
  {
    name: "Aran Brown",
    role: "Google Review",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    quote: "Brock is an absolute legend - he made the place look brand new! Not just a fantastic cleaner but a lovely guy as well. Would highly recommend for a 5 star service.",
    rating: 5
  },
  {
    name: "Caroline Huynh",
    role: "Google Review",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    quote: "Awesome guys! Great clean - highly recommend 5/5. Top service!",
    rating: 5
  },
  {
    name: "Ngu Nguyen",
    role: "Google Review",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote: "Highly recommend, Brock is super easy to deal with and competitive pricing, no complaints.",
    rating: 5
  },
  {
    name: "Crizel Martirez",
    role: "Google Review",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    quote: "Good service and easy communication.",
    rating: 5
  },
  {
    name: "h i",
    role: "Google Review",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    quote: "They did a really good job with the end of lease cleaning, my apartment feels so fresh and nice now! They had really good attention to detail so I'm happy with the results!",
    rating: 5
  },
  {
    name: "Belinda Longe",
    role: "Google Review",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    quote: "I recently booked a service through Deep Clean King. Brock and his team have nothing but fantastic, exceptional communication & quality standards. Will be using this company again & can highly recommend.",
    rating: 5
  },
  {
    name: "melody ouyang",
    role: "Google Review",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    quote: "Great service. Booked them for my recent end-of-lease cleaning. Professional and very friendly.",
    rating: 5
  },
  {
    name: "Selene Frai",
    role: "Google Review",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
    quote: "Really easy to communicate with and they did a great job, highly recommend!",
    rating: 5
  },
  {
    name: "Nova Shi",
    role: "Google Review",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    quote: "Everything works out perfectly, highly friendly and responsible, couldn't recommend enough Deep Clean King!",
    rating: 5
  },
  {
    name: "King Chew",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Very good service, communication, and follow up service. do recommend.",
    rating: 5
  },
  {
    name: "Erryl Tobes",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Really impressed with the end-of-lease cleaning service provided. The team did a fantastic job and ensured every area was thoroughly cleaned. The level of detail was excellent. The kitchen, bathrooms, and living areas were spotless.",
    rating: 5
  },
  {
    name: "Chris Boocock",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Eugene and his Team did such a fantastic job of my new apartment. He managed to attend on the day with a couple of hours notice and everything looks amazing. I would recommend to all! Thanks again Eugene!",
    rating: 5
  },
  {
    name: "Ning Yao",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Spotless cleaning service and prompt correspondence, highly recommenced for anyone looking for a trouble free vacate experience.",
    rating: 5
  },
  {
    name: "David Sibenaler",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "They were so friendly. Great customer service.",
    rating: 5
  },
  {
    name: "Richie",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Really great services provided by Eugene and his team. Excellent communication, spotless clean and really professional. Highly recommend Deep Clean King for all your cleaning needs.",
    rating: 5
  },
  {
    name: "Nicola Fay",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Absolutely spotless apartment. I would recommend Eugene and his team to anyone who needs a deep clean. We engaged with Eugene for our end of lease clean and the apartment was spotless.",
    rating: 5
  },
  {
    name: "Kobi Pelletier",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Did a fantastic end of lease clean, extremely thorough and cost effective deep clean.",
    rating: 5
  },
  {
    name: "Sam Sungmin Lee",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Eugene had good communication and was honest about his cleaning progress for my end of lease cleaning :)",
    rating: 5
  },
  {
    name: "Gullu Balci",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Eugene did a fantastic job with the end-of-lease cleaning of our property. His communication was excellent throughout the entire process, making everything smooth and stress-free. The property was spotless and looked better than ever!",
    rating: 5
  },
  {
    name: "Prad Sen",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Deep Clean King were absolutely amazing, and fantastic professionals who were clear and communicative to deal with and whose attention to detail left my residence spotless and sparkling after a deep clean.",
    rating: 5
  },
  {
    name: "Rupesh Kumar",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Good service.",
    rating: 5
  },
  {
    name: "Olivia T (walksofliv)",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Thank you Eugene and Allan for assisting with my end of lease clean and attending to my queries! They ensured the apartment was spotless and communicated well with my property manager to ensure I receive my bond back. Also thank you so much for going out of the way to replace my lamp light bulb! Thank you once again!",
    rating: 5
  },
  {
    name: "Zaid Mohammed",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "I recently hired Deep Clean King to do a deep clean of our new property before we moved in, and I couldn't be happier with the results. The team was professional, thorough, and left our new home looking fresh.",
    rating: 5
  },
  {
    name: "Khanh Nguyen",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Fantastic! Professional, Efficient & Punctual!",
    rating: 5
  },
  {
    name: "Joey Lee",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Good service, great job.",
    rating: 5
  },
  {
    name: "Laoise Paddon",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Good service.",
    rating: 5
  },
  {
    name: "sher anne wong",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Good service.",
    rating: 5
  },
  {
    name: "Laura Bartlett",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "These guys are amazing! They made the place look better than when we moved in! If you need 100% bond back then these guys are your go to! Look no further! Thank you so much for the amazing job you did! 10/10!",
    rating: 5
  },
  {
    name: "Dimity Hawkins",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Appreciated the wonderful clean these fellas did - great communicators, fast and really efficient.",
    rating: 5
  },
  {
    name: "Natalie Sean",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Fantastic experience with Brock and his crew. They cleaned our 4 bedroom home for an end of lease clean and steam cleaned the carpets. They provided an awesome service at short notice and got the job done efficiently without judgement. We would highly recommend this service to anyone in the Point Cook area!!",
    rating: 5
  },
  {
    name: "Ahmed nasser",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Just got my apartment cleaned by Brock and Angus. The apartment is smh even cleaner than when I moved in. They were so efficient, thorough, and friendly. I would 100% recommend.",
    rating: 5
  },
  {
    name: "Tatum Stefuly",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Brock and his team were amazing. Communication throughout my end of lease clean was phenomenal. Made the moving process really easy. Thanks again.",
    rating: 5
  },
  {
    name: "Dione Henry",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Great service, super thorough and efficient!",
    rating: 5
  },
  {
    name: "Seri Han",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "They did a great job cleaning our apartment. Very clean and spotless! So happy with their professional service. Also easy to communicate. Highly recommend them.",
    rating: 5
  },
  {
    name: "Eugene Catanzariti",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Efficient. Organised. very good clean.",
    rating: 5
  },
  {
    name: "Kirigan Sea",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "I booked service with deep clean king and I was not disappointed at all with the service and cleaning. Would recommend for anyone to try the cleaning service here.",
    rating: 5
  },
  {
    name: "Anne Leonard",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "They are enthusiasts. Did a very good job on my shower screen.",
    rating: 5
  },
  {
    name: "Paula Farrugia",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Brock and his team were great to deal with and extremely thorough would highly recommend them.",
    rating: 5
  },
  {
    name: "Minny Puarworn",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Good service.",
    rating: 5
  },
  {
    name: "hongji hu",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Good cleaning company! Make my apartment spotless and easy to vacate. Definitely recommend.",
    rating: 5
  },
  {
    name: "Scott Franklin",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Brock was a great cleaner and did a superb job over and above expectation. Couldn't more highly recommend.",
    rating: 5
  },
  {
    name: "Mitchell Lane",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "I recently had the pleasure of hiring the cleaning services of this fantastic company, specializing in mould cleaning and end of lease cleans, and I couldn't be happier with the results. From start to finish, they exceeded my expectations.",
    rating: 5
  },
  {
    name: "B F",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Eugene and his colleague communicated well and were very prompt. They removed extensive mould from our bathroom and even managed to fit in some steam cleaning whilst they were here.",
    rating: 5
  },
  {
    name: "Sebastian Arcila",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "These guys leave your home brand new!! Incredible service.",
    rating: 5
  },
  {
    name: "Nicolas Barrote",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Excelente service and friendly staff.",
    rating: 5
  },
  {
    name: "Aubrey Claveria",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "They did an outstanding job. They cleaned very thoroughly and paid attention to all the details.",
    rating: 5
  },
  {
    name: "Sophie Maile",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "I had just got the keys to my new rental and it was filthy. Contacted these guys to see if they could help and they booked in me very quickly and made the place sparkling. I was so impressed with their attention to detail and the friendly service.",
      rating: 5
    },
    {
    name: "Marty McCarthy",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "Brock and his team did an amazing bond clean on my place. He was very efficient with it, and very communicative throughout the process. He did a thorough job with plenty of care.",
      rating: 5
    },
    {
    name: "Himanshu Desai",
    role: "Google Review",
    image: DEFAULT_AVATAR,
    quote: "I have used Deep Clean King, through my real estate agent. My apartment had some tradies go through the apartment after my previous tenant had vacated. My apartment needed thorough cleaning and wiping of all surfaces, steam cleaning, and more. They did an excellent job and I highly recommend them.",
      rating: 5
    }
  ];

const Testimonials = () => {
  const [animationStarted] = useState(true);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-black to-[#004170]">
      <div className="section-container">
        <h2 className={`text-4xl md:text-5xl font-light text-white mb-6 text-center animate-fade-in-up ${animationStarted ? 'opacity-100' : 'opacity-0'}`}>What Our Clients Say</h2>
        <p className={`text-lg text-blue-100 max-w-3xl mx-auto text-center mb-20 animate-fade-in-up ${animationStarted ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          Don't just take our word for it – hear from our satisfied customers
        </p>

        {/* Removed Testimonial B-roll Section */}

        {/* Horizontal Carousel */}
        <div style={{ transform: 'scale(0.8)', transformOrigin: 'top center' }}>
        <TestimonialGridCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
