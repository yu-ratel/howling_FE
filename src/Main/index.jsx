import { isVisible } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import KakaoMap from '../Map/KakaoMap';
import Profile from '../Profile';
import Start from '../Start';

function Main() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(true);
    }, 2500);
  });

  return (
    <Container>
      {/* {page === true ? (
        <div>
          <Profile />
          <KakaoMap />
        </div>
      ) : (
        <Start />
      )} */}

      {load === true ? null : <Start />}
      <MainPage flag={load}>
        <Profile />
        <KakaoMap />
      </MainPage>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainPage = styled.div`
  display: ${(props) => (props.flag === true ? null : 'none')};
`;
