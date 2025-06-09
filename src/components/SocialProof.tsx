
import { Star, Instagram, Facebook, Link } from "lucide-react";

const SocialProof = () => {
  const brands = [
    { 
      name: 'Google', 
      rating: '4.9/5', 
      reviews: '60', 
      logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', 
      link: 'https://g.co/kgs/MyXuCjQ',
      icon: null
    },
    { 
      name: 'Facebook', 
      rating: '', // Empty rating to hide stars
      reviews: '', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png',
      link: 'https://www.facebook.com/profile.php?id=100089895265790',
      icon: <Facebook className="w-5 h-5 ml-2 animate-icon" />
    },
    {
      name: 'Instagram',
      rating: '',
      reviews: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png',
      link: 'https://www.instagram.com/deepcleanking/?next=%2F',
      icon: <Instagram className="w-5 h-5 ml-2 animate-icon" />
    }
  ];

  // Function to render star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(parseFloat(rating));
    const hasHalfStar = parseFloat(rating) - fullStars >= 0.5;
    const stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-icon" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400 half-filled animate-icon" />);
    }
    
    return stars;
  };

  return (
    <section className="py-10 bg-white border-y border-gray-100">
      <div className="section-container">
        <div className="flex flex-col items-center">
          <p className="text-center text-gray-500 mb-8">Trusted by thousands of satisfied customers</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl mx-auto">
            {brands.map((brand, index) => (
              <div key={index} className="flex flex-col items-center transition-all duration-300 hover:scale-105">
                <div className="h-10 w-auto mb-3">
                  {brand.link ? (
                    <a href={brand.link} target="_blank" rel="noopener noreferrer" className="flex items-center animate-button">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} Logo`}
                        className="h-full w-auto object-contain transition-all duration-300 hover:brightness-110"
                      />
                      {brand.icon}
                    </a>
                  ) : (
                    <img
                      src={brand.logo}
                      alt={`${brand.name} Logo`}
                      className="h-full w-auto object-contain"
                    />
                  )}
                </div>
                <div className="flex flex-col items-center mt-2">
                  {brand.rating && (
                    <div className="flex items-center gap-1 mb-1">
                      {renderStars(brand.rating.split('/')[0])}
                      <span className="text-xl font-semibold ml-1">{brand.rating}</span>
                    </div>
                  )}
                  <span className="text-gray-600">
                    {brand.name === 'Google' && brand.reviews ? (
                      <a href={brand.link} target="_blank" rel="noopener noreferrer" className="hover:underline animate-link">
                        {brand.reviews} {brand.name} reviews
                      </a>
                    ) : (
                      brand.reviews && <>{brand.reviews} reviews</>
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
