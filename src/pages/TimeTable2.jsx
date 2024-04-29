import styled from 'styled-components';
import play from '../../public/timetable/play.svg';
import PerformanceComponent from '../../src/components/Performance';
import SpecialComponent from '../../src/components/Specialguest';
import Footer from '../components/Footer';
 

 
 

const Layout = styled.div`
  background-image: url('../../public/background.svg');
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
    
`;


const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%; /* 상단 여백 추가 */
    margin-bottom: 10%
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
    height: 80vh;
    background-color: white;
    border-radius: 20px;
    margin: auto;
    
`;
 

const SmallTitle  = styled.div`
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
margin-left: 10%;
`;

const TitleText2 = styled.div`
margin-left: 30%;
`;

const Textdiv = styled.div`
display: flex;
flex-direction: row; /* 가로로 정렬 */
 
`;





export default function TimeTable2() {
  return (
    <div className="app">
      <Title><SmallIcon src={play}/><TitleText>TIME TABLE</TitleText></Title>
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
        <TitleText>performance</TitleText> 
        <TitleText2>special guest</TitleText2>
        </Textdiv>
        <Textdiv>
        <PerformanceComponent></PerformanceComponent>
        
        <SpecialComponent></SpecialComponent>
     
        </Textdiv>

        
        <Footer />
      
      
      
    </div>
  );

  
}


