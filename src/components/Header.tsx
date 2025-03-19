import React from 'react';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Platform', path: '/platform' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-3' 
          : 'bg-gradient-to-r from-blue-900/80 to-primary/80 backdrop-blur-md py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <img 
                src="/sterling-profile.jpg" 
                alt="Sterling Sañado" 
                className="w-12 h-12 rounded-full mr-3 border-2 border-primary shadow-md transition-all duration-300 group-hover:shadow-primary/50"
              />
              <motion.div 
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-primary opacity-0 group-hover:opacity-30 -z-10 transition-opacity duration-300"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <span className={`text-2xl font-serif font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                Sterling <span className="text-accent">Sañado</span>
              </span>
              <div className="flex flex-col">
                <span className={`block text-xs font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-gray-200'
                }`}>For Congressman, General Santos City</span>
                <span className={`block text-xs italic font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-accent' : 'text-accent'
                }`}>"Walay Atik kay Otomatik!"</span>
              </div>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => 
                `relative font-medium px-2 py-1 rounded-md transition-all duration-300 ${
                  isScrolled
                    ? `${isActive ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary hover:bg-gray-100'}`
                    : `${isActive ? 'text-white font-semibold' : 'text-gray-200 hover:text-white hover:bg-white/10'}`
                }`
              }
            >
              {({isActive}) => (
                <>
                  {item.name}
                  {isActive && (
                    <motion.div
                      className={`absolute bottom-[-2px] left-0 w-full h-[2px] ${
                        isScrolled ? 'bg-primary' : 'bg-white'
                      }`}
                      layoutId="underline"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action Button (Desktop) */}
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="btn-accent text-sm px-4 py-2 shadow-md hover:shadow-lg"
          >
            Join Campaign
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          type="button"
          onClick={toggleMobileMenu} 
          className={`md:hidden p-2 rounded-md focus:outline-none transition-colors duration-300 ${
            isScrolled ? 'bg-gray-100/80' : 'bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <FaTimes size={20} className={isScrolled ? 'text-gray-700' : 'text-white'} />
          ) : (
            <FaBars size={20} className={isScrolled ? 'text-gray-700' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container py-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `block py-3 px-4 text-gray-700 rounded-md transition-colors ${
                    isActive 
                      ? 'bg-gray-100 text-primary font-medium border-l-4 border-primary' 
                      : 'hover:bg-gray-50 hover:text-primary hover:border-l-4 hover:border-gray-200'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-2 pb-4 px-4">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-accent w-full text-center py-3"
              >
                Join Our Campaign
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 