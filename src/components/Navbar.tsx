import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/#cleaning-solution',
    submenu: [
      { name: 'Commercial Cleaning', href: '/commercial-cleaning' },
      { name: 'Residential Cleaning', href: '/residential-cleaning' }
    ]
  },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Contact', href: '/#contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Animate navbar items with delay
    const timer = setTimeout(() => {
      setNavVisible(true);
    }, 200);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    }
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#004170] shadow-md' : 'bg-[#004170]'}`}>
      <nav className="section-container flex justify-between items-center h-16">
        <div className="flex items-center">
          {/* Deep Clean King Logo */}
          <Link to="/">
          <img 
              src="/deepcleanking.png" 
            alt="Deep Clean King Logo" 
              className="h-16 w-auto"
          />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex space-x-8 ${navVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          {navLinks.map((link, index) => (
            <div 
              key={link.name} 
              className="relative group"
            >
              <div className="flex items-center">
                <Link 
                  to={link.href} 
                  className="nav-link text-white text-lg py-1 flex items-center hover:text-gray-200 transition-colors duration-200"
                  style={{ 
                    fontFamily: 'DIN, sans-serif', 
                    fontWeight: 'bold',
                    animationDelay: `${index * 0.1 + 0.2}s` 
                  }}
                  onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                >
                  <span className="animate-fade-in-up inline-block" style={{ animationDelay: `${index * 0.1}s` }}>
                    {link.name}
                  </span>
                </Link>
              </div>
              
              {/* Dropdown Menu */}
              {link.submenu && (
                <div 
                  className={`absolute top-full left-0 mt-2 w-[49.0] bg-white rounded-md shadow-lg py-2 z-[100] ${activeDropdown === link.name ? 'block' : 'hidden'}`}
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 rounded-md text-white ${navVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 animate-button`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} className="animate-icon" /> : <Menu size={24} className="animate-icon" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#004170] shadow-md">
          <div className="flex flex-col py-2">
            {navLinks.map((link, index) => (
              <div key={link.name}>
                <Link 
                  to={link.href} 
                  className="px-8 py-3 text-white hover:bg-[#003560] animate-fade-in-up animate-button block"
                  style={{ 
                    fontFamily: 'DIN, sans-serif', 
                    fontWeight: 'bold',
                    animationDelay: `${index * 0.05}s` 
                  }}
                  onClick={() => !link.submenu && setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="pl-8">
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="px-8 py-2 text-white hover:bg-[#003560] font-medium block"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
