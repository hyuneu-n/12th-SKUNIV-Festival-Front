import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import edit from '../assets/images/Notice/edit.png';
import deleted from '../assets/images/Notice/trash.png';
import sidebar from '../assets/images/Notice/sidebar.png';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import Switch from '../components/Switch';
import * as S from '../styles/pages/NoticePost.styled';
import NoticeBox from '../components/NoticeBox';
import { Notices } from '../utils/NoticeData';
import { Link, useRouteLoaderData } from 'react-router-dom';


export default function NoticeShowPage() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
    
    <MenuBar></MenuBar>
    <S.IconCon>
      <S.IconImg src={deleted}></S.IconImg>
      <S.IconImg src={sidebar}></S.IconImg>
      <S.IconImg src={edit}></S.IconImg>
    </S.IconCon>
      <S.Title>{data.title}</S.Title>
      <S.date>{data.date}</S.date>
      <S.border></S.border>

      <S.contentBody>
          <S.contentParagraph>{data.content}</S.contentParagraph>
        </S.contentBody>
        
  
      
      </>
  );
}

export async function loader({ params }) {
  const id = params.id;
  const response = await fetch(
    'https://dev.skufestival2024.site/api/notice/post/' + id
  );
  console.log(id);
  // url
  console.log(response);

  return response;
}
