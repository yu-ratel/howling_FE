import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import ProfileModal from '../Profile/ProfileModal';
import profileImg from '../KakaoTalk_Photo_2023-02-14-17-39-05.jpeg';

function ProfileImage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <ProfileImg type="button" onClick={() => setModalIsOpen(true)} />
      <Modal style={StyledModal} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <CloseBtn onClick={() => setModalIsOpen(false)}>X</CloseBtn>
        <ProfileModal />
      </Modal>
    </>
  );
}

export default ProfileImage;

const ProfileImg = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 70%;
  background-image: url(${profileImg});
  background-size: cover;
  display: block;
`;

const CloseBtn = styled.button`
  width: 15%;
  border: 0;
  background-color: white;
  :hover {
    background-color: #f0f0f0;
  }
  font-size: 20px;
`;

const StyledModal = {
  overlay: { backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: '999' },
  content: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    top: 'fit-content',
    left: 'fit-content',
    bottom: 'fit-content',
    right: 'fit-content',
    transform: 'translate(530%, 5%)',
    border: '0',
    boxShadow: '0 0 5px 2px grey',
    borderRadius: '20px',
  },
};
