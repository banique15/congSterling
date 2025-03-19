import React from 'react';

interface FacebookVideoProps {
  videoUrl: string;
  width?: number | string;
  height?: number | string;
  showText?: boolean;
}

const FacebookVideo: React.FC<FacebookVideoProps> = ({
  videoUrl,
  width = '100%',
  height = 500,
  showText = false
}) => {
  // Create iframe URL with proper encoding
  const iframeUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=${showText ? 'true' : 'false'}&width=750&height=500`;

  return (
    <div className="facebook-video-container" style={{ width }}>
      <iframe 
        src={iframeUrl}
        width="100%" 
        height={height} 
        style={{ border: 'none', overflow: 'hidden', display: 'block' }}
        scrolling="no" 
        frameBorder="0" 
        allowFullScreen={true} 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default FacebookVideo; 