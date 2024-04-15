import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import SconMain from '../../public/Scon_Main.svg';
import './Burger.css';

const BmImg = styled.img`
  width: 100%;
`;
const BmBar = styled.hr`
  width: 200%;
  margin-top: 10px;
`;

export default function MenuBar() {
  return (
    <Menu width={'50%'}>
      <BmImg src={SconMain} />
      <BmBar></BmBar>
      <Link className="menu-item" to="/" style={{ marginTop: '40px' }}>
        Home
      </Link>
      <Link className="menu-item" to="/booth">
        부스안내
      </Link>
      <Link className="menu-item" to="/timetable">
        공연안내
      </Link>
      <Link className="menu-item" to="/notice">
        총학공지
      </Link>
      <Link className="menu-item" to="/about">
        만든사람들
      </Link>
    </Menu>
  );
}
