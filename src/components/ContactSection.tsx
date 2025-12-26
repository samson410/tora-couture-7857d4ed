import { useState } from 'react';
import { Phone, MapPin, Instagram, Send, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { SiTiktok } from 'react-icons/si';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-gradient-hero relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[hsl(51,100%,50%,0.1)] blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[hsl(51,100%,50%)] font-medium tracking-[0.2em] uppercase text-sm mb-4 animate-fade-up">
            Let's Connect
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground animate-fade-up [animation-delay:200ms]">
            Get In Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-up [animation-delay:400ms]">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-primary-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <a 
                  href="tel:08080610348" 
                  className="flex items-center gap-4 text-primary-foreground/90 hover:text-[hsl(51,100%,50%)] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-[hsl(51,100%,50%,0.2)] transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60">Call Us</p>
                    <p className="font-medium">08080610348</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-primary-foreground/90">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60">Visit Us</p>
                    <p className="font-medium">
                      No. 32, Elbetel Street, Off Governor's Road, Ikotun, Lagos
                    </p>
                  </div>
                </div>

                <a 
                  href="https://instagram.com/toras_couture" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-primary-foreground/90 hover:text-[hsl(51,100%,50%)] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-[hsl(51,100%,50%,0.2)] transition-colors">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60">Follow Us</p>
                    <p className="font-medium">@toras_couture</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/2348080610348" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-primary-foreground/90 hover:text-[hsl(51,100%,50%)] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-[hsl(51,100%,50%,0.2)] transition-colors">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60">WhatsApp</p>
                    <p className="font-medium">08080610348</p>
                  </div>
                </a>

                <a 
                  href="https://tiktok.com/@your_handle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-primary-foreground/90 hover:text-[hsl(51,100%,50%)] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-[hsl(51,100%,50%,0.2)] transition-colors">
                    <SiTiktok size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60">TikTok</p>
                    <p className="font-medium">@your_handle</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant animate-fade-up [animation-delay:600ms]">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Your Message"
                />
              </div>
              <Button 
                type="submit" 
                variant="elegant" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={18} />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
