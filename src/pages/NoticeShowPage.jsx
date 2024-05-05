import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import Switch from '../components/Switch';
import * as S from '../styles/pages/NoticePage.styled';
import NoticeBox from '../components/NoticeBox';
import { Notices } from '../utils/NoticeData';
import { Link } from 'react-router-dom';

export default function NoticeShowPage() {
    let { id } = useParams(); 
    const [notice, setNotice] = useState(null); 

    useEffect(() => {
        // 데이터 로드 함수
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/notice/posts/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setNotice(data);  // 상태 업데이트
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <>
            <MenuBar />
            <div>
                {notice ? (
                    <div>
                        <h1>{notice.title}</h1> 
                        <p>{notice.content}</p>
                        <small>{notice.date}</small>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <Footer />
        </>
    );
}