import styled from 'styled-components';
import MenuBar from '../components/MenuBar';
import Vector from '../assets/images/timetable/Vector.svg';
import AdditionalInfo4 from '../components/AdditionalInfo4';
import AdditionalInfo5 from '../components/AdditionalInfo5';
import AdditionalInfo6 from '../components/AdditionalInfo6';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Backimage from '../assets/images/timetable/background.png';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Layout = styled.div`
background-image: url(${Backimage}); 
  min-height: 100vh; // 최소 높이를 화면 전체로 설정
  background-size: cover; // 배경 이미지가 화면을 전체적으로 커버하도록 설정
  background-position: center; // 배경 이미지를 중앙에 위치시킴
  background-repeat: no-repeat; // 배경 이미지가 반복되지 않도록 설정
`;

const Title = styled.h1`
  margin-top: 7%;
  font-size: 18px;
  font-family: SUIT Variable, sans-serif;
  font-style: extra-bold;
  font-weight: bold; /* 굵기 추가 */
  text-align: center; /* 가운데 정렬 */
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%; /* 상단 여백 추가 */
  margin-bottom: 10%;
`;

const DateRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0%; /* 각 행의 상단 여백 조절 */
`;

const NumberFirst = styled.h1`
  font-size: 35px;
  font-family: SUIT Variable, sans-serif;
  font-weight: bold; /* 굵기 추가 */
  margin: 0 30%;
  color: #55A161;
`;

const NumberSecond = styled.h1`
  font-size: 35px;
  font-family: SUIT Variable, sans-serif;
  font-weight: bold; /* 굵기 추가 */
  margin: 0 30%;
`;

const Day = styled.h1`
  font-size: 20px; /* 요일의 폰트 크기 조정 */
  font-family: SUIT Variable, sans-serif;
  font-weight: bold; /* 굵기 추가 */
  color: #5e5e5e;
  margin: 0 40%;
`;
const TimeTableContainer = styled.div`
  display: flex;

  flex-direction: column;
  width: 330px;
  height: 720px;
  background: linear-gradient(90deg, rgba(244, 231, 228, 0.5) 10%, rgba(245, 248, 234, 0.5) 100%); // RGBA 형식으로 투명도 적용
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset;
  border-radius: 30px;
  border: 1px solid #DCDCDC;
  border-radius: 20px;
  margin: auto;
  margin-bottom: 10%;
`;

const SmallTitle = styled.div`
  font-family: SUIT Variable, sans-serif;
  font-weight: bold; /* 굵기 추가 */
  font-size: 24px;
  margin-top: 10%;
  margin-left: 7%;
`;

const SmallIcon = styled.img`
  width: 10px;
  margin-left: 10%;
`;

const Container = styled.div`
  position: relative;
  margin-bottom: 20%;
`;

const GrayBackground = styled.div`
  width: 133px;
  height: 43px;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(90deg, rgba(244, 231, 228, 0.8) 0%, rgba(245, 248, 234, 0.5) 100%); // RGBA 형식으로 투명도 적용
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset;
  border-radius: 30px;
  border: 1px #DCDCDC solid;
  
`;

const Text = styled.div`
  left: 15px;
  top: 14px;
  left: 18px;
  position: absolute;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
  font-size: 15px;
  font-family: 'Pretendard';
  font-weight: 700;
  word-wrap: break-word;
`;
const VetcorIcon = styled.img`
  width: 10px;
  height: 10px;
`;


const StyledLink = styled(Link)`
  color: ${({ active }) => (active ? '#55A161' : 'black')};
`;

const NumberButton = ({ to, children }) => {
    const [isActive, setIsActive] = useState(true);
  
    const handleClick = () => {
      setIsActive(!isActive);
    };
    return (
      <NumberFirst>
        <StyledLink to={to} active={isActive} onClick={handleClick}>
          {children}
        </StyledLink>
      </NumberFirst>
    );
  };
  
  const NumberButton2 = ({ to, children }) => {
    const [isActive, setIsActive] = useState(false);
  
    const handleClick = () => {
      setIsActive(!isActive);
    };
    return (
      <NumberFirst>
        <StyledLink to={to} active={isActive} onClick={handleClick}>
          {children}
        </StyledLink>
      </NumberFirst>
    );
  };


export default function TimeTable3() {
  return (
    <Layout>
      <MenuBar></MenuBar>
      <Header title="TIME TABLE" />

      <DateContainer>
        <DateRow>
        <NumberButton2 to="/timetable">9</NumberButton2>
        <NumberButton to="/timetable4">10</NumberButton>
        </DateRow>
        <DateRow>
          <Day>thu</Day>
          <Day>fri</Day>
        </DateRow>
      </DateContainer>
      <TimeTableContainer>
        <SmallTitle>
          <Container>
            <GrayBackground />
            <Text>
              TIME TABLE <VetcorIcon src={Vector} alt="Vetcor Icon" />
            </Text>
          </Container>
        </SmallTitle>
        <AdditionalInfo4/>
        <AdditionalInfo5/>
        <AdditionalInfo6/>
      </TimeTableContainer>
      <Footer />
    </Layout>
  );
}
