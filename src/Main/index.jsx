import { useEffect, useState } from 'react';
import styled from 'styled-components';
import KakaoMap from '../Map/KakaoMap';
import Profile from '../Profile';
import Start from '../Start';
import ProfileImg from '../Modal/ProfileImg';

function Main() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(true);
    }, 2500);
  });

  return (
    <Container>
      {load ? (
        <div>
          <Profile />
          <KakaoMap />
        </div>
      ) : (
        <Start />
      )}

      {/* {!load && <Start />}
      <MainPage flag={load}>
        <Profile />
        <KakaoMap />
      </MainPage> */}

      {/* <ProfileImg /> */}
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
  /* display: ${(props) => (props.flag === true ? 'block' : 'none')}; */
`;
