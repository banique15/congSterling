import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: '',
  });

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-primary" />,
      title: 'Campaign Headquarters',
      details: ['123 Main Street', 'General Santos City, Philippines', 'Open M-F 9:00 AM - 5:00 PM'],
    },
    {
      icon: <FaPhone className="text-3xl text-primary" />,
      title: 'Phone Numbers',
      details: ['Main Office: (123) 456-7890', 'Volunteer Hotline: (123) 456-7891'],
    },
    {
      icon: <FaEnvelope className="text-3xl text-primary" />,
      title: 'Email Addresses',
      details: ['info@sterlingsanado.com', 'volunteer@sterlingsanado.com'],
    },
  ];

  const socialMedia = [
    { icon: <FaFacebook size={30} />, name: 'Facebook', url: 'https://facebook.com' },
    { icon: <FaTwitter size={30} />, name: 'Twitter', url: 'https://twitter.com' },
    { icon: <FaInstagram size={30} />, name: 'Instagram', url: 'https://instagram.com' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill out all required fields.',
      });
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <>
      <PageBanner 
        title="Contact Us" 
        subtitle="We would love to hear from you. Get in touch with our team." 
      />

      {/* Contact Information */}
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
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Have questions about Engineer Sterling Sañado's platform? Want to volunteer or make a contribution?
              Contact our campaign team through any of the channels below.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg text-center"
              >
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                <ul className="space-y-2">
                  {info.details.map((detail, i) => (
                    <li key={i} className="text-gray-700">{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold mb-6">Connect on Social Media</h3>
            <div className="flex justify-center space-x-6">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={`Visit our ${social.name} page`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section bg-gray-100">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              {formStatus.submitted && formStatus.success ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6"
                >
                  <p>{formStatus.message}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formStatus.submitted && !formStatus.success && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
                      <p>{formStatus.message}</p>
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      >
                        <option value="">Select an option</option>
                        <option value="general">General Inquiry</option>
                        <option value="volunteer">Volunteer Opportunities</option>
                        <option value="donation">Campaign Donation</option>
                        <option value="event">Event Information</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="btn-primary w-full md:w-auto"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
            
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Find Us</h3>
              <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
                {/* Replace with actual map integration */}
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <p className="text-gray-600">Map Location - General Santos City, Philippines</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Campaign Section */}
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
            <button className="btn bg-white text-primary hover:bg-gray-100 inline-block">
              Volunteer Today
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage; 