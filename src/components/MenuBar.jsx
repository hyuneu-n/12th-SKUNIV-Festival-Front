import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from '../styles/components/MenuBar.styled';
import styled from 'styled-components';
import SconMain from '../../public/Scon_Main.svg';
import { slide as MenuBarLayout } from 'react-burger-menu';
import { styles } from '../styles/components/MenuBar.styled';
const MenuBarImg = styled.img`
  width: 100%;
`;
const MenuBarLine = styled.hr`
  width: 100%;
  margin-top: 10px;
`;

export default function MenuBar() {
  return (
    <MenuBarLayout
      styles={styles}
      pageWrapId={'app'}
      // outerContainerId={'outer-container'}
    >
      <MenuBarImg src={SconMain} />
      <MenuBarLine />
      <Link to="/">Home</Link>
      <Link to="/booth">부스안내</Link>
      <Link to="/timetable">공연안내</Link>
      <Link to="/notice">총학공지</Link>
      <Link to="/about">만든사람들</Link>
    </MenuBarLayout>
  );
}
