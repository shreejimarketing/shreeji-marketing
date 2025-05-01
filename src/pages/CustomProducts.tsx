import React from "react";
import { motion } from "framer-motion";
import { FileText, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const CustomProducts: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="relative pt-32 pb-20 bg-earth-brown">
        <div className="absolute inset-0 bg-plywood-texture bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Custom Products
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Can't find what you're looking for? Let us help you source the
              perfect product.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-earth-beige/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-right">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-wood-dark">
                  Premium Brands We Work With
                </h2>
                <p className="text-muted-foreground">
                  We partner with leading manufacturers countrywide to bring you
                  the highest quality wood products.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    "Century Ply",
                    "Green Ply",
                    "Duro Ply",
                    "Kitply",
                    "Other Famous Brands",
                  ].map((brand) => (
                    <motion.div
                      key={brand}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white p-6 rounded-lg shadow-sm text-center"
                    >
                      <span className="font-medium text-wood-dark">
                        {brand}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection
              animation="slide-left"
              className="bg-white rounded-lg shadow-sm p-8"
            >
              <h3 className="text-2xl font-bold text-wood-dark mb-6">
                Contact Our Experts
              </h3>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg bg-earth-beige/30"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-6 h-6 text-wood-dark" />
                  <div>
                    <p className="font-medium text-wood-dark">Call Us</p>
                    <p className="text-muted-foreground">+91 982 574 8990</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg bg-earth-beige/30"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-6 h-6 text-wood-dark" />
                  <div>
                    <p className="font-medium text-wood-dark">Email Us</p>
                    <p className="text-muted-foreground">
                      shreejimarketing6021@gmail.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg bg-earth-beige/30"
                  whileHover={{ x: 5 }}
                >
                  <FileText className="w-6 h-6 text-wood-dark" />
                  <div>
                    <p className="font-medium text-wood-dark">
                      Send Requirements
                    </p>
                    <p className="text-muted-foreground">
                      Share your specifications
                    </p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomProducts;
