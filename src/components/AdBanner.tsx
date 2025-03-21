import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

const AdBanner: React.FC = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className="w-full py-4 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="ad-container mx-auto text-center">
          <ins className="adsbygoogle block"
            data-ad-client="ca-pub-7958513996110487"
            data-ad-slot="3221909767"
            data-ad-format="auto"
            data-full-width-responsive="true">
          </ins>
        </div>
      </div>
    </div>
  );
};

export default AdBanner; 