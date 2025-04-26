
import React from 'react';
import { motion } from 'framer-motion';
import { Book, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="relative pt-32 pb-20 bg-earth-brown">
        <div className="absolute inset-0 bg-plywood-texture bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Shreeji Marketing</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Qulaity excellence in wood products since 1995
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-earth-beige/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-right">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Book className="w-8 h-8 text-wood-dark" />
                  <h2 className="text-3xl font-bold text-wood-dark">Our Story</h2>
                </div>
                <p className="text-muted-foreground">
                  Founded in 2007, Shreeji Marketing has been at the forefront of the plywood and wood products industry. 
                  Our journey began with a simple mission: to provide exceptional quality wood products while maintaining 
                  sustainable practices and supporting local communities.
                </p>
                <p className="text-muted-foreground">
                  Today, we've grown into one of the region's most trusted suppliers of premium plywood, doors, 
                  laminates, and other wood products. Our commitment to quality and customer satisfaction remains 
                  as strong as ever.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-wood-dark" />
                  <h3 className="text-2xl font-bold text-wood-dark">Our Values</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      title: "Quality First",
                      description: "We never compromise on the quality of our products"
                    },
                    {
                      title: "Sustainability",
                      description: "Committed to environmentally responsible practices"
                    },
                    {
                      title: "Customer Focus",
                      description: "Your satisfaction is our top priority"
                    },
                    {
                      title: "Innovation",
                      description: "Continuously improving our products and services"
                    }
                  ].map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-lg bg-earth-beige/30"
                    >
                      <h4 className="font-medium text-wood-dark mb-2">{value.title}</h4>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
