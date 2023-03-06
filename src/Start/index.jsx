import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import logoSrc from '../howling_img.png';

function Start() {
  return (
    <Container>
      <Logo
        animate={{ y: 0, scale: 0.2 }}
        initial={{ y: -100, scale: 0 }}
        transition={{ type: 'spring', duration: 3, bounce: 0.3 }}
        src={logoSrc}
        alt="logo-img"
      />
      <Title>Howling</Title>
    </Container>
  );
}

export default Start;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(23, 22, 48);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// const Wrapper = styled.div`
//   width: 600;
//   height: 600;
// `;

const Logo = styled(motion.img)`
  img {
    width: 200;
    height: 200;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 250%;
  font-style: italic;
  font-family: 'Times New Roman', Times, serif;
`;
