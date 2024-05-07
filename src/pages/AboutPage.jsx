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

        <S.AboutPartHeading style={{ marginTop: '20px', marginBottom: '20px' }}>총괄</S.AboutPartHeading>
        <S.AboutItemBox style={{ marginBottom: '50px' }}>
          <Profile
            name="서현은"
            major="컴퓨터공학과 22"
            image={hyun}
            role={
              <>
                백엔드 전 로직 구현, 대피로 애니메이션 제작, <br />
                프론트 UI 작업 등
              </>
            } />
          </S.AboutItemBox>
          
        <S.AboutPartHeading style={{ marginBottom: '20px' }}>PM · DESIGN</S.AboutPartHeading>
        <S.AboutItemBox>
          <Profile
            name="민동명"
            major="컴퓨터공학과 22"
            image={dong}
            role={
              <>
                기획 · 디자인 파트장, 기능 구상, X배너 제작 등<br />
              </>
            } />

          <Profile
            name="김정현"
            major="아트앤테크놀로지학과 23"
            image={jung}
            role={
              <>
                디자인 전반 담당, 공지 제작, X배너 제작 등<br />
              </>
            } />
          <Profile
            name="유서진"
            major="디자인학부 22"
            image={seo}
            role={
              <>
                기능 아이디어 구상, 부스맵 제작, 공지 제작 등<br />
              </>
            } />
        </S.AboutItemBox>

        <S.AboutPartHeading style={{ marginTop: '50px', marginBottom: '20px' }}>DEVELOPERS</S.AboutPartHeading>
        <S.AboutItemBox>
          <Profile 
            name="김소연"
            major="소프트웨어학과 20"
            image={so}
            role={
              <>
                백엔드 서버 구축 및 설계, 이미지 데이터 처리, 공지사항 상세 페이지 기능 구현 등
              </>
            } />

          <Profile
            name="고승범"
            major="소프트웨어학과 18"
            image={seung}
            role={
              <>
                프론트 파트장, 타임테이블 전반 기능 구현 등<br />
              </>
            } />
        </S.AboutItemBox>
        <S.AboutItemBox style={{ marginTop: '10px' }}>

          <Profile
            name="김효중"
            major="컴퓨터공학과 19"
            image={hyo}
            role={
              <>
                ABOUT, 메뉴, 공지, 분실물 페이지 구현,<br />API 서버 연동 등<br />
              </>
            } />
          <Profile
            name="유창호"
            major="컴퓨터공학과 20"
            image={Chang}
            role={
              <>
                홈화면, 부스 위치 애니메이션, 부스 모달 관련 <br />기능 구현, API 서버 연동 등
              </>
            } />
        </S.AboutItemBox>

        <S.AboutLogoImg src={Hansup} style={{ width: '130px', height: 'auto', paddingTop: '60px', paddingBottom: '0px' }}></S.AboutLogoImg>
        <S.AboutPartHeading style={{ marginBottom: '30px' }}></S.AboutPartHeading>
      </S.AboutLayout>
    </>
  );
}