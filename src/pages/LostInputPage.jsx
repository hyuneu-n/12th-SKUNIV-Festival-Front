import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import Switch from '../components/Switch';
import * as S from '../styles/pages/NoticeInputPage.styled';
import InputButton from '../components/InputButton';
import { Notices } from '../utils/NoticeData';
import { Link } from 'react-router-dom';
import img_i from '../assets/images/icon_back.svg';
import img_p from '../assets/images/icon_photo.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Notice() {
  const navigate = useNavigate();
  const [lName, setName] = useState('');
  const [lTime, setTime] = useState('');
  const [lDate, setDate] = useState('');
  const [lLocation, setLocation] = useState('');
  const handleButtonClick = () => {
    console.log('button clicked');

    const postData = {
      lostItemName: lName,
      lostLocation: lLocation,
      lostDate: lDate,
    };
    console.log(postData);
    //navigate('/lostItems');
  };

  // // 이미지 가져오기
  // const onSelectImage = () => {
  //   launchImageLibrary(
  //     {
  //       madiaType: 'photo',
  //       maxWidth: 512,
  //       maxHeight: 512,
  //       includeBase64: true
  //     },
  //     (response) => {
  //       console.log(response)
  //       // console.log(response.assets[0].base64)
  //       if (response.didCancel) {
  //         return;
  //       } else if (response.errorCode) {
  //         console.log("Image Error : " + response.errorCode);
  //       }

  //       setResponse(response);
  //       setImageFile(response.assets[0].base64);
  //     })

  // }
  return (
    <>
      <S.NoticeLayout>
        <S.NoticeHead>
          <InputButton onClick={handleButtonClick}></InputButton>
          <Link to={"/lostItems"}><S.NoticeBack src={img_i}></S.NoticeBack></Link>
        </S.NoticeHead>
        <S.NoticeBody>
          <S.HorizonBody>
            <S.NoticeName
              type="text"
              placeholder="분실물을 입력해주세요."
              id="lName"
              name="lName"
              onChange={(e) => setName(e.target.value)} />
            <S.BtnImage src={img_p}></S.BtnImage>
          </S.HorizonBody>

          <S.NoticeTitle
            type="text"
            placeholder="날짜를 입력해주세요."
            id="lDate"
            name="lDate"
            onChange={(e) => setDate(e.target.value)} />
          <S.NoticeInImage src={img_p}></S.NoticeInImage>
          <S.NoticeTitle
            type="text"
            placeholder="시간을 입력해주세요."
            id="lTime"
            name="lTime"
            onChange={(e) => setTime(e.target.value)} />
          <S.NoticeTitle
            type="text"
            placeholder="장소를 입력해주세요."
            id="lLocation"
            name="lLocation"
            onChange={(e) => setLocation(e.target.value)} />
        </S.NoticeBody>
      </S.NoticeLayout>
      <Footer />
    </>
  );
}
