import { React, useState } from 'react';
import styled from 'styled-components';
import { TbMenu } from 'react-icons/tb';
import { GiWolfHowl } from 'react-icons/gi';
import profileImg from '../youngmin.jpeg';
import loginIcons from '../kakao.png';

function Header() {
  const [state, setState] = useState(false);
  return (
    <HeaderBox>
      <Menu />
      <Logo />
      <LoginIcons />
      <Profile onClick={() => setState(!state)} />
      {state ? <ProfileBox /> : null}
    </HeaderBox>
  );
}

function MenuList() {
  return (
    <MenuState>
      <MenuItem>우리동네 핫이슈</MenuItem>
      <MenuItem>내 피드</MenuItem>
      <MenuItem>도움말</MenuItem>
    </MenuState>
  );
}

function Menu() {
  const [menuState, setMenuState] = useState(false);
  return (
    <MenuBtn onClick={() => setMenuState(!menuState)}>
      <TbMenu size="50" style={{ color: 'gray', marginTop: '10px' }} />
      {menuState ? <MenuList /> : null}
    </MenuBtn>
  );
}

function Logo() {
  return (
    <LogoBox>
      <GiWolfHowl size="50" style={{ color: 'rgb(22, 64, 123)' }} />
      Howling
    </LogoBox>
  );
}

function ProfileBox() {
  return (
    <ProfileState>
      <ProfileLogo />
      <h3 style={{ color: 'while', textAlign: 'center', marginTop: '20px' }}> 영민인데용 </h3>
      <p style={{ color: 'darkgray', textAlign: 'center' }}> dbdudals100@naver.com </p>
      <ProfileItem>프로필 수정</ProfileItem>
      <ProfileItem>내가 작성한 글</ProfileItem>
      <ProfileItem>로그아웃</ProfileItem>
    </ProfileState>
  );
}

export default Header;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuState = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  align-items: flex-start;
  z-index: 999;
  top: 30px;
  left: 70px;
`;

const MenuBtn = styled.button`
  border: 0;
  background-color: white;
`;

const MenuItem = styled.button`
  width: 70px;
  height: 40px;
  border: 0;
  text-align: start;
  background-color: white;
  color: balck;
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  font-style: italic;
  color: rgb(64, 63, 63);
`;

const Profile = styled.button`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  border-radius: 70%;
  border: 0;
  outline: 0;
  background-image: url(${profileImg});
  background-size: cover;
`;

const ProfileItem = styled.button`
  width: 200px;
  height: 40px;
  border: 0;
  text-align: start;
  background-color: gray;
  color: white;
  &: hover {
    background-color: darkgray;
  }
`;

const ProfileLogo = styled.h1`
  width: 70px;
  height: 70px;
  border-radius: 70%;
  border: 0;
  outline: 0;
  background-image: url(${profileImg});
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

const LoginIcons = styled.button`
  width: 170px;
  height: 50px;
  border-radius: 10%;
  border: 0;
  margin-top: 10px;
  background-image: url(${loginIcons});
`;
