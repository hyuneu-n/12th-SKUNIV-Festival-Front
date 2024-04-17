import Profile from '../components/Profile';
import LogoSquare from '../../public/LogoSquare.svg';
import styled from 'styled-components';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import * as S from '../styles/pages/AboutPage.styled';

const Script = styled.h1`
  margin-top: 19px;
  margin-bottom: 39px;
  font-size: 13px;
  font-family: Pretendard, sans-serif;
  font-weight: 200;
`;

export default function MadeBy() {
  return (
    <>
      <MenuBar></MenuBar>
      <S.AboutLayout>
        <S.AboutTitleHeading> Made By</S.AboutTitleHeading>
        <S.AboutLogoImg src={LogoSquare}></S.AboutLogoImg>
        <S.AboutInfoHeading>멋쟁이 사자처럼</S.AboutInfoHeading>
        <Script>안녕하세요안녕하세요</Script>
        <S.AboutPartHeading>PM/DESIGN</S.AboutPartHeading>
        <S.AboutItemBox>
          <Profile name="민동명" major="컴퓨터공학과22" />
          <Profile name="민동명" major="컴퓨터공학과22" />
          <Profile name="민동명" major="컴퓨터공학과22" />
        </S.AboutItemBox>
        <S.AboutPartHeading>BACKEND</S.AboutPartHeading>
        <S.AboutItemBox>
          <Profile name="민동명" major="컴퓨터공학과" />
          <Profile name="민동명" major="컴퓨터공학과" />
          <Profile name="민동명" major="컴퓨터공학과" />
        </S.AboutItemBox>
        <S.AboutTitleHeading>FRONTEND</S.AboutTitleHeading>
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
