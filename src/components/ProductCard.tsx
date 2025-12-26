import { useState } from 'react';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onViewImage: (image: string, name: string) => void;
  onContactClick: () => void;
}

const ProductCard = ({ product, onViewImage, onContactClick }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <Button 
              variant="hero" 
              size="sm" 
              className="flex-1"
              onClick={onContactClick}
            >
              <ShoppingBag size={16} />
              Order Now
            </Button>
            <button
              onClick={() => onViewImage(product.image, product.name)}
              className="w-10 h-10 rounded-lg bg-card/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors"
            >
              <Eye size={18} />
            </button>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`w-10 h-10 rounded-lg backdrop-blur-sm flex items-center justify-center transition-all ${
                isLiked ? 'bg-primary text-primary-foreground' : 'bg-card/90 text-foreground hover:bg-card'
              }`}
            >
              <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-gold font-bold text-lg">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
