import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import * as S from '../styles/pages/LostPage.styled';
import ItemSwitch from '../components/ItemSwitch';
import ItemBox from '../components/ItemBox';
//import { LostData } from '../utils/LostData';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import InputButton from '../components/InputButton';
import i from '../assets/images/menubar/menubarImage.svg';
import Modal from 'react-modal';
import React, { useState } from 'react';

export default function ItemsLost() {
  const [modalSwitch, setModalSwitch] = useState(false);
  const data = useLoaderData();
  const nav = useNavigate();
  const checkPass = () => {
    const inputValue = document.getElementById('pass').value;
    if (inputValue === '7777') {
      // window.location.href = '/lostInput';
      nav('/lostinput');
    } else {
      setModalSwitch(false);
    }
  };
  console.log(data);
  return (
    <>
      <MenuBar></MenuBar>
      <Modal
        isOpen={modalSwitch}
        onRequestClose={() => setModalSwitch(false)}
        style={ModalStyle}
      >
        <h5>관리자 로그인</h5>
        <input id="pass"></input>
        <button onClick={() => checkPass()}>aa</button>
      </Modal>
      <S.LostLayout>
        <S.LostHead>
          <InputButton onClick={() => setModalSwitch(true)}></InputButton>
        </S.LostHead>
        <S.LostImg src={i}></S.LostImg>
        <ItemSwitch />
        <S.LostBody>
          {data.map((item) => {
            return (
              <ItemBox
                key={item.id}
                name={item.lostItemName}
                location={item.lostLocation}
                date={item.lostDate}
                img={item.lostItemImagePath}
              />
            );
          })}
        </S.LostBody>
      </S.LostLayout>
      {/* <Footer /> */}
    </>
  );
} // get 요청
export async function loads() {
  const response = await fetch(
    'https://dev.skufestival2024.site/api/lostitem/posts?lastId=0&size=8'
  );
  console.log(response);
  return response;
}
const ModalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    top: '32vh',
    left: '12vw',
    right: '12vw',
    bottom: '50vh',
  },
};
