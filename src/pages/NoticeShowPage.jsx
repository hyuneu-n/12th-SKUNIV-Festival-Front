import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import Switch from '../components/Switch';
import * as S from '../styles/pages/NoticePage.styled';
import NoticeBox from '../components/NoticeBox';
import { Notices } from '../utils/NoticeData';
import { Link, useRouteLoaderData } from 'react-router-dom';

export default function NoticeShowPage() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <p>{data.title}</p>
      <p>{data.content}</p>
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
