import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ImageLightbox from '@/components/ImageLightbox';
import ContactModal from '@/components/ContactModal';
import { products } from '@/data/products';


const categories = ['All', 'Corporate', 'Ankara', 'Classy','Kaftan', 'Lace'];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ isOpen: false, image: '', title: '' });

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[hsl(51,100%,50%)] font-medium tracking-[0.2em] uppercase text-sm mb-4 animate-fade-up">
            Our Collection
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up [animation-delay:200ms]">
            Catalog
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto animate-fade-up [animation-delay:400ms]">
            Explore our curated collection of corporate wear, Ankara designs, and stunning corset outfits.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up [animation-delay:600ms]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-primary text-primary-foreground shadow-glow'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${700 + index * 100}ms` }}
              >
                <ProductCard
                  product={product}
                  onViewImage={(image, name) => setLightboxImage({ isOpen: true, image, title: name })}
                  onContactClick={() => setIsContactModalOpen(true)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      
      <ImageLightbox
        isOpen={lightboxImage.isOpen}
        onClose={() => setLightboxImage({ ...lightboxImage, isOpen: false })}
        image={lightboxImage.image}
        title={lightboxImage.title}
      />
    </div>
  );
};

export default Catalog;
