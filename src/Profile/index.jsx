import { React, useState } from 'react';
import styled from 'styled-components';
import { TbMenu } from 'react-icons/tb';
import { GiWolfHowl } from 'react-icons/gi';
import profileLogo from '../KakaoTalk_Photo_2023-02-14-17-39-05.jpeg';

function ToggleMenu() {
  return (
    <ToggleState>
      <ToggleMenuList>우리동네 핫이슈</ToggleMenuList>
      <ToggleMenuList>내 피드</ToggleMenuList>
      <ToggleMenuList>도움말</ToggleMenuList>
    </ToggleState>
  );
}

function Toggle() {
  const [toggleState, setToggleState] = useState(false);
  return (
    <button onClick={() => setToggleState(!toggleState)} type="button" style={{ border: '0', backgroundColor: 'white' }}>
      <TbMenu size="50" style={{ color: 'gray', marginTop: '10px' }} />
      {toggleState ? <ToggleMenu /> : null}
    </button>
  );
}

function Logo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '30px', fontStyle: 'italic', color: 'rgb(64, 63, 63)' }}>
      <GiWolfHowl size="50" style={{ color: 'rgb(22, 64, 123)' }} />
      Howling
    </div>
  );
}

function ProfileBox() {
  return (
    <ProfileState>
      <ProfileImg />
      <h3 style={{ color: 'while', textAlign: 'center', marginTop: '20px' }}> 영민인데용 </h3>
      <p style={{ color: 'darkgray', textAlign: 'center' }}> dbdudals100@naver.com </p>
      <ProfileBtn> 프로필 수정 </ProfileBtn>
      <ProfileBtn> 내가 작성한 글</ProfileBtn>
      <ProfileBtn> 로그아웃 </ProfileBtn>
    </ProfileState>
  );
}

function Profile() {
  const [state, setState] = useState(false);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Toggle />
      <Logo />
      <Temporary onClick={() => setState(!state)} />
      {state ? <ProfileBox /> : null}
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
text-align:start;
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
text-align:start;
background-color: white;
color: balck;
`;
