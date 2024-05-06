import styled from 'styled-components';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import * as S from '../styles/pages/LostPage.styled';
import i from '../assets/images/menubar/menubarImage.svg';
import ItemBox from '../components/ItemBox';
import InputButton from '../components/InputButton';
import ItemSwitch from '../components/ItemSwitch';
import { Link, useLoaderData } from 'react-router-dom';
import { LostData } from '../utils/LostData';
import Modal from 'react-modal';
import React, { useState } from 'react'
export default function FindItems() {
  const [modalSwitch, setModalSwitch] = useState(false);
  const data = useLoaderData();
  const checkPass = () => {
    const inputValue = document.getElementById('pass').value;
    if (inputValue === '7777') {
      window.location.href = '/lostInput'; // 특정 페이지로 이동
    } else {
      setModalSwitch(false);
    }
  }
  console.log(data);
  return (
    <>
      <MenuBar></MenuBar>
      <Modal isOpen={modalSwitch} onRequestClose={() => setModalSwitch(false)} style={ModalStyle}>
        <h5>관리자 로그인</h5>
        <input id='pass'></input>
        <button onClick={() => checkPass()}>aa</button>
      </Modal>
      <S.LostLayout>
        <S.LostHead>
            <InputButton onClick={() => setModalSwitch(true)}></InputButton>
        </S.LostHead>
        <S.LostImg src={i}></S.LostImg>
        <S.LostWrite></S.LostWrite>
        <ItemSwitch />
        <S.LostBody>

          {data.map((item,index) => {
            return (
              <ItemBox
                key={item.id}
                name={item.lostItemName}
                location={item.lostLocation}
                date={item.lostDate}
                img = {item.lostItemImagePath}
                find={true}
              />
            );
          })}
        </S.LostBody>
      </S.LostLayout>

      <Footer />
    </>
  );
}
// get 요청
export async function loadLis2() {
  const response = await fetch('http://dev.skufestival2024.site/api/lostitem/posts?lastId=0&size=8');
  // url
  console.log(response);
  return response;
}
const ModalStyle = {
  overlay: {
    position : 'fixed',
    top : 0,
    left : 0,
    right : 0,
    bottom : 0,
    zIndex : 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content : {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'column',
    backgroundColor : 'white',
    top : '32vh',
    left : '12vw',
    right : '12vw',
    bottom : '50vh',
  }
};