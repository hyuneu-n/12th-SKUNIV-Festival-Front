import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components';
import SconMain from '../../public/Scon_Main.svg';
import './Burger.css';

const BmImg = styled.img`
    width: 100%;
`
const BmBar = styled.hr`
    width: 100%;
    margin-top: 10px;
`

export default function MenuBar() {
    return (
        <Menu width={'50%'}>
            <BmImg src={SconMain}/>
            <BmBar></BmBar>
            <a className='menu-item' href="/" style={{marginTop : "40px"}}>Home</a>
            <a className="menu-item" href="/booth">부스안내</a>
            <a className="menu-item" href="/TimeTable">공연안내</a>
            <a className="menu-item" href="/Notice">총학공지</a>
            <a className="menu-item" href="/MadeBy">만든사람들</a>
        </Menu>
    );

}
