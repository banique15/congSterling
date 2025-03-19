import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheck, FaLightbulb, FaHospital, FaGraduationCap } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';

const HomePage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const features = [
    {
      icon: <FaLightbulb size={40} className="text-yellow-500" />,
      title: 'Infrastructure Development',
      description: 'Modernizing infrastructure to improve quality of life and boost economic growth.',
    },
    {
      icon: <FaHospital size={40} className="text-green-500" />,
      title: 'Healthcare for All',
      description: 'Ensuring accessible and affordable healthcare services for every citizen.',
    },
    {
      icon: <FaGraduationCap size={40} className="text-blue-500" />,
      title: 'Quality Education',
      description: 'Investing in education to prepare our youth for the challenges of tomorrow.',
    },
  ];

  return (
    <>
      <HeroSection />

      {/* About Candidate Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet <span className="text-primary">Sterling Sañado</span>
              </h2>
              <p className="text-gray-700 mb-6">
                Engineer Sterling Ascaño Sañado is a dedicated public servant committed to transforming
                General Santos City into a thriving, progressive community where every citizen can prosper.
              </p>
              <p className="text-gray-700 mb-6">
                With his background in engineering and years of community service, Sterling brings practical 
                solutions to complex problems facing our district.
              </p>
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Key Qualifications:</h3>
                <ul className="space-y-2">
                  {['Professional Engineer', 'Community Leader', 'Business Innovator', 'Education Advocate'].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <FaCheck className="text-green-500 mr-2" /> {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <Link to="/about" className="btn-primary inline-block">
                Learn More
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="/sterling-profile.jpg" 
                alt="Sterling Sañado" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section bg-gray-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Vision for <span className="text-primary">General Santos City</span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Together, we can build a brighter future for all citizens through these key initiatives
              that address our community's most pressing needs.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/platform" className="btn-primary inline-block">
              View Full Platform
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Campaign
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg">
              Be part of the movement to transform General Santos City. 
              Together, we can make a difference in our community.
            </p>
            <Link 
              to="/contact" 
              className="btn bg-white text-primary hover:bg-gray-100 inline-block"
            >
              Get Involved
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage; 