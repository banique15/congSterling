import React from 'react';

interface FacebookPhotoProps {
  photoUrl: string;
  width?: number | string;
  height?: number | string;
  showCaption?: boolean;
}

const FacebookPhoto: React.FC<FacebookPhotoProps> = ({
  photoUrl,
  width = '100%',
  height = 550,
  showCaption = true
}) => {
  // Create iframe URL with proper encoding
  const iframeUrl = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(photoUrl)}&width=500&show_text=${showCaption ? 'true' : 'false'}`;

  return (
    <div className="facebook-photo-container relative" style={{ width }}>
      <iframe 
        src={iframeUrl}
        width="100%" 
        height={height} 
        style={{ 
          border: 'none', 
          overflow: 'hidden', 
          display: 'block',
          borderRadius: '8px',
          backgroundColor: '#f0f2f5'  
        }}
        scrolling="no" 
        frameBorder="0" 
        allowFullScreen={true} 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default FacebookPhoto; 