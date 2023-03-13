// import { isVisible } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import KakaoMap from '../Map/KakaoMap';
import Header from '../Header';

function Main() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(true);
    }, 2500);
  });

  return (
    <Container>
      <Header />
      <KakaoMap />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
