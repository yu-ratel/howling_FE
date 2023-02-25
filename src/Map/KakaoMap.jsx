import React, { useEffect } from 'react';
import KakaoMapScript from './KakaoMapScript';

export default function KakaoMap() {
  useEffect(() => {
    KakaoMapScript();
  }, []);

  return (
    <div
      id="map"
      style={{
        width: '100vw',
        height: '100vh',
      }}
    />
  );
}
