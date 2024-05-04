import Footer from '../components/Footer';
import * as S from '../styles/pages/NoticeInputPage.styled';
import InputButton from '../components/InputButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ss from '../assets/images/icon_back.svg';
const getData = () => {

};
const getDate = () => {

};

const NoticeBack = styled.img`
  margin: 5% 0% 0% 5%;
  width: 20px;
  height: 29px;
  position: absolute;
  top: 3%;
  left: 0;
`;

export default function Notice() {
  return (
    <div className="app">
      <S.NoticeLayout>
        <S.NoticeHead>
        <Link to={"/findItems"}><NoticeBack src={ss}></NoticeBack></Link>
          <InputButton></InputButton>
        </S.NoticeHead>
        <S.NoticeBody>
          <S.NoticeTitle type="text" placeholder="제목을 입력해주세요." id="bTitle" name="bTitle" />
          <S.NoticeContent type="text" placeholder="내용을 입력해주세요." id="bContent" name="bContent"></S.NoticeContent>
        </S.NoticeBody>
      </S.NoticeLayout>
      <Footer />
    </div>
  );
}
