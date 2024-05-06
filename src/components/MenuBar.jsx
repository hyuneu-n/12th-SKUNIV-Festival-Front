import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from '../styles/components/MenuBar.styled';
import styled from 'styled-components';
import SconMain from '../assets/images/menubar/menubarImage.svg';
import { slide as MenuBarLayout } from 'react-burger-menu';
import { styles } from '../styles/components/MenuBar.styled';
const MenuBarImg = styled.img`
  width: 100%;
`;
const MenuBarLine = styled.hr`
  width: 150%;
  margin-top: 10px;
  color: #215107 !important;
`;

const MenubarLink = styled(Link)`
  color: #215107 !important;
  font-weight: 440;
`;

export default function MenuBar() {
  return (
    <MenuBarLayout
      styles={styles}
      pageWrapId={'app'}
      // outerContainerId={'outer-container'}
    >
      <Link to="/"><MenuBarImg src={SconMain} /></Link>
      <MenuBarLine />
      <MenubarLink to="/">Home</MenubarLink>
      <MenubarLink to="/booth">부스</MenubarLink>
      <MenubarLink to="/timetable">타임테이블</MenubarLink>
      <MenubarLink to="/notice">공지사항</MenubarLink>
      <MenubarLink to="/lostItems">분실물</MenubarLink>
      <MenubarLink to="/safety">AED · 대피로</MenubarLink>
      <MenubarLink to="/about">ABOUT</MenubarLink>
    </MenuBarLayout>
  );
}
