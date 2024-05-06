import Profile from '../components/Profile';
import LogoSquare from '../assets//images/skulikelion_logo_1080.png';
import Hansup from '../assets//images/HANSUP.png';
import dong from '../assets//images/dong.png';
import jung from '../assets//images/jung.png';
import hyun from '../assets//images/hyun.png';
import seo from '../assets//images/seo.png';
import so from '../assets//images/so.png';
import seung from '../assets//images/seung.png';
import hyo from '../assets//images/hyo.png';
import Chang from '../assets//images/Chang.png';
import styled from 'styled-components';
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
      <Header title="MADE BY" />
      <S.AboutLayout>
        <S.AboutTitleHeading style={{ marginTop: '0px' }}></S.AboutTitleHeading>
        <S.AboutLogoImg src={LogoSquare} style={{ width: '100px', height: 'auto', paddingTop: '20px', paddingBottom: '13px' }}></S.AboutLogoImg>
        <S.AboutInfoHeading>서경대 멋쟁이사자처럼 12TH</S.AboutInfoHeading>
        <S.AboutPartHeading style={{ marginBottom: '20px' }}>PM · DESIGN</S.AboutPartHeading>
        <S.AboutItemBox>
          <Profile
            name="민동명"
            major="컴퓨터공학과 22"
            image={dong}
            role={
              <>
                기능 아이디어 구상<br />
              </>
            } />

          <Profile
            name="김정현"
            major="아트테크놀로지학과 23"
            image={jung}
            role="기능 아이디어 구상" />
          <Profile
            name="유서진"
            major="디자인학부 22"
            image={seo}
            role="기능 아이디어 구상" />
        </S.AboutItemBox>

        <S.AboutPartHeading style={{ marginTop: '50px', marginBottom: '20px' }}>DEVELOPERS</S.AboutPartHeading>
        <S.AboutItemBox>
          <Profile
            name="서현은"
            major="컴퓨터공학과 22"
            image={hyun}
            role="기능 아이디어 구상" />
          <Profile 
            name="김소연"
            major="소프트웨어학과 20"
            image={so}
            role="기능 아이디어 구상" />
          <Profile
            name="고승범"
            major="소프트웨어학과 18"
            image={seung}
            role="기능 아이디어 구상" />
        </S.AboutItemBox>
        <S.AboutItemBox style={{ marginTop: '20px' }}>

          <Profile
            name="김효중"
            major="컴퓨터공학과 19"
            image={hyo}
            role="기능 아이디어 구상" />
          <Profile
            name="유창호"
            major="컴퓨터공학과 20"
            image={Chang}
            role="기능 아이디어 구상" />
        </S.AboutItemBox>

        <S.AboutLogoImg src={Hansup} style={{ width: '130px', height: 'auto', paddingTop: '60px', paddingBottom: '0px' }}></S.AboutLogoImg>
        <S.AboutPartHeading style={{ marginBottom: '30px' }}></S.AboutPartHeading>
      </S.AboutLayout>
    </>
  );
}
