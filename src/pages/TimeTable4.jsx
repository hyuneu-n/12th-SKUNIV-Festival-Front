import { Link } from 'react-router-dom';
import styled from 'styled-components';
import play from '../assets/images/timetable/play.svg';
import PerformanceComponent from '../../src/components/Performance';
import PerformanceComponent2 from '../../src/components/Performance2';
import SpecialComponent3 from '../../src/components/Specialguest3';
import SpecialComponent2 from '../../src/components/Specialguest2';
import Footer from '../components/Footer';
import Heize2 from '../assets/images/timetable/Heize2.png';
import Day6 from '../assets/images/timetable/Day6(2).svg';
import DJ2 from '../assets/images/timetable/DJ2.svg';


import Backimage from '../assets/images/timetable/background.png';


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
  color: #55A161;
  margin: 0 30%;
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
  margin-left: 10%;
`;

const TitleText = styled.div`
  margin-left: 30%;
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
export default function TimeTable4() {
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
        <DateRow>
          <NumberFirst>9</NumberFirst>
          <NumberSecond>10</NumberSecond>
        </DateRow>
        <DateRow>
          <Day>thu</Day>
          <Day>fri</Day>
        </DateRow>
      </DateContainer>
      <Textdiv>
        <Textdiv3>
          <PerformanceComponent name="실용음악학부" time="16:30 ~ 18:30" />

          <PerformanceComponent name="워커스" time="19:00 ~ 19:30" />

        
        
 
          <SpecialComponent2
            imageSrc={Heize2}
            altText="헤이즈 이미지"
            timeText="20:30 ~ 21:00"
            titleText="Heize"
          />
            <WhiteContainer></WhiteContainer>
<SpecialComponent2
            imageSrc={DJ2}
            altText="DJ2 이미지"
            timeText="21:30 ~ 22:30"
            titleText="DJ SOYEE x VANA"
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
          <Circle3 />
            

          </Divider>
          <Divider>
          <Circle3 />
            
          </Divider>
          <Divider>
        
           
            
          </Divider>
          <Divider>
          <Circle2 />
             </Divider>
             <Divider>
              
            </Divider>
        </DiverColmun>
        <DiverColmun>
          <WhiteContainer></WhiteContainer>
          <PerformanceComponent2 name="예교원 실용무용" time="17:00 ~ 17:30" />
          <PerformanceComponent2 name="실용무용" time="18:30 ~ 19:00" />
          <WhiteContainer></WhiteContainer>
          <SpecialComponent3
            imageSrc={Day6}
            altText="Day6 이미지"
            timeText="21:00 ~ 21:30"
            titleText="Day6"
          />


        
        </DiverColmun>
      </Textdiv>

      <Footer />
    </Layout>
  );
}
