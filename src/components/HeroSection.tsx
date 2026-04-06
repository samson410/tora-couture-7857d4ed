import { Button } from './ui/button';
import { Link } from "react-router-dom";

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[hsl(51,100%,50%,0.1)] blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-secondary/30 blur-2xl animate-float-slow" />
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-[hsl(51,100%,50%,0.6)] animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-primary-foreground/40 animate-float-delayed" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-[hsl(51,100%,50%,0.8)] animate-float-slow" />
        <div className="absolute top-1/3 left-1/2 w-5 h-5 rounded-full bg-primary-foreground/30 animate-float" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight animate-fade-up">
            Tora Couture
          </h1>
          
          <p className="font-serif text-2xl md:text-4xl lg:text-5xl italic text-[hsl(51,100%,50%)] animate-fade-up [animation-delay:200ms]">
            Elegance Is Key
          </p>
          
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-up [animation-delay:400ms]">
            We specialize in corporate wears like palazzo, shirts, pants, and others. 
            We also create exquisite Ankara & corset outfits that define your unique style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-up [animation-delay:600ms]">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={onContactClick}
              className="animate-pulse-glow"
            >
              Contact Us
            </Button>
         <Button
            variant="outline"
            size="xl"
            className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-secondary"
            asChild
          >
            <Link to="/catalog">View Collection</Link>
          </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[hsl(51,100%,50%)] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
