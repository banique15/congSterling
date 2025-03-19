import React from 'react';
import { motion } from 'framer-motion';

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle }) => {
  return (
    <section className="relative py-40 bg-primary text-white">
      {/* Banner Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/gensanbanner.png" 
          alt="General Santos City" 
          className="absolute w-full h-full object-cover" 
        />
        <div className="absolute w-full h-full bg-blue-900 opacity-70"></div>
        <div className="absolute w-full h-full bg-gradient-to-b from-primary/50 to-blue-900/80"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-200 mb-6">
              {subtitle}
            </p>
          )}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-4"
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-accent tracking-wide"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                textShadow: ["0px 0px 2px rgba(255,255,255,0.4)", "0px 0px 8px rgba(255,255,255,0.8)", "0px 0px 2px rgba(255,255,255,0.4)"],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              "Walay Atik kay Otomatik!"
            </motion.h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageBanner; 