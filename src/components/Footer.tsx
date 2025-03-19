import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaFacebook size={20} />, url: 'https://facebook.com' },
    { icon: <FaTwitter size={20} />, url: 'https://twitter.com' },
    { icon: <FaInstagram size={20} />, url: 'https://instagram.com' },
    { icon: <FaYoutube size={20} />, url: 'https://youtube.com' },
  ];

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Platform', path: '/platform' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-xl md:text-2xl font-bold text-accent">
            "Walay Atik kay Otomatik!"
          </h2>
        </motion.div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Sterling Sañado</h3>
              <p className="text-gray-400 mb-4">
                Candidate for Congressman in Lone District of General Santos City
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Links</h3>
              <ul className="grid grid-cols-2 gap-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <address className="not-italic text-gray-400">
                <p className="mb-2">123 Main Street</p>
                <p className="mb-2">General Santos City</p>
                <p className="mb-2">Email: info@sterlingsanado.com</p>
                <p className="mb-2">Phone: (123) 456-7890</p>
              </address>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>
            &copy; {currentYear} Sterling Sañado Campaign. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 