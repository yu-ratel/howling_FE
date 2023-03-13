import { React, useState } from 'react';
import styled from 'styled-components';
import { TbMenu } from 'react-icons/tb';
import { GiWolfHowl } from 'react-icons/gi';
import ProfileImg from '../Modal/ProfileImg';

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
    <button
      onClick={() => setToggleState(!toggleState)}
      type="button"
      style={{ border: '0', backgroundColor: 'white' }}
    >
      <TbMenu size="50" style={{ color: 'gray', marginTop: '10px' }} />
      {toggleState ? <ToggleMenu /> : null}
    </button>
  );
}

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
      <Toggle />
      <Logo />
      <ProfileImg />
    </div>
  );
}

export default Profile;

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
