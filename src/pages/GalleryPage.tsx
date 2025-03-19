import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaTimes } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<null | GalleryImage>(null);

  // Mock gallery data
  interface GalleryImage {
    id: number;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    date: string;
  }

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      title: 'Community Meeting',
      description: 'Engineer Sterling Sañado discussing development plans with community leaders',
      category: 'events',
      imageUrl: '/gallery-1.jpg',
      date: 'March 15, 2023',
    },
    {
      id: 2,
      title: 'Healthcare Initiative Launch',
      description: 'Launching new healthcare programs for underserved communities',
      category: 'healthcare',
      imageUrl: '/gallery-2.jpg',
      date: 'April 22, 2023',
    },
    {
      id: 3,
      title: 'School Visit',
      description: 'Meeting with students and teachers at local schools',
      category: 'education',
      imageUrl: '/gallery-3.jpg',
      date: 'May 10, 2023',
    },
    {
      id: 4,
      title: 'Infrastructure Project',
      description: 'Inspecting progress on road development projects',
      category: 'infrastructure',
      imageUrl: '/gallery-4.jpg',
      date: 'June 5, 2023',
    },
    {
      id: 5,
      title: 'Town Hall Meeting',
      description: 'Addressing citizen concerns at a public town hall',
      category: 'events',
      imageUrl: '/gallery-5.jpg',
      date: 'July 18, 2023',
    },
    {
      id: 6,
      title: 'Environmental Initiative',
      description: 'Tree planting activity with local environmental groups',
      category: 'environment',
      imageUrl: '/gallery-6.jpg',
      date: 'August 12, 2023',
    },
    {
      id: 7,
      title: 'Youth Leadership Program',
      description: 'Launching leadership development programs for youth',
      category: 'education',
      imageUrl: '/gallery-7.jpg',
      date: 'September 8, 2023',
    },
    {
      id: 8,
      title: 'Business Forum',
      description: 'Meeting with local entrepreneurs and business leaders',
      category: 'economy',
      imageUrl: '/gallery-8.jpg',
      date: 'October 25, 2023',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'events', name: 'Events' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'education', name: 'Education' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'environment', name: 'Environment' },
    { id: 'economy', name: 'Economy' },
  ];

  // Filter images based on category and search query
  const filteredImages = galleryImages.filter((image) => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      image.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const handleOpenImage = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <PageBanner 
        title="Photo Gallery" 
        subtitle="A visual journey of Engineer Sterling Sañado's campaign and community work" 
      />

      {/* Gallery Section */}
      <section className="section bg-white">
        <div className="container">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-6">
              {/* Search */}
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search photos..."
                  className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handleOpenImage(image)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{image.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{image.date}</span>
                    <span className="px-3 py-1 bg-gray-100 text-primary text-xs rounded-full">
                      {categories.find(cat => cat.id === image.category)?.name || image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-gray-500 text-lg mb-4">No photos found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={handleCloseImage}
        >
          <div 
            className="relative max-w-6xl w-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 z-10 bg-white rounded-full p-2 text-gray-700 hover:text-primary"
              onClick={handleCloseImage}
              title="Close image"
              aria-label="Close image"
            >
              <FaTimes size={24} />
            </button>
            <div className="grid md:grid-cols-2">
              <div className="h-96 md:h-auto">
                <img 
                  src={selectedImage.imageUrl} 
                  alt={selectedImage.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{selectedImage.title}</h3>
                <p className="text-gray-700 mb-6">{selectedImage.description}</p>
                <div className="mb-6">
                  <span className="block text-gray-500 mb-2">Date:</span>
                  <span>{selectedImage.date}</span>
                </div>
                <div>
                  <span className="block text-gray-500 mb-2">Category:</span>
                  <span className="px-3 py-1 bg-gray-100 text-primary rounded-full">
                    {categories.find(cat => cat.id === selectedImage.category)?.name || selectedImage.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default GalleryPage; 