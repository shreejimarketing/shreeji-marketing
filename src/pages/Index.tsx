import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-gray-900 to-wood-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/plywood-hero.jpg')",
            backgroundPosition: "center 40%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-wood-dark/30" />

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold leading-tight text-shadow mb-6"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.span
                  className="block text-gradient"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Premium Quality
                </motion.span>
                <motion.span
                  className="block text-earth-beige"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  Plywood Solutions
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-earth-beige/90 mb-8 max-w-2xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Exceptional craftsmanship meets innovative design in our premium
              plywood products.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Link
                to="/products"
                className="bg-wood-dark hover:bg-wood-dark/90 text-white px-8 py-3 rounded hover-lift inline-flex items-center justify-center"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded hover-lift inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>

        <ScrollIndicator targetId="features" />
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 bg-gradient-to-br from-earth-beige to-earth-tan/70"
      >
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Why Choose{" "}
              <span className="text-wood-dark">Shreeji Marketing</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <AnimatedSection
                key={feature.title}
                delay={index * 200}
                className="bg-white rounded-lg p-8 shadow-sm"
              >
                <div className="text-wood-dark mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-earth-tan">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-white to-earth-beige/50">
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center opacity-20 md:opacity-100"
          style={{ backgroundImage: "url('/workshop.jpg')" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-right" className="md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="block">Quality excellence</span>
                <span className="block text-wood-dark">since 2007</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Shreeji Marketing began with a simple vision: to sell the finest
                quality plywood that meets the demands of modern design while
                honoring traditional craftsmanship.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, we supply premium plywood products to architects,
                designers, and craftsmen worldwide, helping bring their creative
                visions to life.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center text-wood-dark font-medium group"
              >
                <span className="border-b border-transparent group-hover:border-wood-dark transition-all">
                  Discover our products
                </span>
                <ArrowRight className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
            <div className="hidden md:block" />{" "}
            {/* Spacer for right column with background image */}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-gradient-to-br from-earth-tan/30 to-wood-light/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular plywood solutions, selected for their
              exceptional quality and versatility.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <AnimatedSection
                key={product.id}
                delay={index * 200}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md hover-lift"
              >
                <div className="aspect-[4/3] w-full relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                    style={{ backgroundImage: `url(${product.imageUrl})` }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-wood-dark mb-2">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <Link
                    to={`/products/${product.id}`}
                    className="inline-flex items-center text-wood-dark font-medium group"
                  >
                    <span className="border-b border-transparent group-hover:border-wood-dark transition-all">
                      View Details
                    </span>
                    <ArrowRight className="ml-1 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link
              to="/products"
              className="bg-wood-dark hover:bg-wood-dark/90 text-white px-8 py-3 rounded hover-lift inline-flex items-center justify-center"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-earth-brown/90 to-wood-dark text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Trusted by professionals and craftsmen worldwide.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={testimonial.name}
                delay={index * 200}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-earth-beige/30 flex items-center justify-center text-earth-beige font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/70 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Features data
const features = [
  {
    title: "Premium Quality",
    description:
      "Our plywood is crafted from the finest materials, ensuring durability and a superior finish for all your projects.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Sustainable Sourcing",
    description:
      "We are committed to environmentally responsible forestry practices, using only sustainably sourced wood.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "Expert Craftsmanship",
    description:
      "Our team of skilled artisans brings decades of experience to create plywood that meets the highest standards.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
];

// Featured products data
const featuredProducts = [
  {
    id: 1,
    title: "Century Plywood",
    description:
      "Premium grade century plywood perfect for high-end architectural applications.",
    imageUrl: "/product-birch.jpg",
  },
  {
    id: 2,
    title: "Marine Grade Plywood",
    description:
      "Specially treated plywood designed for marine environments and outdoor use.",
    imageUrl: "/product-marine.jpg",
  },
  {
    id: 3,
    title: "Designer Walnut Veneer",
    description:
      "Luxury walnut veneered plywood for premium furniture and interior design.",
    imageUrl: "/product-walnut.jpg",
  },
];

// Testimonials data
const testimonials = [
  {
    quote:
      "Shreeji Marketing provided us with exactly the quality of plywood we needed for our boutique hotel project. Their attention to quality is unmatched.",
    name: "Niraj Chopra",
    role: "Interior Designer",
  },
  {
    quote:
      "Working with sustainable materials was important for our eco-friendly cafe. Shreeji Marketing delivered not only on sustainability but also on best Material.",
    name: "Yash Rathod",
    role: "Architect",
  },
  {
    quote:
      "As a furniture maker, the quality of plywood and other materials are crucial to my work. Shreeji Marketing consistently provides the best materials with perfect finishes.",
    name: "Jiya Patel",
    role: "Customer",
  },
];

export default Index;
