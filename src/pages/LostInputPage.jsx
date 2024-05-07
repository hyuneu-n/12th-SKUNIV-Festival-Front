import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import Switch from '../components/Switch';
import * as S from '../styles/pages/NoticeInputPage.styled';
import InputButton from '../components/InputButton';
import { Link } from 'react-router-dom';
import img_i from '../assets/images/icon_back.svg';
import img_p from '../assets/images/icon_photo.svg';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import styled from 'styled-components';

export default function Notice() {
  const navigate = useNavigate();
  const [lName, setName] = useState('');
  const [lTime, setTime] = useState('');
  const [lDate, setDate] = useState('');
  const [lLocation, setLocation] = useState('');
  const [lfind, setFind] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
    const fileInput = document.getElementById('fileInput');
    const fileView = document.getElementById('fileView');

    fileInput.addEventListener('change', function (event) {
      if (fileInput.files && fileInput.files[fileInput.files.length - 1]) {
        const reader = new FileReader();

        reader.onload = function (event) {
          const imageURL = event.target.result;
          fileView.style.backgroundImage = `url(${imageURL})`;
        };

        reader.readAsDataURL(fileInput.files[fileInput.files.length - 1]);
      }
    });
  };

  const handleButtonClick = () => {
    console.log('button clicked');

    const postData = {
      lostItemName: lName,
      lostLocation: lLocation,
      lostDate: lDate,
      lost : lfind,
    };
    console.log('postdata',postData);
    const formData = new FormData();
    for (const key in postData) {
      formData.append(key, postData[key]);
    }
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[fileInput.files.length - 1];
    if (!file) {
      alert('파일을 선택해주세요.');
      return;
    } else {
      console.log('not null');
    }
    formData.append('file', file);

    // 쿼리 파라미터를 URL에 포함시킵니다.
    const queryParams = new URLSearchParams({
      lostItemName: lName,
      lostDate: lDate,
      lostLocation: lLocation,
      lost: lfind
    }).toString();

    const requestUrl = `https://dev.skufestival2024.site/api/lostitem/post?${queryParams}`;

    fetch(requestUrl, {
      method: 'POST',
      body: formData,
      // 'Content-Type': 'multipart/form-data' 헤더는 제거합니다.
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Success:', data);
      navigate('/lostItems');
    })
    .catch((error) => {
      console.log('Error:', error);
      navigate('/lostItems');
    });
  };

  const img_l = 'url("../assets/images/icon_back.svg")';
  return (
    <>
      <S.NoticeLayout>
        <S.NoticeHead>
          <InputButton onClick={handleButtonClick}></InputButton>
          <Link to={'/lostItems'}>
            <S.NoticeBack src={img_i}></S.NoticeBack>
          </Link>
        </S.NoticeHead>
        <S.NoticeBody>
          <S.HorizonBody>
            <S.NoticeName
              type="text"
              placeholder="분실물을 입력해주세요"
              id="lName"
              name="lName"
              onChange={(e) => setName(e.target.value)}
            />
            <S.BtnImage
              id="imgBtn"
              src={img_p}
              onClick={handleImageClick}
            ></S.BtnImage>
          </S.HorizonBody>

          <S.NoticeTitle
            type="text"
            placeholder="분실날짜를 입력해주세요"
            id="lDate"
            name="lDate"
            onChange={(e) => setDate(e.target.value)}
          />
          <S.NoticeInImage id="fileView"></S.NoticeInImage>
          <S.NoticeTitle
            type="text"
            placeholder="시간을 입력해주세요"
            id="lTime"
            name="lTime"
            onChange={(e) => setTime(e.target.value)}
          />
          <S.NoticeTitle
            type="text"
            placeholder="분실위치를 입력해주세요"
            id="lLocation"
            name="lLocation"
            onChange={(e) => setLocation(e.target.value)}
          />
        </S.NoticeBody>
      </S.NoticeLayout>
      <input
        id="fileInput"
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
      {/* <Footer /> */}
    </>
  );
}
