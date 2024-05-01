import styled from 'styled-components';
import MenuBar from '../components/MenuBar';
import Vector from '../../public/timetable/Vector.svg'
import AdditionalInfo from '../components/AdditionalInfo';
import AdditionalInfo2 from '../components/AdditionalInfo2';
import AdditionalInfo3 from '../components/AdditionalInfo3';
import { Link } from 'react-router-dom';


 
const Layout = styled.div`
  background-image: url('../../public/background.svg');
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
  margin-top: 5%; /* 각 행의 상단 여백 조절 */
`;

const NumberFirst = styled.h1`
  font-size: 35px;
  font-family: SUIT Variable, sans-serif;
  font-weight: bold; /* 굵기 추가 */
  margin: 0 30%;
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
  margin: 0 30%;
`;
const TimeTableContainer = styled.div`
  display: flex;

  flex-direction: column;
  width: 360px;
  height: 95vh;
  background-color: white;
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
margin-bottom: 10%;
`;

const GrayBackground = styled.div`
  width: 140px;
  height: 43px;
  left: 0;
  top: 1px;
  position: absolute;
  background: #DCDCDC;
  border-radius: 30px;
`;

const Text = styled.div`
  left: 15px;
  top: 15px;
  position: absolute;
  text-align: center;
  color: rgba(0, 0, 0, 0.70);
  font-size: 15px;
  font-family: 'Sumana';
  font-weight: 700;
  word-wrap: break-word;
`;

const VetcorIcon = styled.img`
width: 10px;
height: 10px;
`;
 
export default function TimeTable() {
  return (
    <>
     
      <MenuBar></MenuBar>
      <Title>TIME TABLE</Title>
       
     
      <DateContainer>
        <DateRow>
          <NumberFirst>
          <Link to="/timetable2">
            9
          </Link>
            
            </NumberFirst>
          <NumberSecond>
            <Link to="/timetable2">10</Link>
          </NumberSecond>
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
      <Text >TIME TABLE <VetcorIcon src={Vector} alt="Vetcor Icon" /></Text>
     

       
    </Container>
        </SmallTitle>
        <AdditionalInfo />
        <AdditionalInfo2/>
        <AdditionalInfo3 />
        

      </TimeTableContainer>
    </>
  );
}
