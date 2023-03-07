import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import logoSrc from '../howling_img.png';

function Start() {
  return (
    <Container>
      <ImgWrap
        animate={{ y: 0, scale: 0.2 }}
        initial={{ y: -100, scale: 0 }}
        transition={{ type: 'spring', duration: 2.5, bounce: 0.3 }}
      >
        <motion.img src={logoSrc} alt="logo-img" />
        <Title>Howling</Title>
      </ImgWrap>
    </Container>
  );
}

export default Start;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(23, 22, 48);
`;

const ImgWrap = styled(motion.div)`
  width: 240;
  height: 240;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 250%;
  font-style: italic;
  font-family: 'Times New Roman', Times, serif;
`;
