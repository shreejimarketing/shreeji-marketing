import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Info, Clipboard, CreditCard, Truck } from 'lucide-react';

const termsSections = [
  {
    Icon: Info,
    title: 'Acceptance of Terms',
    text: 'By accessing or using our website, you acknowledge and agree to these terms and conditions.',
    items: [],
    color: 'bg-wood-light/30',
  },
  {
    Icon: Clipboard,
    title: 'Products & Services',
    text: 'We aim for accuracy but reserve the right to:',
    items: [
      'Modify or discontinue any product without notice',
      'Limit order quantities per customer',
      'Refuse service to anyone at our discretion',
    ],
    color: 'bg-wood-medium/30',
  },
  {
    Icon: CreditCard,
    title: 'Ordering & Payment',
    text: 'When you place an order, you agree to:',
    items: [
      'Provide complete and accurate billing info',
      'Pay all applicable charges at checkout',
      'Abide by our payment verification processes',
    ],
    color: 'bg-wood-dark/30',
  },
  {
    Icon: Truck,
    title: 'Shipping & Delivery',
    text: 'We’ll get it to you as quickly as we can, but:',
    items: [
      'Delivery dates are estimates only',
      'We’re not liable for delays outside our control',
      'Shipping charges are calculated at checkout',
    ],
    color: 'bg-wood-accent/30',
  },
];

const TermsOfService: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-earth-beige">
    <Navbar />

    <section className="relative pt-40 pb-24 bg-gradient-to-br from-wood-light to-wood-dark overflow-hidden">
      <div className="absolute inset-0 bg-[url('/plywood-texture.jpg')] bg-cover bg-center opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6">
          Terms of Service
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Please read these terms carefully before using our site.
        </p>
      </motion.div>
    </section>

    <section className="py-20 bg-earth-beige/50 relative overflow-hidden">
      {/* decorative circles */}
      <div className="absolute rounded-full bg-wood-accent/10 w-64 h-64 -top-16 -left-16" />
      <div className="absolute rounded-full bg-wood-dark/10 w-48 h-48 -bottom-12 -right-12" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-8 md:grid-cols-2">
          {termsSections.map(({ Icon, title, text, items, color }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className={`p-6 rounded-2xl shadow-lg backdrop-blur-sm ${color}`}
            >
              <div className="flex items-center mb-4">
                <Icon className="w-8 h-8 text-wood-dark mr-3" />
                <h3 className="text-2xl font-semibold text-wood-dark">{title}</h3>
              </div>
              <p className="mb-3 text-earth-dark">{text}</p>
              {items.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-earth-dark">
                  {items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default TermsOfService;
