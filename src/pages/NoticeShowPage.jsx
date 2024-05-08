import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import edit from '../assets/images/Notice/write.png';
import deleted from '../assets/images/Notice/trashh.png';
import sidebar from '../assets/images/Notice/bar.png';
import MenuBar from '../components/MenuBar';
import Switch from '../components/Switch';
import * as S from '../styles/pages/NoticePost.styled';
import NoticeBox from '../components/NoticeBox';
import { Notices } from '../utils/NoticeData';
import { Link, useRouteLoaderData } from 'react-router-dom';

export default function NoticeShowPage() {
  const data = useLoaderData();
  console.log(data);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("삭제하시겠습니까?");
    if (confirmDelete) {
      const response = await fetch(`https://dev.skufestival2024.site/api/notice/delete/${data.id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert("삭제되었습니다");

      } else {
        alert("Failed");
      }
    }
  };
  
  return (
    <>
      <MenuBar />
      <S.Layout>
        <S.TitleContainer>
          <S.Title>{data.title}</S.Title>
          <S.IconCon>
            <S.IconImg src={deleted} onClick={handleDelete} />
            <S.IconImg src={sidebar} />
            <S.IconImg src={edit} />
          </S.IconCon>
        </S.TitleContainer>
        <S.Date>{formatDate(data.date)}</S.Date>
        <S.Border />
        <S.ContentBody>
          <S.ContentParagraph>{data.content}</S.ContentParagraph>
        </S.ContentBody>
      </S.Layout>
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
