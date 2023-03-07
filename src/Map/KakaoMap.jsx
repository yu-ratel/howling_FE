import React, { useEffect } from 'react';
import styled from 'styled-components';
import KakaoMapScript from './KakaoMapScript';
import * as zoomIn from './KakaoMapScript';

export default function KakaoMap() {
  useEffect(() => {
    KakaoMapScript();
  }, []);

  return (
    <Map id="map">
      <Box onClick={zoomIn} />
    </Map>
  );
}

const Map = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Box = styled.button`
  z-index: 1000;
  width: 100px;
  height: 100px;
  position: absolute;
`;
