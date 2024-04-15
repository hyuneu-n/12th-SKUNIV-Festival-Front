import Profile from '../components/Profile';
import LogoSquare from '../../public/LogoSquare.svg';
import styled from 'styled-components';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import * as S from '../styles/pages/About.styled';

const Title = styled.h1`
  margin-top: 69px;
  font-size: 15px;
  font-family: SUIT Variable, sans-serif;
  font-style: extra-bold;
`;

const Info = styled.h1`
  margin-top: 16px;
  font-size: 15px;
  font-family: Pretendard Variable, sans-serif;
  font-style: bold;
`;
const Script = styled.h1`
  margin-top: 19px;
  margin-bottom: 39px;
  font-size: 13px;
  font-family: Pretendard, sans-serif;
  font-weight: 200;
`;
const Part = styled.h1`
  margin-top: 20px;
  font-size: 15px;
  font-family: Pretendard, sans-serif;
  font-style: bold;
`;

export default function MadeBy() {
  return (
    <>
      <MenuBar></MenuBar>
      <S.AboutLayout>
        <Title> Made By</Title>
        <S.AboutLogoImg src={LogoSquare}></S.AboutLogoImg>
        <Info>멋쟁이 사자처럼</Info>
        <Script>안녕하세요안녕하세요</Script>
        <Part>PM/DESIGN</Part>
        <S.AboutItemBox>
          <Profile name="민동명" major="컴퓨터공학과22" />
          <Profile name="민동명" major="컴퓨터공학과22" />
          <Profile name="민동명" major="컴퓨터공학과22" />
        </S.AboutItemBox>
        <Part>BACKEND</Part>
        <S.AboutItemBox>
          <Profile name="민동명" major="컴퓨터공학과" />
          <Profile name="민동명" major="컴퓨터공학과" />
          <Profile name="민동명" major="컴퓨터공학과" />
        </S.AboutItemBox>
        <Part>FRONTEND</Part>
        <S.AboutItemBox>
          <Profile name="민동명" major="컴퓨터공학과" />
          <Profile name="민동명" major="컴퓨터공학과" />
          <Profile name="민동명" major="컴퓨터공학과" />
        </S.AboutItemBox>
        <Footer />
      </S.AboutLayout>
    </>
  );
}
