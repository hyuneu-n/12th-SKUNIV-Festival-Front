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
      <MenubarLink to="/booth">부스맵</MenubarLink>
      <MenubarLink to="/timetable">타임테이블</MenubarLink>
      <MenubarLink to="/notice">공지사항</MenubarLink>
      <MenubarLink to="/lostItems">분실물</MenubarLink>
      <MenubarLink to="/noticeInput">분실물 작성</MenubarLink>
      <MenubarLink to="/evacuation">대피로</MenubarLink>
      <MenubarLink to="/about">만든이들</MenubarLink>
    </MenuBarLayout>
  );
}
