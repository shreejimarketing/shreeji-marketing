
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  className,
}) => {
  return (
    <motion.div
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className={cn(
        'group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md',
        className
      )}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="aspect-[4/3] w-full relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 space-y-3 relative">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-10 h-10 bg-wood-dark/5 transform rotate-45 translate-x-5 -translate-y-5 group-hover:bg-wood-dark/10 transition-all duration-300"></div>
        
        <h3 className="text-xl font-semibold text-wood-dark group-hover:text-wood-dark/90 transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3">{description}</p>
        
        <div className="pt-2 flex justify-between items-center">
          <Link 
            to={`/products/${id}`}
            className="inline-flex items-center text-sm font-medium text-wood-dark group/link"
          >
            <span className="border-b border-transparent group-hover/link:border-wood-dark transition-all">
              View Details
            </span>
            <motion.div
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="ml-1 w-4 h-4" />
            </motion.div>
          </Link>
          
          <div className="text-xs uppercase tracking-wider text-earth-brown/70 font-semibold opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Premium
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
