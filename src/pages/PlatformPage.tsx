import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaHospital, FaGraduationCap, FaIndustry, FaLeaf, FaShieldAlt } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const PlatformPage = () => {
  const [activeTab, setActiveTab] = useState<string>('infrastructure');

  const platformData = {
    infrastructure: {
      title: 'Infrastructure Development',
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
      description: "Modernizing our city's infrastructure for better quality of life and economic growth.",
      points: [
        'Improve road networks and transportation systems to reduce congestion and travel time',
        'Expand reliable water supply and sanitation services across all barangays',
        'Upgrade public facilities like parks, government buildings, and community centers',
        'Implement renewable energy solutions for public infrastructure',
        'Develop disaster-resilient structures and emergency response systems',
      ],
    },
    healthcare: {
      title: 'Healthcare for All',
      icon: <FaHospital className="text-4xl text-green-500" />,
      description: 'Ensuring accessible and affordable healthcare services for every citizen.',
      points: [
        'Expand healthcare facilities and services in underserved areas',
        'Improve medical equipment and technology in public hospitals',
        'Introduce comprehensive health insurance programs for all citizens',
        'Implement preventive healthcare initiatives and regular health screenings',
        'Support mental health awareness and treatment programs',
      ],
    },
    education: {
      title: 'Quality Education',
      icon: <FaGraduationCap className="text-4xl text-blue-500" />,
      description: 'Investing in education to prepare our youth for the challenges of tomorrow.',
      points: [
        'Modernize school facilities and learning resources',
        'Provide teacher training and professional development opportunities',
        'Implement scholarship programs for deserving students',
        'Develop curriculum that focuses on critical thinking and practical skills',
        'Establish partnerships with universities and technical institutions',
      ],
    },
    economy: {
      title: 'Economic Growth',
      icon: <FaIndustry className="text-4xl text-orange-500" />,
      description: 'Creating opportunities for businesses and jobs to flourish in our community.',
      points: [
        'Support small and medium enterprises through incentives and resources',
        'Attract sustainable investments to create more jobs',
        'Develop tourism potential of General Santos City',
        'Implement skills training programs aligned with industry needs',
        'Create business-friendly policies and streamlined processes',
      ],
    },
    environment: {
      title: 'Environmental Protection',
      icon: <FaLeaf className="text-4xl text-emerald-500" />,
      description: 'Preserving our natural resources for future generations.',
      points: [
        'Implement effective waste management and recycling programs',
        'Protect watersheds and water resources from pollution and depletion',
        'Promote sustainable fishing practices to preserve marine resources',
        'Launch reforestation and urban greening initiatives',
        'Develop renewable energy projects and encourage eco-friendly practices',
      ],
    },
    safety: {
      title: 'Public Safety',
      icon: <FaShieldAlt className="text-4xl text-red-500" />,
      description: 'Ensuring a safe and secure environment for all residents.',
      points: [
        'Strengthen police presence and capabilities in all communities',
        'Implement modern crime prevention technologies',
        'Enhance emergency response systems and disaster preparedness',
        'Support drug prevention and rehabilitation programs',
        'Promote community involvement in safety initiatives',
      ],
    },
  };

  type PlatformKey = keyof typeof platformData;

  return (
    <>
      <PageBanner 
        title="Our Platform" 
        subtitle="Engineer Sterling Sañado's vision and plan for General Santos City" 
      />

      {/* Platform Introduction */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              A <span className="text-primary">Progressive Vision</span> for General Santos City
            </h2>
            <p className="text-gray-700">
              Our platform focuses on six key areas that will transform General Santos City into a 
              thriving, sustainable, and inclusive community. Each initiative is designed with the wellbeing
              of our citizens in mind, aiming to address current challenges while preparing for future growth.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.keys(platformData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeTab === key
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {platformData[key as PlatformKey].title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <div className="flex items-center mb-6">
                  {platformData[activeTab as PlatformKey].icon}
                  <h3 className="text-2xl font-bold ml-4">
                    {platformData[activeTab as PlatformKey].title}
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  {platformData[activeTab as PlatformKey].description}
                </p>
                <ul className="space-y-4">
                  {platformData[activeTab as PlatformKey].points.map((point, index) => (
                    <li key={index}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{point}</span>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={`/platform-images/${
                    activeTab === 'safety' ? 'security' : 
                    activeTab === 'environment' ? 'environmental' : 
                    activeTab === 'economy' ? 'economic' : 
                    activeTab
                  }.jpg`}
                  alt={platformData[activeTab as PlatformKey].title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-gray-100">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Support Our Vision for Change
            </h2>
            <p className="text-gray-700 mb-8">
              Together, we can transform these plans into reality. Your support and involvement
              are essential to building a better General Santos City for all.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Join Our Campaign
              </a>
              <a href="/about" className="btn bg-white text-primary border border-primary hover:bg-gray-50">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PlatformPage; 