import { Link } from 'react-router-dom';
import styled from 'styled-components';
import play from '../assets/images/timetable/Vector (2).svg';
import PerformanceComponent from '../../src/components/Performance';
import PerformanceComponent2 from '../components/Performance2';
import PerformanceComponent3 from '../components/Performance3';
import SpecialComponent from '../../src/components/Specialguest';
import SpecialComponent2 from '../../src/components/Specialguest2';
import fromis9 from '../assets/images/timetable/fm9rec.png';
import haswa3  from '../assets/images/timetable/hwasarec.png';
import Backimage from '../assets/images/timetable/ttback.png';
import Header from '../components/Header';
import SpecialComponent3 from '../../src/components/Specialguest3';
import dynamicduo2 from'../assets/images/timetable/ddrec.png';
import SpecialComponent4 from '../../src/components/Specialguest4';
import React, { useState } from 'react';



const Layout = styled.div`
background-image: url(${Backimage}); 
  min-height: 100vh; // 최소 높이를 화면 전체로 설정
  background-size: cover; // 배경 이미지가 화면을 전체적으로 커버하도록 설정
  background-position: center; // 배경 이미지를 중앙에 위치시킴
  background-repeat: no-repeat; // 배경 이미지가 반복되지 않도록 설정
`;

const Title = styled.h1`
  margin-top: 10%;
  font-size: 18px;
  font-family: SUIT Variable, sans-serif;
  font-style: extra-bold;
  font-weight: bold; /* 굵기 추가 */
  text-align: center; /* 가운데 정렬 */
  display: flex;
  justify-content: start;
  margin-left: 5%;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%; /* 상단 여백 추가 */
  margin-bottom: 10%;
`;

const DateRow4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2%; /* 각 행의 상단 여백 조절 */
`;

const DateRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0%; /* 각 행의 상단 여백 조절 */
`;

const NumberFirst = styled.h1`
  font-size: 35px;
  font-family: SUIT Variable, sans-serif;
  font-weight: bold; /* 굵기 추가 */
  color: #55A161;
  margin: 0 25%;
  color: #55A161;
   
`;

const NumberSecond = styled.h1`
  font-size: 35px;
  font-family: SUIT Variable, sans-serif;
  font-weight: bold; /* 굵기 추가 */
  margin: 0 20%;
`;

const Day = styled.h1`
  font-size: 20px; /* 요일의 폰트 크기 조정 */
  font-family: SUIT Variable, sans-serif;
  font-weight: bold; /* 굵기 추가 */
  color: #5e5e5e;
  margin: 0 30%;
`;
const TimeTableContainer = styled.div`
  display: flex;

  flex-direction: column;
  width: 360px;
  height: 80vh;
  background-color: white;
  border-radius: 20px;
  margin: auto;
`;

const SmallTitle = styled.div`
  font-family: SUIT Variable, sans-serif;
  font-weight: bold; /* 굵기 추가 */
  font-size: 24px;
  margin-top: 10%;
`;

const SmallIcon = styled.img`
  width: 10px;
  margin-left: 200%;
`;

const TitleText = styled.div`
  margin-left: 32%;
  font-family: Paytone One;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #576141;
`;

const TitleText2 = styled.div`
  margin-left: 35%;
`;

const Textdiv = styled.div`
  display: flex;
  flex-direction: row; /* 가로로 정렬 */
  margin-left: 10%;
`;

const Textdiv2 = styled.div`
  display: flex;
  flex-direction: row; /* 가로로 정렬 */
  margin-left: 5%;
  margin-top: 10%;
`;

const Textdiv3 = styled.div`
  display: flex;
  flex-direction: column; /* 가로로 정렬 */
`;

const Centerline = styled.div`
  border-left: thick solid #000;
  height: 50%;
  left: 50%;
  position: absolute;
`;

const Circle = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #55a060;
  border-radius: 50%;
`;

const LineContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
`;

const Specaipadding = styled.div`
  margin-top: 120%;
`;

const Divider = styled.div`
  position: relative;
  top: 0px;
  left: 15px;
  height: 100px; /* 구분선의 높이 설정 */
  width: 2px; /* 구분선의 너비 설정 */
  background-color: #55A161;; /* 구분선의 색상 설정 */
`;

const Circle2 = styled.div`
  position: absolute;
  top: 50%;
  left: -6px; /* 구분선 위치에 맞게 조절 */
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: #55A161;;
  border-radius: 9999px;
`;
const Circle3 = styled.div`
  position: absolute;
  top: 100%;
  left: -6px; /* 구분선 위치에 맞게 조절 */
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: #55A161;;
  border-radius: 9999px;
`;

const DiverColmun = styled.div`
  display: flex;
  flex-direction: column;
`;

const WhiteContainer = styled.div`
  position: relative;
  margin-top: 35%;
`;
const WhiteContainer2 = styled.div`
  position: relative;
  margin-top: 10;
`;
export default function TimeTable2() {
  const StyledLink = styled(Link)`
  color: ${({ active }) => (active ? '#55A161' : 'black')};
`;
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
  return (
    <Layout>
      <Title>
        {' '}
        <Link to="/timetable">
          <SmallIcon src={play} />{' '}
        </Link>
        <TitleText>TIME TABLE</TitleText>
      </Title>
      <DateContainer>
        <DateRow4>
        
          <NumberFirst>9</NumberFirst>
          <NumberButton2 to="/timetable4">10</NumberButton2>
        </DateRow4>
        <DateRow>
          <Day>thu</Day>
          <Day>fri</Day>
        </DateRow>
      </DateContainer>
      <Textdiv>
        <Textdiv3>
          <PerformanceComponent name="SDR" time="16:30 ~ 17:00" />

          <PerformanceComponent name="철인 28호" time="17:30 ~ 18:00" />

          <PerformanceComponent name="화락" time="19:00 ~ 19:30" />

          <PerformanceComponent name="SDR" time="20:00 ~ 20:30" />
          <WhiteContainer></WhiteContainer>
 
          <SpecialComponent2
            imageSrc={fromis9}
            altText="프로미스나인 이미지"
            timeText="21:30 ~ 22:00"
            titleText="fromis_9"
          />
        </Textdiv3>
        <DiverColmun>
          <Divider>
            <Circle2 />
            <Circle3 />
          </Divider>
          
          <Divider>
            <Circle2 />
            <Circle3 />
            
          </Divider>
          <Divider>
            <Circle2 />
            <Circle3 />

          </Divider>
          <Divider>
          <Circle2 />
            
          </Divider>
          <Divider>
            {' '}
            <Circle2/>{' '}
            
          </Divider>
          <Divider>
          <Circle2 />
             </Divider>
             <Divider>
             <Circle2/>
            </Divider>
            <Divider>
         
              </Divider>
        </DiverColmun>
        <DiverColmun>
          <WhiteContainer></WhiteContainer>
          <PerformanceComponent2 name="유드림" time="17:00 ~ 17:30" />
          <PerformanceComponent2 name="그라미" time="18:30 ~ 19:00" />
          <PerformanceComponent3 name="꽃과 어린왕자" time="19:30 ~ 20:00" />
         
          <SpecialComponent3
            imageSrc={haswa3}
            altText="haswa3 이미지"
            timeText="21:00 ~ 21:30"
            titleText="Hwasa"
          />
          <SpecialComponent4
            imageSrc={dynamicduo2}
            altText="dynamicduo2 이미지"
            timeText="22:00 ~ 22:30"
            titleText="Dynamic duo"
          />
         
        </DiverColmun>
      </Textdiv>
    </Layout>
  );
}
