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
  height = 550,
  showText = false
}) => {
  // Create iframe URL with proper encoding
  const iframeUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=${showText ? 'true' : 'false'}&width=750&height=${height}`;

  return (
    <div className="facebook-video-container relative" style={{ width }}>
      <div className="aspect-video w-full overflow-hidden bg-black">
        <iframe 
          src={iframeUrl}
          width="100%" 
          height="100%" 
          style={{ 
            border: 'none', 
            overflow: 'hidden', 
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#000'
          }}
          scrolling="no" 
          frameBorder="0" 
          allowFullScreen={true} 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default FacebookVideo; 