import styled from 'styled-components';
import KakaoMap from '../Map/KakaoMap';
import Header from '../Header';

function Main() {
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
