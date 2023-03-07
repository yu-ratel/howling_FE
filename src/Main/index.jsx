import styled from 'styled-components';
import KakaoMap from '../Map/KakaoMap';
import Profile from '../Profile';

function Main() {
  return (
    <Container>
      <Profile />
      <KakaoMap />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
