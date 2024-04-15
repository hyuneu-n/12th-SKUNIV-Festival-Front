import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from '../styles/components/MenuBar.styled';
import styled from 'styled-components';
import SconMain from '../../public/Scon_Main.svg';
import { slide as Menu } from 'react-burger-menu';
import { styles } from '../styles/components/MenuBar.styled';
const BmImg = styled.img`
  width: 100%;
`;
const BmBar = styled.hr`
  width: 100%;
  margin-top: 10px;
`;

export default function MenuBar() {
  return (
    <Menu
      width={'70%'}
      styles={styles}
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}
    >
      <BmImg src={SconMain} />
      <BmBar></BmBar>
      <Link href="/">Home</Link>
      <Link to="/booth">부스안내</Link>
      <Link to="/timetable">공연안내</Link>
      <Link to="/notice">총학공지</Link>
      <Link to="/about">만든사람들</Link>
    </Menu>
  );
}
