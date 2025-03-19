import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-blue-900 via-blue-800 to-primary overflow-hidden">
      {/* GenSan Seal Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/gensanseal.png" 
          alt="" 
          className="absolute opacity-30 w-[80%] md:w-[50%] h-auto top-1/2 -translate-y-1/2 left-[-15%] md:left-5"
          aria-hidden="true"
        />
      </div>
      
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: Math.random() * 100 + 10,
              height: Math.random() * 100 + 10,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              x: [0, Math.random() * 50 - 25],
              opacity: [0.1, 0],
              scale: [1, Math.random() * 0.5 + 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 text-white">
        {/* Mobile profile image (only shows on small screens) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="block md:hidden text-center mb-8"
        >
          <img 
            src="/sterling-profile.jpg" 
            alt="Sterling Sañado" 
            className="w-48 h-48 rounded-full mx-auto border-4 border-accent shadow-xl"
          />
        </motion.div>
        
        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Engineer <span className="text-accent">Sterling Sañado</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-accent mb-2"
                animate={{ 
                  textShadow: ["0px 0px 2px rgba(255,255,255,0.4)", "0px 0px 8px rgba(255,255,255,0.8)", "0px 0px 2px rgba(255,255,255,0.4)"],
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                "Walay Atik kay Otomatik!"
              </motion.h2>
              
              <h3 className="text-xl md:text-2xl">
                For Congressman, Lone District of General Santos City
              </h3>
            </motion.div>
            
            <motion.p 
              className="text-xl mb-8 text-gray-200 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Building a brighter future through leadership, innovation, and genuine public service.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link to="/platform" className="btn-primary">
                View Platform
              </Link>
              <Link to="/contact" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary">
                Join The Campaign
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Desktop profile image (only shows on medium screens and up) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-primary opacity-60 rounded-full"></div>
            <img 
              src="/sterling-profile.jpg" 
              alt="Sterling Sañado" 
              className="w-full h-auto rounded-full relative z-10"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center items-start p-2">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 