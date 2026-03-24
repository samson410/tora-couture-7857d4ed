import { Link } from 'react-router-dom';
import { Instagram, Phone, MapPin, Heart, MessageCircle } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-secondary-foreground mb-4">
              Tora Couture
            </h3>
            <p className="text-secondary-foreground/70 leading-relaxed">
              Creating elegant fashion pieces that empower and inspire. 
              Your style, our passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-secondary-foreground/70 hover:text-gold transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/catalog" 
                className="block text-secondary-foreground/70 hover:text-gold transition-colors"
              >
                Catalog
              </Link>
              <Link 
                to="/about" 
                className="block text-secondary-foreground/70 hover:text-gold transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4 uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a 
                href="tel:08080610348" 
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-gold transition-colors"
              >
                <Phone size={16} />
                08080610348
              </a>
              <div className="flex items-start gap-2 text-secondary-foreground/70">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>No. 32, Elbetel Street, Off Governor's Road, Ikotun, Lagos</span>
              </div>
              <a 
                href="https://instagram.com/toras_couture" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-gold transition-colors"
              >
                <Instagram size={16} />
                @toras_couture
              </a>
              <a 
                href="https://wa.me/2348080610348" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-gold transition-colors"
              >
                <MessageCircle size={16} />
                08080610348
              </a>
              <a 
                href="https://tiktok.com/@your_handle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-gold transition-colors"
              >
                <SiTiktok size={16} />
                @your_handle
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {currentYear} Tora Couture. All rights reserved.
            </p>

            <p>
            Built by SamTech
            </p>
            <p className="text-secondary-foreground/60 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-primary" /> in Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
