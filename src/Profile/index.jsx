import { React, useState } from 'react';
import styled from 'styled-components';
import profileLogo from '../KakaoTalk_Photo_2023-02-14-17-39-05.jpeg';

function ProfileBox() {
  return (
    <ProfileState>
      <ProfileImg />
      <h3 style={{ color: 'while', textAlign: 'center', marginTop: '20px' }}> 영민인데용 </h3>
      <p style={{ color: 'darkgray', textAlign: 'center' }}> dbdudals100@naver.com </p>
      <ProfileBtn>프로필 수정</ProfileBtn>
      <ProfileBtn>내가 작성한 글</ProfileBtn>
      <ProfileBtn>로그아웃</ProfileBtn>
    </ProfileState>
  );
}

function Profile() {
  const [state, setState] = useState(false);
  return (
    <div>
      <Temporary onClick={() => setState(!state)} />
      {state ? <ProfileBox /> : null}
    </div>
  );
}

export default Profile;

const Temporary = styled.button`
float: right;
width: 80px;
height: 80px;
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
position: fixed;
z-index: 999;
right: 10px;
margin-top: 30px;
width: 200px;
height: 300px;
border-radius: 10%;
background-color: gray;
color: white;
`;
