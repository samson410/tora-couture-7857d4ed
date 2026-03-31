import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { Button } from '@/components/ui/button';
import { Star, Award, Heart } from 'lucide-react';

const About = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const values = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'Every stitch, every fabric choice reflects our commitment to perfection.',
    },
    {
      icon: Award,
      title: 'Craftsmanship',
      description: 'Handcrafted pieces that blend traditional techniques with modern aesthetics.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Fashion is our love language, and we pour our hearts into every design.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[hsl(51,100%,50%)] font-medium tracking-[0.2em] uppercase text-sm mb-4 animate-fade-up">
            Our Story
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up [animation-delay:200ms]">
            About Us
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto animate-fade-up [animation-delay:400ms]">
            Discover the passion and artistry behind Tora's Couture
          </p>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="animate-fade-up [animation-delay:500ms]">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl" />
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
                  <img
                    src="../public/images/ceo.jpg"
                    alt="Bada Tolulope - CEO of Tora Couture"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-gold rounded-2xl -z-10" />
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-up [animation-delay:700ms]">
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Meet the C.E.O
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Tolulope Bada
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With a vision to redefine elegance in Nigerian fashion, Tolulope Bada founded 
                  Tora's Couture with a simple belief: every woman deserves to feel confident and 
                  beautiful in what she wears.
                </p>
                <p>
                  Her journey began with a passion for creating unique pieces that blend traditional 
                  African aesthetics with contemporary style. Today, Tora's Couture stands as a 
                  testament to her dedication to quality craftsmanship and innovative design.
                </p>
                <p>
                  From corporate boardrooms to special occasions, our designs empower women to 
                  make bold statements while staying true to their authentic selves.
                </p>
              </div>
              <div className="mt-8">
                <Button 
                  variant="elegant" 
                  size="lg"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 animate-fade-up">
              What Drives Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground animate-fade-up [animation-delay:200ms]">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-2xl bg-card shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-up">
            Ready to Elevate Your Style?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8 animate-fade-up [animation-delay:200ms]">
            Let us create something beautiful together. Contact us today to discuss your 
            custom design or explore our collection.
          </p>
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => setIsContactModalOpen(true)}
            className="animate-pulse-glow animate-fade-up [animation-delay:400ms]"
          >
            Contact Us Now
          </Button>
        </div>
      </section>

      <Footer />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default About;
