
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Loader } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here we would integrate with a backend SMTP service
      // This is a simulation for the frontend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // SMTP service would be implemented on the backend with code like:
      /*
      const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 587,
        secure: false,
        auth: {
          user: 'username',
          pass: 'password'
        }
      });
      
      await transporter.sendMail({
        from: formData.email,
        to: 'contact@Shreeji Marketing.com',
        subject: `Contact Form: ${formData.subject || 'New Message'}`,
        text: `
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Message: ${formData.message}
        `
      });
      */
      
      toast({
        title: "Message Sent Successfully",
        description: "Thank you! We've received your message and will contact you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 0 2px rgba(120, 90, 60, 0.1)" },
    blur: { scale: 1, boxShadow: "none" }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
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
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner with parallax effect */}
      <motion.section 
        className="relative pt-32 pb-20 bg-earth-brown"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="absolute inset-0 bg-plywood-texture bg-cover bg-center opacity-10"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="slide-right">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Have questions or need a quote? We're here to help with all your wood product needs.
            </p>
          </AnimatedSection>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="bg-white rounded-lg shadow-md p-8 border-t-4 border-wood-dark"
                variants={itemVariants}
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Send className="mr-2 w-5 h-5 text-wood-dark" />
                  <span>Send Us a Message</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <motion.input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          whileFocus="focus"
                          whileTap="focus"
                          variants={inputVariants}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-wood-dark/30 transition-all ${
                            formErrors.name ? 'border-red-500' : 'border-input'
                          }`}
                          placeholder="John Smith"
                        />
                        {formErrors.name && (
                          <motion.p 
                            className="text-red-500 text-xs mt-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {formErrors.name}
                          </motion.p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <motion.input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          whileFocus="focus"
                          whileTap="focus"
                          variants={inputVariants}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-wood-dark/30 transition-all ${
                            formErrors.email ? 'border-red-500' : 'border-input'
                          }`}
                          placeholder="john@example.com"
                        />
                        {formErrors.email && (
                          <motion.p 
                            className="text-red-500 text-xs mt-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {formErrors.email}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium">
                        Phone Number
                      </label>
                      <motion.input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        whileFocus="focus"
                        whileTap="focus"
                        variants={inputVariants}
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-wood-dark/30 transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium">
                        Subject
                      </label>
                      <motion.select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        whileFocus="focus"
                        whileTap="focus"
                        variants={inputVariants}
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-wood-dark/30 transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="Product Inquiry">Product Inquiry</option>
                        <option value="Quote Request">Quote Request</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Other">Other</option>
                      </motion.select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <motion.textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        whileFocus="focus"
                        whileTap="focus"
                        variants={inputVariants}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-wood-dark/30 transition-all ${
                          formErrors.message ? 'border-red-500' : 'border-input'
                        }`}
                        placeholder="How can we help you?"
                      ></motion.textarea>
                      {formErrors.message && (
                        <motion.p 
                          className="text-red-500 text-xs mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {formErrors.message}
                        </motion.p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-wood-dark hover:bg-wood-dark/90 text-white px-6 py-3 rounded-md hover-lift transition-all flex items-center justify-center w-full md:w-auto"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </motion.div>

            {/* Contact Information */}
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="bg-earth-beige rounded-lg shadow-md p-8 h-full border-t-4 border-wood-light">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <motion.div 
                  className="space-y-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div 
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <div className="p-3 bg-wood-light/30 rounded-full mr-4 shadow-sm">
                      <MapPin className="text-wood-dark w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Our Location</h3>
                      <address className="not-italic text-muted-foreground">
                        B/10 Highway Estate,<br />
                        Oppo. Kiran Motors,<br />
                        Sarkhej-Sanand Road,<br />
                        Ahmedabad, 382110.
                      </address>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <div className="p-3 bg-wood-light/30 rounded-full mr-4 shadow-sm">
                      <Phone className="text-wood-dark w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+15551234567" className="hover:text-wood-dark transition-colors">
                           (+91) 9825-7489-90
                        </a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Monday to Saturday, 9am - 7pm PT
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <div className="p-3 bg-wood-light/30 rounded-full mr-4 shadow-sm">
                      <Mail className="text-wood-dark w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:contact@Shreeji Marketing.com" className="hover:text-wood-dark transition-colors">
                          shreejimarketing6021@gmail.com
                        </a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        We'll respond as soon as possible or you can directly call us.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="mt-8 pt-6 border-t border-earth-beige/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <h3 className="font-medium mb-3">Business Hours</h3>
                  <dl className="space-y-1">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Monday - Saturday</dt>
                      <dd className="font-medium">9:00 AM - 7:00 PM</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Sunday</dt>
                      <dd className="font-medium">Closed</dd>
                    </div>
                  </dl>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map with subtle animation */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <motion.div 
              className="bg-white rounded-lg shadow-md p-4 h-[400px] overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <iframe 
                title="Shreeji Marketing Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.969674105671!2d72.48252587476924!3d22.988142617613242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3dcccc9c2f%3A0xaf6add34813ecc2b!2sSHREEJI%20MARKETING!5e0!3m2!1sen!2sin!4v1745679156426!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
