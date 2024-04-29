import styled from 'styled-components';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import * as S from '../styles/pages/AboutPage.styled';
import Switch from '../components/Switch';
import { useState } from 'react';
const Script = styled.h1`
  margin-top: 19px;
  margin-bottom: 39px;
  font-size: 13px;
  font-family: Pretendard, sans-serif;
  font-weight: 200;
`;

export default function Lost() {

  return (
    <>
      <MenuBar></MenuBar>
      <Switch left={false}></Switch>
      <S.AboutLayout>
        <S.AboutTitleHeading>분실문 공지</S.AboutTitleHeading>
        
        <Footer />
      </S.AboutLayout>
    </>
  );
}
