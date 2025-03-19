import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-lg w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-9xl font-bold text-primary mb-4"
          >
            404
          </motion.div>
          
          <h1 className="text-3xl font-bold mb-6">Page Not Found</h1>
          
          <p className="text-gray-700 mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          
          <Link 
            to="/"
            className="inline-flex items-center btn-primary"
          >
            <FaArrowLeft className="mr-2" />
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage; 