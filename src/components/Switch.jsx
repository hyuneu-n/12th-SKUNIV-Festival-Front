import React from 'react';
import * as S from '../styles/components/SwitchStyled';
export default function Switch({left = true}) {
    const setLeft = () => {
        if (left) {
            return ( <S.SwithButton href={'/notice'}>총학공지</S.SwithButton>);
        }
        else {
            return (<S.OffButton href={'/notice'}>총학공지</S.OffButton>);
        }
    }
    const setRight = () => {
        if (left) {
            return ( <S.OffButton href ={'/lostItems'} >분실문</S.OffButton>);
        }
        else {
            return (<S.SwithButton href ={'/lostItems'} >분실문</S.SwithButton>);
        }
    }
    return (
        <div>
            <S.ButtonBox>
                {setLeft()}
                {setRight()}
            </S.ButtonBox>
            <S.WidthLine></S.WidthLine>
        </div>
    );
}