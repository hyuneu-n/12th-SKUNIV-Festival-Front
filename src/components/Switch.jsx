import React from 'react';
import * as S from '../styles/components/SwitchStyled';

export default function Switch() {
  return (
    <>
      <S.ButtonBox>
        <S.SwitchNav to="/notice">총학공지</S.SwitchNav>
        <S.SwitchNav to="/lostItems">분실물</S.SwitchNav>
      </S.ButtonBox>
      <S.WidthLine />
    </>
  );
}
