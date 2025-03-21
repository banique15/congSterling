import { motion } from 'framer-motion';
import { FaUserGraduate, FaBriefcase, FaMedal, FaHandshake } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import AdBanner from '../components/AdBanner';

const AboutPage = () => {
  // Timeline data
  const timelineData = [
    {
      year: '2015-Present',
      title: 'Engineering Consultant',
      description: 'Providing expert engineering solutions to various sectors',
      icon: <FaBriefcase />,
    },
    {
      year: '2013-2015',
      title: 'Community Development Leader',
      description: 'Led initiatives to improve infrastructure in rural areas',
      icon: <FaHandshake />,
    },
    {
      year: '2010-2013',
      title: "Master's in Civil Engineering",
      description: 'Specialized in sustainable urban development',
      icon: <FaUserGraduate />,
    },
    {
      year: '2006-2010',
      title: "Bachelor's in Engineering",
      description: 'Graduated with honors from University of the Philippines',
      icon: <FaUserGraduate />,
    },
  ];

  return (
    <>
      <PageBanner 
        title="About Sterling Sañado" 
        subtitle="A dedicated leader with a vision for a better General Santos City" 
      />
      
      <AdBanner />

      {/* Biography Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
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
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-primary">Biography</span>
              </h2>
              <p className="text-gray-700 mb-4">
                Engineer Sterling Ascaño Sañado was born and raised in General Santos City, where 
                he witnessed firsthand the challenges and opportunities facing our community.
              </p>
              <p className="text-gray-700 mb-4">
                After earning his engineering degree with honors, Sterling dedicated his career to
                implementing sustainable solutions in infrastructure development and community building.
              </p>
              <p className="text-gray-700 mb-4">
                His extensive experience in both the public and private sectors has equipped him
                with a unique perspective on how to effectively address the needs of our district
                while promoting economic growth and environmental responsibility.
              </p>
              <p className="text-gray-700">
                As a family man and active community member, Sterling understands the importance of
                creating policies that benefit all citizens, from young families to senior residents.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section bg-gray-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              Professional <span className="text-primary">Journey</span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              A timeline of Sterling's educational background and professional experience
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
            
            {/* Timeline items */}
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <span className="text-gray-500 block mb-2">{item.year}</span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full">
                    {item.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              The principles that guide Sterling's leadership and decision-making
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'Honesty and transparency in all actions and decisions',
                icon: <FaMedal className="text-4xl text-yellow-500 mb-4" />,
              },
              {
                title: 'Service',
                description: 'Putting the needs of the community above all else',
                icon: <FaHandshake className="text-4xl text-green-500 mb-4" />,
              },
              {
                title: 'Innovation',
                description: 'Finding creative solutions to complex problems',
                icon: <FaBriefcase className="text-4xl text-blue-500 mb-4" />,
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage; 