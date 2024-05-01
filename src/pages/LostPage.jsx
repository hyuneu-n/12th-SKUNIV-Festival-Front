import styled from 'styled-components';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import * as S from '../styles/pages/LostPage.styled';
import ItemSwitch from '../components/ItemSwitch';
import { useState } from 'react';
import ItemBox from '../components/ItemBox';
import { LostData } from '../utils/LostData';
import { Link } from 'react-router-dom';
import InputButton from '../components/InputButton';
export default function Lost() {

  return (
    <>
      <MenuBar></MenuBar>
      <S.LostLayout>
        <S.LostHead>
          <Link to="/lostInput">
            <InputButton></InputButton>
          </Link>
        </S.LostHead>
        <ItemSwitch />
        <S.LostBody>
          {LostData.map((item) => {
            return (
              <ItemBox
                key={item.id}
                name={item.name}
                location={item.location}
                date={item.date}
              />
            );
          })}
        </S.LostBody>
      </S.LostLayout>
      <Footer />
    </>
  );
}
