import React, { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import AnimatedSection from '@/components/AnimatedSection';
import ProductSidebar from '@/components/ProductSidebar';
import { cn } from '@/lib/utils';

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  subCategory: string;
  woodType: string;
  imageUrl: string;
  thickness: string;
  finish: string;
  grade: string;
}

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('plywood');
  const [selectedSubCategory, setSelectedSubCategory] = useState('all');
  const [selectedWoodType, setSelectedWoodType] = useState('All Types');
  const [showFilters, setShowFilters] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = 
      selectedCategory === product.category && 
      (selectedSubCategory === 'all' || product.subCategory === selectedSubCategory);
    
    const typeMatch = 
      selectedWoodType === 'All Types' || 
      product.woodType === selectedWoodType;
    
    return categoryMatch && typeMatch;
  });

  const handleCategorySelect = (category: string, subCategory: string) => {
    setSelectedCategory(category);
    setSelectedSubCategory(subCategory === 'all' ? 'all' : subCategory);
    setShowFilters(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="  min-h-screen flex flex-col">
      <Navbar />

      <section 
        className="relative pt-32 pb-20 bg-gradient-to-br from-earth-brown to-wood-dark overflow-hidden"
      >
        <div 
          className="  absolute inset-0 bg-plywood-texture bg-cover bg-center opacity-20" 
          style={{
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        />
        
        <motion.div  
          className=" container mx-auto px-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <AnimatedSection >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Discover our comprehensive range of premium wood solutions for any project.
            </p>
          </AnimatedSection>
        </motion.div>
      </section>

      <section className="py-16 bg-earth-beige/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <AnimatedSection className="space-y-2">
              <motion.h2 
                className="text-2xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Collection
              </motion.h2>
            </AnimatedSection>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded shadow-sm hover:shadow md:hidden"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="hidden md:block w-72 shrink-0">
              <ProductSidebar 
                onSelectCategory={handleCategorySelect}
                className="sticky top-24"
              />
            </div>

            <div className={`
              fixed inset-0 bg-black/50 z-50 md:hidden transition-opacity duration-300
              ${showFilters ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}>
              <motion.div 
                className="fixed bottom-0 left-0 right-0 bg-white rounded-t-xl p-6"
                initial={{ y: '100%' }}
                animate={{ y: showFilters ? 0 : '100%' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">Product Categories</h3>
                  <button 
                    onClick={() => setShowFilters(false)}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    &times;
                  </button>
                </div>
                
                <div className="max-h-[60vh] overflow-y-auto pb-8">
                  <ProductSidebar onSelectCategory={handleCategorySelect} />
                </div>
              </motion.div>
            </div>

            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredProducts.map((product) => (
                    <motion.div key={product.id} variants={itemVariants}>
                      <ProductCard
                        id={product.id}
                        title={product.name}
                        description={product.description}
                        imageUrl={product.imageUrl}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  className="bg-white rounded-lg p-8 text-center shadow-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try changing your filter selections to find products.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedSubCategory('all');
                      setSelectedWoodType('All Types');
                    }}
                    className="text-wood-dark hover:underline font-medium"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const allProducts: Product[] = [
  {
    id: 1,
    name: "Premium Birch Plywood",
    description: "High-quality architectural birch plywood with smooth surface and consistent layers.",
    category: "plywood",
    subCategory: "architectural",
    woodType: "Birch",
    imageUrl: "/product-birch.jpg",
    thickness: "18mm",
    finish: "Sanded",
    grade: "BB/BB"
  },
  {
    id: 2,
    name: "Marine Plywood",
    description: "Water-resistant plywood ideal for marine applications and outdoor furniture.",
    category: "plywood",
    subCategory: "marine",
    woodType: "Pine",
    imageUrl: "/product-marine.jpg",
    thickness: "12mm",
    finish: "Sealed",
    grade: "A/B"
  },
  {
    id: 3,
    name: "Furniture Grade Oak Plywood",
    description: "Premium oak veneered plywood perfect for high-end furniture production.",
    category: "plywood",
    subCategory: "furniture",
    woodType: "Oak",
    imageUrl: "/product-oak.jpg",
    thickness: "18mm",
    finish: "Sanded",
    grade: "A/A"
  },
  {
    id: 4,
    name: "Decorative Walnut Plywood",
    description: "Luxury walnut veneered plywood for premium furniture and interior finishing.",
    category: "plywood",
    subCategory: "decorative",
    woodType: "Walnut",
    imageUrl: "/product-walnut.jpg",
    thickness: "6mm",
    finish: "Polished",
    grade: "A/A"
  },
  {
    id: 5,
    name: "Structural Plywood",
    description: "Heavy-duty plywood designed for structural applications and construction.",
    category: "plywood",
    subCategory: "structural",
    woodType: "Pine",
    imageUrl: "/product-structural.jpg",
    thickness: "24mm",
    finish: "Rough",
    grade: "C/C"
  },
  {
    id: 6,
    name: "Cherry Veneer Plywood",
    description: "Rich cherry veneered plywood ideal for cabinetry and decorative applications.",
    category: "plywood",
    subCategory: "decorative",
    woodType: "Cherry",
    imageUrl: "/product-cherry.jpg",
    thickness: "12mm",
    finish: "Polished",
    grade: "A/B"
  },
  {
    id: 7,
    name: "Maple Furniture Board",
    description: "Premium maple plywood with consistent grain pattern for furniture making.",
    category: "plywood",
    subCategory: "furniture",
    woodType: "Maple",
    imageUrl: "/product-maple.jpg",
    thickness: "18mm",
    finish: "Sanded",
    grade: "BB/BB"
  },
  {
    id: 8,
    name: "Architectural Maple Plywood",
    description: "Architectural grade maple plywood with exceptional dimensional stability.",
    category: "plywood",
    subCategory: "architectural",
    woodType: "Maple",
    imageUrl: "/product-arch-maple.jpg",
    thickness: "12mm",
    finish: "Sanded",
    grade: "A/A"
  },
  {
    id: 9,
    name: "Marine Grade Birch",
    description: "Water-resistant birch plywood for boat building and marine applications.",
    category: "plywood",
    subCategory: "marine",
    woodType: "Birch",
    imageUrl: "/product-marine-birch.jpg",
    thickness: "18mm",
    finish: "Sealed",
    grade: "AB/B"
  },
  {
    id: 10,
    name: "Classic Wooden Door",
    description: "Solid wood door with timeless design for interior use.",
    category: "doors",
    subCategory: "wooden",
    woodType: "Oak",
    imageUrl: "/product-door.jpg",
    thickness: "40mm",
    finish: "Polished",
    grade: "Premium"
  },
  {
    id: 11,
    name: "Flush Door",
    description: "Clean, minimal flush door perfect for modern interiors.",
    category: "doors",
    subCategory: "flush",
    woodType: "Pine",
    imageUrl: "/product-flush.jpg",
    thickness: "35mm",
    finish: "Laminated",
    grade: "A"
  },
  {
    id: 12,
    name: "Designer Door",
    description: "Elegantly crafted designer door with intricate patterns.",
    category: "doors",
    subCategory: "designer",
    woodType: "Teak",
    imageUrl: "/product-designer-door.jpg",
    thickness: "38mm",
    finish: "Carved",
    grade: "Premium"
  },
  {
    id: 13,
    name: "Natural Wood Laminate",
    description: "High-quality wood grain laminate for furniture and wall paneling.",
    category: "laminates",
    subCategory: "decorative",
    woodType: "Multiple",
    imageUrl: "/product-laminate.jpg",
    thickness: "1mm",
    finish: "Matte",
    grade: "Premium"
  },
  {
    id: 14,
    name: "Textured Laminate",
    description: "Textured laminate with unique patterns for distinctive furniture.",
    category: "laminates",
    subCategory: "textured",
    woodType: "Multiple",
    imageUrl: "/product-textured-laminate.jpg",
    thickness: "1.2mm",
    finish: "Textured",
    grade: "A"
  },
  {
    id: 15,
    name: "Wood Adhesive",
    description: "Strong wood adhesive for various woodworking applications.",
    category: "favicol",
    subCategory: "wood",
    woodType: "n/a",
    imageUrl: "/product-adhesive.jpg",
    thickness: "n/a",
    finish: "n/a",
    grade: "Industrial"
  },
  {
    id: 16,
    name: "Plain MDF Sheet",
    description: "Smooth, consistent MDF sheet for furniture and cabinetry.",
    category: "mdf",
    subCategory: "plain",
    woodType: "MDF",
    imageUrl: "/product-mdf.jpg",
    thickness: "12mm",
    finish: "Sanded",
    grade: "Standard"
  },
  {
    id: 17,
    name: "Bison Panel",
    description: "Durable cement bonded particle board for various construction needs.",
    category: "bisonpanel",
    subCategory: "plain",
    woodType: "n/a",
    imageUrl: "/product-bison.jpg",
    thickness: "10mm",
    finish: "Plain",
    grade: "Standard"
  },
  {
    id: 18,
    name: "Flexi Plywood",
    description: "Bendable plywood for curved surfaces and creative designs.",
    category: "flexi",
    subCategory: "flexi-ply",
    woodType: "Mixed",
    imageUrl: "/product-flexi.jpg",
    thickness: "5mm",
    finish: "Flexible",
    grade: "B"
  }
];

export default Products;
