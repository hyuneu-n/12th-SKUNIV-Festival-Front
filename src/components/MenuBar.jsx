import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from '../styles/components/MenuBar.styled';
import styled from 'styled-components';
import SconMain from '../../public/menubar/menubarImage.svg';
import { slide as MenuBarLayout } from 'react-burger-menu';
import { styles } from '../styles/components/MenuBar.styled';
const MenuBarImg = styled.img`
  width: 100%;
`;
const MenuBarLine = styled.hr`
  width: 100%;
  margin-top: 10px;
  color: #215107 !important;
`;

const MenubarLink = styled(Link)`
  color: #215107 !important;
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
      <MenubarLink to="/">Home</MenubarLink>
      <MenubarLink to="/booth">부스안내</MenubarLink>
      <MenubarLink to="/timetable">공연안내</MenubarLink>
      <MenubarLink to="/notice">총학공지</MenubarLink>
      <MenubarLink to="/lostItems">분실물</MenubarLink>
      <MenubarLink to="/about">만든사람들</MenubarLink>
      <MenubarLink to="/noticeInput">분실문 작성</MenubarLink>
    </MenuBarLayout>
  );
}
