import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaTimes, FaVideo, FaFacebook } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import FacebookVideo from '../components/FacebookVideo';
import FacebookPhoto from '../components/FacebookPhoto';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<null | GalleryImage>(null);
  const [activeTab, setActiveTab] = useState<'photos' | 'videos' | 'facebook'>('photos');

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
      title: 'Prayer Rally',
      description: 'Solemn prayer rally at Plaza Heneral on March 13, 2025. Invitation extended to RIDERS\' ORGANIZATIONS for the upcoming GRAND PRAYER RALLY on March 15 supporting TATAY DIGONG and the PHILIPPINES. "SALUS POPULI EST SUPREMA LEX" - the welfare of the people is the SUPREME LAW. -Engr. Sterling Ascaño Sañado, Congressional Aspirant, Lone District of General Santos City',
      category: 'prayer',
      imageUrl: '/gallery-photos/prayer-rally.jpg',
      date: 'March 14, 2025',
    },
    {
      id: 2,
      title: 'Community Meeting',
      description: 'Engineer Sterling Sañado discussing development plans with community leaders',
      category: 'events',
      imageUrl: '/gallery-1.jpg',
      date: 'March 15, 2023',
    },
    {
      id: 3,
      title: 'Healthcare Initiative Launch',
      description: 'Engineer Sterling Sañado partnering with Red Cross to implement comprehensive healthcare programs for vulnerable communities in General Santos City, focusing on preventive care and emergency medical services.',
      category: 'healthcare',
      imageUrl: '/gallery-photos/healthcare-redcross.jpg',
      date: 'March 17, 2025',
    },
    {
      id: 4,
      title: 'School Visit',
      description: 'Meeting with students and teachers at local schools',
      category: 'education',
      imageUrl: '/gallery-3.jpg',
      date: 'May 10, 2023',
    },
    {
      id: 5,
      title: 'Infrastructure Project',
      description: 'Inspecting progress on road development projects',
      category: 'infrastructure',
      imageUrl: '/gallery-4.jpg',
      date: 'June 5, 2023',
    },
    {
      id: 6,
      title: 'Town Hall Meeting',
      description: 'Addressing citizen concerns at a public town hall',
      category: 'events',
      imageUrl: '/gallery-5.jpg',
      date: 'July 18, 2023',
    },
    {
      id: 7,
      title: 'Environmental Initiative',
      description: 'Tree planting activity with local environmental groups',
      category: 'environment',
      imageUrl: '/gallery-6.jpg',
      date: 'August 12, 2023',
    },
    {
      id: 8,
      title: 'Youth Leadership Program',
      description: 'Launching leadership development programs for youth',
      category: 'education',
      imageUrl: '/gallery-7.jpg',
      date: 'September 8, 2023',
    },
    {
      id: 9,
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
    { id: 'prayer', name: 'Prayer Rally' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'education', name: 'Education' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'environment', name: 'Environment' },
    { id: 'economy', name: 'Economy' },
  ];

  // Facebook Videos data
  const facebookVideos = [
    {
      id: 1,
      title: "JUST IN‼️ GIBOMBAHAN SILA‼️ | Underpass Project RealTalk",
      videoUrl: "https://www.facebook.com/61573018708186/videos/1300560907878036",
      description: "Congressional aspirant of Lone District of General Santos City, Engr. STERLING ASCAÑO SAÑADO nagpahayag sa iyang \"REALTALK\" views bahin sa underpass project sa crossing mabuhay-national highway! #walayatikkayotomatik #ROADTOCONG",
      date: "February 28, 2025"
    },
    {
      id: 2,
      title: "PAGPAILA: Meet Your Congressional Aspirant",
      videoUrl: "https://www.facebook.com/61573018708186/videos/1350969392574235",
      description: "An introduction to Engineer Sterling Sañado, your congressional candidate for General Santos City. Look for Option #3 on your ballot - a fresh face for change!",
      date: "February 22, 2025"
    },
    {
      id: 3,
      title: "Building Safety: Precast Fence & Parapet Walls",
      videoUrl: "https://www.facebook.com/sterling.sanado.3/videos/1462416741005880",
      description: "Engineer Sterling discusses precast fencing and highlights safety concerns with parapet walls during earthquakes, recommending aluminum composite panels instead of concrete hollow blocks to reduce weight and improve safety.",
      date: "December 2, 2023"
    },
    {
      id: 4,
      title: "Earthquake Safety Proposal",
      videoUrl: "https://www.facebook.com/sterling.sanado.3/videos/648055060854986",
      description: "Engineer Sterling discusses building safety during earthquakes and proposes legislation to prohibit covering structural elements for easier inspection after earthquakes.",
      date: "November 20, 2023"
    }
  ];
  
  // Facebook Photos data
  const facebookPhotos = [
    {
      id: 1,
      title: "Congressman Sterling Ascaño Sañado",
      photoUrl: "https://www.facebook.com/photo.php?fbid=122096453672767290&set=pb.61573018708186.-2207520000&type=3",
      description: "Tayo po ay tumululong na mula pa noon, hindi lang sa General Santos City kundi sa kahit saang parte ng Pilipinas. Hindi po pakitang tao lang ang aking mga ginagawang pagtulong. Hindi po ako mayaman, hindi rin naman mahirap. Minsan may sobra sa paghahanap buhay, ating ibinabahat sa ating kapwa. Mabuhay po tayong lahat sa Heneral Santos! #walayatikkayotomatik #ROADTOCONG",
      date: "March 1, 2025",
      thumbnailUrl: "/campaign-event-thumbnail.jpg"
    },
    {
      id: 2, 
      title: "Relief Operation with Supporters",
      photoUrl: "https://www.facebook.com/photo.php?fbid=122096453672767290&set=pb.61573018708186.-2207520000&type=3",
      description: "Engineer Sterling leading a relief operation for earthquake victims with dedicated volunteers",
      date: "February 15, 2025",
      thumbnailUrl: "/relief-operation-thumbnail.jpg"
    }
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
        title="Media Gallery" 
        subtitle="Photos and videos of Engineer Sterling Sañado's campaign and community work" 
      />

      {/* Gallery Section */}
      <section className="section bg-white">
        <div className="container">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-10">
            <div className="flex rounded-lg overflow-hidden border border-gray-200">
              <button
                className={`px-8 py-3 font-medium transition-colors ${
                  activeTab === 'photos' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('photos')}
              >
                Photos
              </button>
              <button
                className={`px-8 py-3 font-medium transition-colors ${
                  activeTab === 'videos' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('videos')}
              >
                Videos
              </button>
              <button
                className={`px-8 py-3 font-medium transition-colors ${
                  activeTab === 'facebook' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('facebook')}
              >
                <FaFacebook className="inline mr-2" /> Facebook
              </button>
            </div>
          </div>

          {activeTab === 'photos' && (
            <>
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
            </>
          )}

          {activeTab === 'videos' && (
            <div className="facebook-videos-section">
              <h2 className="text-2xl font-bold mb-8 text-center">Campaign Videos</h2>
              
              <div className="grid gap-12">
                {facebookVideos.map((video) => (
                  <motion.div
                    key={video.id}
                    className="bg-white rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-4 bg-gray-50 border-b">
                      <h3 className="text-2xl font-bold flex items-center">
                        <FaVideo className="text-primary mr-2" />
                        {video.title}
                      </h3>
                      {video.date && (
                        <p className="text-xs text-gray-500 mt-1">{video.date}</p>
                      )}
                    </div>
                    <div className="facebook-video-wrapper">
                      <FacebookVideo 
                        videoUrl={video.videoUrl} 
                        width="100%" 
                        height={550}
                        showText={false}
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 text-lg">{video.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <p className="text-gray-500 mb-4">Follow us on Facebook for more videos and updates!</p>
                <a 
                  href="https://www.facebook.com/profile.php?id=61573018708186" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Visit Our Facebook Page
                </a>
              </div>
            </div>
          )}
          
          {activeTab === 'facebook' && (
            <div className="facebook-photos-section">
              <h2 className="text-2xl font-bold mb-8 text-center">Facebook <span className="text-primary">Updates</span></h2>
              
              {/* Photo Collage Banner */}
              <div className="mb-12 relative overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-blue-900/80 z-10"></div>
                <div className="grid grid-cols-4 gap-1 h-64">
                  <div className="col-span-2 row-span-2 overflow-hidden">
                    <img src="/gallery-photos/prayer-rally.jpg" className="w-full h-full object-cover" alt="Campaign event" />
                  </div>
                  <div className="overflow-hidden">
                    <img src="/gallery-photos/healthcare-redcross.jpg" className="w-full h-full object-cover" alt="Healthcare" />
                  </div>
                  <div className="overflow-hidden">
                    <img src="/gallery-1.jpg" className="w-full h-full object-cover" alt="Community" />
                  </div>
                  <div className="overflow-hidden">
                    <img src="/gallery-3.jpg" className="w-full h-full object-cover" alt="Education" />
                  </div>
                  <div className="overflow-hidden">
                    <img src="/gallery-4.jpg" className="w-full h-full object-cover" alt="Infrastructure" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-bold mb-2">Follow Our Journey</h3>
                    <p className="text-lg max-w-xl mx-auto mb-4">Stay updated with Engineer Sterling Sañado's campaign activities and community service through our official Facebook page</p>
                    <a 
                      href="https://www.facebook.com/profile.php?id=61573018708186" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-primary font-bold py-2 px-6 rounded-full inline-flex items-center gap-2 hover:bg-blue-50 transition-colors"
                    >
                      <FaFacebook size={18} />
                      Connect With Us
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="grid gap-12">
                {facebookPhotos.map((photo) => (
                  <motion.div
                    key={photo.id}
                    className="bg-white rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-white border-b">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <FaFacebook className="text-primary text-xl" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold flex items-center">
                            {photo.title}
                          </h3>
                          {photo.date && (
                            <p className="text-xs text-gray-500">{photo.date}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="relative">
                        <div className="absolute -right-1 -top-1 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
                        <div className="absolute -left-1 -bottom-1 w-24 h-24 bg-primary/5 rounded-full z-0"></div>
                        <div className="relative z-10 shadow-lg rounded-lg overflow-hidden">
                          <FacebookPhoto 
                            photoUrl={photo.photoUrl} 
                            width="100%" 
                            height={550}
                            showCaption={true}
                          />
                        </div>
                      </div>
                      <div className="mt-6 relative z-10">
                        <p className="text-gray-700 text-lg pb-2 border-b border-gray-100">{photo.description}</p>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span className="inline-flex items-center gap-1"><FaFacebook className="text-primary" /> Original Post</span>
                          </div>
                          <a 
                            href={photo.photoUrl}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="px-4 py-2 bg-primary text-white rounded-full text-sm hover:bg-primary-dark transition-colors"
                          >
                            View on Facebook
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center mt-12 bg-gradient-to-r from-blue-50 to-white p-8 rounded-lg shadow-inner border border-blue-100">
                <h3 className="text-xl font-bold mb-2">Stay Connected!</h3>
                <p className="text-gray-600 mb-6">Follow Engineer Sterling Sañado on Facebook for more photos, videos, and campaign updates</p>
                <a 
                  href="https://www.facebook.com/profile.php?id=61573018708186" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <FaFacebook size={18} />
                  Visit Our Facebook Page
                </a>
              </div>
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