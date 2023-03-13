import { React, useState } from 'react';
import styled from 'styled-components';
import { GiWolfHowl } from 'react-icons/gi';
import ProfileImg from '../Modal/ProfileImg';

function Logo() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '30px',
        fontStyle: 'italic',
        color: 'rgb(64, 63, 63)',
      }}
    >
      <GiWolfHowl size="50" style={{ color: 'rgb(22, 64, 123)' }} />
      Howling
    </div>
  );
}

function Profile() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Logo />
      <ProfileImg />
    </div>
  );
}

export default Profile;

const Temporary = styled.button`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  border-radius: 70%;
  border: 0;
  outline: 0;
  background-image: url(${profileLogo});
  background-size: cover;
`;

const ProfileBtn = styled.button`
  width: 200px;
  height: 40px;
  border: 0;
  text-align: start;
  background-color: gray;
  color: white;
`;

const ProfileImg = styled.h1`
  width: 70px;
  height: 70px;
  border-radius: 70%;
  border: 0;
  outline: 0;
  background-image: url(${profileLogo});
  background-size: cover;
  display: block;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
`;

const ProfileState = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 999;
  right: 10px;
  margin-top: 80px;
  width: 200px;
  height: 300px;
  border-radius: 10%;
  background-color: gray;
  color: white;
`;

const ToggleState = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  align-items: flex-start;
  z-index: 999;
  top: 30px;
  left: 70px;
`;

const ToggleMenuList = styled.button`
  width: 70px;
  height: 40px;
  border: 0;
  text-align: start;
  background-color: white;
  color: balck;
`;
