import React, { useState } from 'react';

interface FacebookPhotoProps {
  photoUrl: string;
  showCaption?: boolean;
}

const FacebookPhoto: React.FC<FacebookPhotoProps> = ({
  photoUrl,
  showCaption = true
}) => {
  const [loaded, setLoaded] = useState(false);

  // Create iframe URL with proper encoding
  const iframeUrl = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(photoUrl)}&width=500&show_text=${showCaption ? 'true' : 'false'}&height=600&appId=`;

  return (
    <div className="facebook-photo-container relative w-full h-full">
      <iframe 
        src={iframeUrl}
        className={`w-full h-full border-none overflow-hidden block rounded-lg bg-[#f0f2f5] ${loaded ? 'opacity-100' : 'opacity-0'}`}
        title="Facebook post from Sterling Sañado's campaign"
        scrolling="no" 
        frameBorder="0" 
        allowFullScreen={true}
        onLoad={() => setLoaded(true)}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#f0f2f5] rounded-lg">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-blue-200 h-10 w-10"></div>
            <div className="flex-1 space-y-3 py-1">
              <div className="h-3 bg-blue-200 rounded w-3/4"></div>
              <div className="h-3 bg-blue-200 rounded"></div>
              <div className="h-3 bg-blue-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacebookPhoto; 