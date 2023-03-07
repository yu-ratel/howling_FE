import { useEffect, useState } from 'react';
import styled from 'styled-components';
import KakaoMap from '../Map/KakaoMap';
import Profile from '../Profile';
import Start from '../Start';

function Main() {
  const [page, pageSet] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      pageSet(true);
    }, 2500);
  });

  return (
    <Container>
      {page === true ? (
        <div>
          <Profile />
          <KakaoMap />
        </div>
      ) : (
        <Start />
      )}
      {/* <Profile />
      <KakaoMap /> */}
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
