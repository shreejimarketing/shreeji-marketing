
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-brown text-primary-foreground py-12 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-plywood-texture bg-cover opacity-10 bg-center"
        style={{ transform: 'scale(1.1)' }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Shreeji Marketing</h3>
            <p className="text-earth-beige/80 max-w-xs">
              Premium plywood solutions for architects, designers, and craftsmen. 
              Quality materials that inspire creativity.
            </p>
           
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav>
              <ul className="space-y-2">
                <FooterNavItem to="/">Home</FooterNavItem>
                <FooterNavItem to="/products">Products</FooterNavItem>
                <FooterNavItem to="/contact">Contact</FooterNavItem>
                <FooterNavItem to="/about">About</FooterNavItem>
              </ul>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <address className="not-italic text-earth-beige/80 space-y-2">
              <p>B/10, Highway Estate,</p>
              <p>Opp. Kiran Motors,</p>
              <p>Sarkhej-Sanand Road.</p>
              <p>shreejimarketing6021@gmail.com</p>
              <p>(+91) 9825-7489-90</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-earth-beige/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-earth-beige/60 text-sm">
            &copy; {new Date().getFullYear()} Shreeji Marketing. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-earth-beige/60 text-sm hover:text-earth-beige transition-colors">
              Privacy Policy
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterNavItemProps {
  to: string;
  children: React.ReactNode;
}

const FooterNavItem: React.FC<FooterNavItemProps> = ({ to, children }) => {
  return (
    <li>
      <Link 
        to={to} 
        className="text-earth-beige/80 hover:text-earth-beige transition-colors hover:translate-x-1 inline-block"
      >
        {children}
      </Link>
    </li>
  );
};

interface SocialIconProps {
  label: string;
  icon: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ label, icon }) => {
  return (
    <a 
      href={`https://${icon}.com`} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 rounded-full bg-earth-beige/10 hover:bg-earth-beige/20 
                flex items-center justify-center transition-all hover:translate-y-[-2px]"
    >
      <span className="text-earth-beige/80">{icon.charAt(0).toUpperCase()}</span>
    </a>
  );
};

export default Footer;
