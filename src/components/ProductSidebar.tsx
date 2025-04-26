import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp, Layers, Box, DoorClosed, Pencil, Package, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CategoryItem {
  id: string;
  name: string;
}

interface ProductCategoryProps {
  title: string;
  icon: React.ReactNode;
  items: CategoryItem[];
  isActive: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (categoryId: string, itemId: string) => void;
}

const productCategories = [
  {
    id: 'plywood',
    title: 'Plywood',
    icon: <Layers className="w-5 h-5" />,
    items: [
      { id: 'architectural', name: 'Architectural' },
      { id: 'marine', name: 'Marine' },
      { id: 'furniture', name: 'Furniture' },
      { id: 'decorative', name: 'Decorative' },
      { id: 'structural', name: 'Structural' }
    ]
  },
  {
    id: 'doors',
    title: 'Doors',
    icon: <DoorClosed className="w-5 h-5" />,
    items: [
      { id: 'wooden', name: 'Wooden Doors' },
      { id: 'flush', name: 'Flush Doors' },
      { id: 'decorative', name: 'Decorative Doors' },
      { id: 'designer', name: 'Designer Doors' }
    ]
  },
  {
    id: 'laminates',
    title: 'Laminates',
    icon: <Pencil className="w-5 h-5" />,
    items: [
      { id: 'decorative', name: 'Decorative Laminates' },
      { id: 'textured', name: 'Textured Laminates' },
      { id: 'digital', name: 'Digital Laminates' },
      { id: 'solid', name: 'Solid Color Laminates' }
    ]
  },
  {
    id: 'favicol',
    title: 'Favicol',
    icon: <Package className="w-5 h-5" />,
    items: [
      { id: 'wood', name: 'Wood Adhesive' },
      { id: 'pvc', name: 'PVC Adhesive' },
      { id: 'synthetic', name: 'Synthetic Adhesive' }
    ]
  },
  {
    id: 'mdf',
    title: 'MDF',
    icon: <Box className="w-5 h-5" />,
    items: [
      { id: 'plain', name: 'Plain MDF' },
      { id: 'veneered', name: 'Veneered MDF' },
      { id: 'moisture', name: 'Moisture Resistant MDF' },
      { id: 'fire', name: 'Fire Retardant MDF' }
    ]
  },
  {
    id: 'bisonpanel',
    title: 'Bison Panel',
    icon: <Layers className="w-5 h-5" />,
    items: [
      { id: 'plain', name: 'Plain Bison Panel' },
      { id: 'pre', name: 'Pre-laminated Bison Panel' }
    ]
  },
  {
    id: 'flexi',
    title: 'Flexi',
    icon: <FileText className="w-5 h-5" />,
    items: [
      { id: 'flexi-ply', name: 'Flexi Plywood' },
      { id: 'bendable', name: 'Bendable Wood' }
    ]
  },
  {
    id: 'brands',
    title: 'Premium Brands',
    icon: <Package className="w-5 h-5" />,
    items: [
      { id: 'custom', name: 'Request Custom Products' }
    ]
  }
];

const ProductCategory: React.FC<ProductCategoryProps> = ({
  title,
  icon,
  items,
  isActive,
  isOpen,
  onToggle,
  onSelect
}) => {
  return (
    <div className="mb-2">
      <button
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 rounded-md transition-colors",
          isActive ? "bg-wood-dark/10 text-wood-dark font-medium" : "hover:bg-earth-beige/30"
        )}
      >
        <div className="flex items-center gap-3">
          <div className="text-wood-dark">
            {icon}
          </div>
          <span>{title}</span>
        </div>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-12 pr-4 py-2 space-y-1">
              {items.map((item) => (
                <motion.button
                  key={item.id}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-earth-beige/30 transition-colors"
                  onClick={() => onSelect(title.toLowerCase(), item.id)}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface ProductSidebarProps {
  onSelectCategory: (category: string, subCategory: string) => void;
  className?: string;
}

const ProductSidebar: React.FC<ProductSidebarProps> = ({ 
  onSelectCategory,
  className 
}) => {
  const [activeCategory, setActiveCategory] = useState('plywood');
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    plywood: true
  });

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
    setActiveCategory(categoryId);
  };

  const handleSelect = (categoryId: string, itemId: string) => {
    if (categoryId === 'brands' && itemId === 'custom') {
      window.location.href = '/custom-products';
      return;
    }
    onSelectCategory(categoryId, itemId);
  };

  return (
    <motion.div 
      className={cn("bg-white rounded-lg shadow-sm p-4", className)}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold mb-4 px-4">Product Categories</h3>
      <div>
        {productCategories.map((category) => (
          <ProductCategory
            key={category.id}
            title={category.title}
            icon={category.icon}
            items={category.items}
            isActive={activeCategory === category.id}
            isOpen={!!openCategories[category.id]}
            onToggle={() => toggleCategory(category.id)}
            onSelect={(categoryId, itemId) => {
              if (category.id === 'brands' && itemId === 'custom') {
                window.location.href = '/custom-products';
                return;
              }
              handleSelect(categoryId, itemId);
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProductSidebar;
