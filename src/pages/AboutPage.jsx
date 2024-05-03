import Profile from '../components/Profile';
import LogoSquare from '../assets//images/skulikelion_logo_1080.png';
import Hansup from '../assets//images/HANSUP.png';
import styled from 'styled-components';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import * as S from '../styles/pages/AboutPage.styled';
import Header from '../components/Header';

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
      <Header title="ABOUT" />
      <S.AboutLayout>
        <S.AboutTitleHeading style={{ marginTop: '30px' }}></S.AboutTitleHeading>
        <S.AboutInfoHeading>멋쟁이사자처럼 서경대학교</S.AboutInfoHeading>
        <S.AboutLogoImg src={LogoSquare} style={{ width: '100px', height: 'auto', paddingTop: '23px', paddingBottom: '10px' }}></S.AboutLogoImg>
        
        <Script>페이지를 제작한 멋쟁이들~</Script>
        <S.AboutPartHeading style={{ marginBottom: '10px' }}>PM/DESIGN</S.AboutPartHeading>
        <S.AboutItemBox>
          <Profile name="민동명" major="컴퓨터공학과22" />
          <Profile name="민동명" major="컴퓨터공학과22" />
          <Profile name="민동명" major="컴퓨터공학과22" />
        </S.AboutItemBox>
        <S.AboutPartHeading style={{ marginTop: '50px', marginBottom: '10px' }}>DEVELOPERS</S.AboutPartHeading>
        <S.AboutItemBox>
          <Profile name="민동명" major="컴퓨터공학과" />
          <Profile name="민동명" major="컴퓨터공학과" />
          <Profile name="민동명" major="컴퓨터공학과" />
        </S.AboutItemBox>
        <S.AboutItemBox>
          <Profile name="민동명" major="컴퓨터공학과" />
          <Profile name="민동명" major="컴퓨터공학과" />
          <Profile name="민동명" major="컴퓨터공학과" />
        </S.AboutItemBox>

        <S.AboutLogoImg src={Hansup} style={{ width: '130px', height: 'auto', paddingTop: '60px', paddingBottom: '0px' }}></S.AboutLogoImg>
        <S.AboutPartHeading style={{ marginBottom: '3px' }}>총학생회 한마디</S.AboutPartHeading>
        <Script>멋사야 고맙다</Script>
        <Footer />
      </S.AboutLayout>
    </>
  );
}
