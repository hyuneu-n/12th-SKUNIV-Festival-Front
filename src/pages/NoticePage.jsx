import MenuBar from '../components/MenuBar';
import Switch from '../components/Switch';
import * as S from '../styles/pages/NoticePage.styled';
import NoticeBox from '../components/NoticeBox';
import { Notices } from '../utils/NoticeData';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import InputButton from '../components/InputButton';
import { StyledLink } from '../styles/pages/NoticePage.styled';
import Modal from 'react-modal';
import React, { useState } from 'react';

export default function Notice() {
  const [modalSwitch, setModalSwitch] = useState(false);
  const nav = useNavigate();
  const checkPass = () => {
    const inputValue = document.getElementById('pass').value;
    if (inputValue === 'hansup2024') {
      // window.location.href = '/noticeinput'; // 특정 페이지로 이동
      nav('/noticeinput');
    } else {
      setModalSwitch(false);
    }
  };
  const data = useLoaderData();

  console.log(data);
  const checkPass2 = () => {
    window.location.href = '/noticeinput';
  };
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
        <button onClick={() => checkPass()}>login</button>
      </Modal>
      <S.NoticeLayout>
        <S.NoticeHead>
          <InputButton onClick={() => setModalSwitch(true)}></InputButton>
        </S.NoticeHead>
        <S.WidthLine></S.WidthLine>
        <S.NoticeH1>NOTICE</S.NoticeH1>

        <S.NoticeBody>
        {data && data.map((item) => (
          <Link to={`${item.id}`} key={item.id}>
            <NoticeBox
              id={item.id}
              title={item.title}
              content={item.content}
              date={item.date}
            />
            </Link>
          ))}
        </S.NoticeBody>
      </S.NoticeLayout>
    </>
  );
}

// get 요청은 정상작동 확인
export async function loader() {
  const response = await fetch(
    'https://dev.skufestival2024.site/api/notice/posts'
  );
  // url
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
    top: '250px',  // 위쪽 여백을 줄입니다.
    left: '20px',  // 왼쪽 여백을 줄입니다.
    right: '20px', // 오른쪽 여백을 줄입니다.
    bottom: '250px', // 아래쪽 여백을 줄입니다.
    borderRadius: '20px',
    opacity: '0.9',
    lineHeight: '2.5',
  },
};
