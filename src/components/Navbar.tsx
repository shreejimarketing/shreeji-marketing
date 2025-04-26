import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Box } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'py-3 bg-gradient-to-r from-wood-dark/90 to-earth-brown/90 backdrop-blur-sm shadow-sm'
          : 'py-5 bg-gradient-to-r from-wood-dark/50 to-earth-brown/50'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-earth-beige hover:text-white transition-colors">
          <Box className="w-8 h-8" />
          <span className="text-gradient-wood">Shreeji Marketing</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-foreground p-2 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <div className={cn('w-6 h-px bg-current mb-1.5 transition-all', isMobileMenuOpen && 'rotate-45 translate-y-1.5')}></div>
          <div className={cn('w-6 h-px bg-current mb-1.5 transition-all', isMobileMenuOpen && 'opacity-0')}></div>
          <div className={cn('w-6 h-px bg-current transition-all', isMobileMenuOpen && '-rotate-45 -translate-y-1.5')}></div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-wood-light/95 to-earth-beige/95 backdrop-blur-sm shadow-md transition-all duration-300 ease-in-out',
          isMobileMenuOpen ? 'max-h-60 py-4' : 'max-h-0 py-0 overflow-hidden'
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/products" onClick={() => setIsMobileMenuOpen(false)}>Products</MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-earth-beige hover:text-white relative overflow-hidden group transition-all"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-earth-beige transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, children, onClick }) => {
  return (
    <Link
      to={to}
      className="text-foreground hover:text-wood-dark py-2 block"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
