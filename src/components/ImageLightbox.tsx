import { X } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
}

const ImageLightbox = ({ isOpen, onClose, image, title }: ImageLightboxProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-secondary/95 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Image Container */}
      <div className="relative max-w-[600px] w-full max-h-[90vh] animate-scale-in">
        <button
          onClick={onClose}
          className="absolute -top-8 right-0 text-primary-foreground/80 hover:text-primary-foreground transition-colors z-10"
        >
          <X size={35} />
        </button>
        
        <div className="bg-card rounded-2xl overflow-hidden shadow-elegant">
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-h-[80vh] object-cover"
          />
          <div className="p-4 bg-card">
            <h3 className="font-serif text-xl font-semibold text-foreground text-center">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
