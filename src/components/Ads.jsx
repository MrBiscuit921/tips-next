'use client';

import { useEffect } from 'react';

export default function Ads() {
    useEffect(() => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error(e);
        }
      }, []);
    
      return (
        <div className="w-full">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-format="fluid"
            data-ad-layout-key="-hb-1n+3l-1v+20"
            data-ad-client="ca-pub-2469585557731671"
            data-ad-slot="8699284225"
          ></ins>
        </div>
      );
}
