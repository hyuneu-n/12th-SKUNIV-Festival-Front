import styled from 'styled-components';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import * as S from '../styles/pages/LostPage.styled';
import { useState } from 'react';
import ItemBox from '../components/ItemBox';
import { LostData } from '../utils/LostData';
import { Link } from 'react-router-dom';
import ItemSwitch from '../components/ItemSwitch';

export default function Lost() {

  return (
    <>
      <MenuBar></MenuBar>
      <ItemSwitch />
      <h1>찾은 거</h1>
      <Footer />
    </>
  );
}
