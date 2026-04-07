import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar = ({ onContactClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Catalog', href: '/catalog', isRoute: true },
    { name: 'About', href: '/about', isRoute: true },
    { name: 'Contact', href: 'contact', isRoute: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 shadow-elegant py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl md:text-3xl font-bold text-pink-900">
            Tora's Couture
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className={`relative font-medium text-sm uppercase tracking-wider transition-colors duration-300 group ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                } hover:text-gold`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative font-medium text-sm uppercase tracking-wider transition-colors duration-300 group ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                } hover:text-gold`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-300 group-hover:w-full" />
              </button>
            )
          ))}
          <Button variant="hero" size="sm" onClick={onContactClick}>
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-lg transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-8 pt-20">
          {navLinks.map((link, index) => (
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-2xl text-foreground hover:text-primary transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-serif text-2xl text-foreground hover:text-primary transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </button>
            )
          ))}
          <Button variant="hero" size="lg" onClick={() => {
            onContactClick();
            setIsMobileMenuOpen(false);
          }}>
            Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
