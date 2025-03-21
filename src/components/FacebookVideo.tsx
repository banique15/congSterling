import React from 'react';

interface FacebookVideoProps {
  videoUrl: string;
  showText?: boolean;
}

const FacebookVideo: React.FC<FacebookVideoProps> = ({
  videoUrl,
  showText = false
}) => {
  // Create iframe URL with proper encoding
  const iframeUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=${showText ? 'true' : 'false'}&width=750&height=550`;

  return (
    <div className="facebook-video-container relative w-full">
      <div className="aspect-video w-full overflow-hidden bg-black">
        <iframe 
          src={iframeUrl}
          className="absolute top-0 left-0 w-full h-full border-none overflow-hidden block bg-black"
          title="Facebook video from Sterling Sañado's campaign"
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