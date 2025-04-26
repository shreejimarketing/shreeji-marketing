import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Info, Clipboard, Shield, RefreshCcw } from 'lucide-react';

const policies = [
  {
    Icon: Info,
    title: 'Information We Collect',
    text: 'We gather only what’s needed to serve you better, including when you:',
    items: [
      'Create an account or place an order',
      'Contact our support team',
      'Subscribe to our newsletter',
    ],
    color: 'bg-wood-light/30',
  },
  {
    Icon: Clipboard,
    title: 'How We Use Your Data',
    text: 'Your data fuels our craftsmanship. We use it to:',
    items: [
      'Process & fulfill your orders',
      'Keep you updated on delivery',
      'Share offers (with your OK)',
    ],
    color: 'bg-wood-medium/30',
  },
  {
    Icon: Shield,
    title: 'Information Sharing',
    text: 'We respect your trust — we never sell your data. We only share with:',
    items: [
      'Trusted service partners',
      'Legal authorities if required',
    ],
    color: 'bg-wood-dark/30',
  },
  {
    Icon: RefreshCcw,
    title: 'Your Rights',
    text: 'You can always:',
    items: [
      'Request data access',
      'Ask for corrections',
      'Delete your account',
    ],
    color: 'bg-wood-accent/30',
  },
];

const PrivacyPolicy = () => (
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
          Privacy Policy
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Respecting your privacy is part of our craftsmanship.
        </p>
      </motion.div>
    </section>

    <section className="py-20 bg-earth-beige/50 relative overflow-hidden">
      {/* decorative circles */}
      <div className="absolute rounded-full bg-wood-accent/10 w-64 h-64 -top-16 -left-16" />
      <div className="absolute rounded-full bg-wood-dark/10 w-48 h-48 -bottom-12 -right-12" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-8 md:grid-cols-2">
          {policies.map(({ Icon, title, text, items, color }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`p-6 rounded-2xl shadow-lg backdrop-blur-sm ${color}`}
            >
              <div className="flex items-center mb-4">
                <Icon className="w-8 h-8 text-wood-dark mr-3" />
                <h3 className="text-2xl font-semibold text-wood-dark">{title}</h3>
              </div>
              <p className="mb-3 text-earth-dark">{text}</p>
              <ul className="list-disc list-inside space-y-1 text-earth-dark">
                {items.map((it, idx) => (
                  <li key={idx}>{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default PrivacyPolicy;
