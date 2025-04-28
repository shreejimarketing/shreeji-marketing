
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const CustomProducts: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="relative pt-32 pb-20 bg-earth-brown">
        <div className="absolute inset-0 bg-plywood-texture bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Custom Products</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Can't find what you're looking for? Let us help you source the perfect product.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-earth-beige/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-right">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-wood-dark">Premium Brands We Work With</h2>
                <p className="text-muted-foreground">
                  We partner with leading manufacturers countrywide to bring you the highest quality wood products.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {['Century Ply', 'Green Ply', 'Duro Ply', 'Kitply','Other Famous Brands'].map((brand) => (
                    <motion.div
                      key={brand}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white p-6 rounded-lg shadow-sm text-center"
                    >
                      <span className="font-medium text-wood-dark">{brand}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-bold text-wood-dark mb-6">Contact Our Experts</h3>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-lg bg-earth-beige/30"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-6 h-6 text-wood-dark" />
                  <div>
                    <p className="font-medium text-wood-dark">Call Us</p>
                    <p className="text-muted-foreground">+91 XXX XXX XXXX</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-lg bg-earth-beige/30"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-6 h-6 text-wood-dark" />
                  <div>
                    <p className="font-medium text-wood-dark">Email Us</p>
                    <p className="text-muted-foreground">info@Shreeji Marketing.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-lg bg-earth-beige/30"
                  whileHover={{ x: 5 }}
                >
                  <FileText className="w-6 h-6 text-wood-dark" />
                  <div>
                    <p className="font-medium text-wood-dark">Send Requirements</p>
                    <p className="text-muted-foreground">Share your specifications</p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
            
          </div>
          <a 
  href="https://wa.me/919825748990" 
  target="_blank" 
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16.8 14.5c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.8.2-.2.3-.9 1-1.1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.5.1-.7.2-.2.3-.4.5-.6.2-.2.3-.4.5-.7.2-.3.1-.5 0-.7-.1-.2-.8-2-1.1-2.7-.3-.8-.7-.7-1-.7h-.9c-.3 0-.7.1-1 .5-.3.3-1.3 1.3-1.3 3.2 0 1.8 1.3 3.5 1.5 3.8.2.3 2.6 4 6.3 5.4.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.1-.3-.2-.6-.4z"/>
    <path d="M12 2C6.5 2 2 6.5 2 12c0 2 .5 3.8 1.5 5.4L2 22l4.8-1.5C8.2 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.7 0-3.4-.5-4.9-1.4l-.3-.2-2.8.9.9-2.7-.2-.3C4.5 15.4 4 13.7 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"/>
  </svg>
</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomProducts;
