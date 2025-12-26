import { Shirt, Sparkles, Heart } from 'lucide-react';

const features = [
  {
    icon: Shirt,
    title: 'Corporate Elegance',
    description: 'Tailored palazzos, shirts, and pants designed for the modern professional woman.',
  },
  {
    icon: Sparkles,
    title: 'Ankara Artistry',
    description: 'Bold, vibrant Ankara pieces that celebrate African heritage with contemporary flair.',
  },
  {
    icon: Heart,
    title: 'Corset Couture',
    description: 'Stunning corset outfits crafted to accentuate your natural beauty and curves.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 animate-fade-up">
            Our Specialties
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground animate-fade-up [animation-delay:200ms]">
            Crafted With <span className="text-gradient">Passion</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 200}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
