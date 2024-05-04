import React from 'react';
import * as S from '../styles/components/SwitchStyled';

export default function Switch() {
  return (
    <>
      <S.ButtonBox>
        <S.SwitchNavLeft to="/lostItems">분실물</S.SwitchNavLeft>
        <S.SwitchNavRight to="/findItems">찾은 분실물</S.SwitchNavRight>
      </S.ButtonBox>
      <S.WidthLine />
    </>
  );
}
