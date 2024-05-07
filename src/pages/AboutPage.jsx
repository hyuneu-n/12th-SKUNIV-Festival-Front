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
                - 백엔드 파트장<br />
                - 공지 및 분실물 관련 전 API 구현<br />
                - 부스페이지 모달 UI 구현<br />
                - AED·대피로 애니메이션 제작 <br />
                ㅤ및 페이지 구현
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
                - 기획 · 디자인 파트장<br />
                - 홍보게시글 작성 및 디자인<br />
                - X배너 디자인<br />
              </>
            } />

          <Profile
            name="김정현"
            major="아트테크놀로지학과 23"
            image={jung}
            role={
              <>
                - 전 페이지 디자인<br />
                - 홍보게시글 작성 및 디자인<br />
                - X배너 디자인<br />
              </>
            } />
          <Profile
            name="유서진"
            major="디자인학부 22"
            image={seo}
            role={
              <>
                - <br />
                - <br />
                - <br />
                - <br />
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
                - 백엔드 서버 구축 및 설계<br />
                - 이미지 데이터 처리<br />
                - 공지사항 상세 페이지 기능 구현<br />
                - 타임테이블 일부 로직 추가<br />
              </>
            } />

          <Profile
            name="고승범"
            major="소프트웨어학과 18"
            image={seung}
            role={
              <>
                - 프론트 파트장<br />
                - 타임테이블 전반 기능 구현<br />
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
                - ABOUT 페이지 구현<br />
                - 메뉴 기능 구현<br />
                - 공지 조회 및 등록페이지 구현<br />
                - 분실물 조회 및 등록페이지 구현<br />
                - API 서버 연동<br />
              </>
            } />
          <Profile
            name="유창호"
            major="컴퓨터공학과 20"
            image={Chang}
            role={
              <>
                - 홈화면 기능 전반 구현<br />
                - 부스 위치 애니메이션 구현<br />
                - 부스 모달 관련 기능 구현<br />
                - API 서버 연동<br />
              </>
            } />
        </S.AboutItemBox>

        <S.AboutLogoImg src={Hansup} style={{ width: '130px', height: 'auto', paddingTop: '60px', paddingBottom: '0px' }}></S.AboutLogoImg>
        <S.AboutPartHeading style={{ marginBottom: '30px' }}></S.AboutPartHeading>
      </S.AboutLayout>
    </>
  );
}