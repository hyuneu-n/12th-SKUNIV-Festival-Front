import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; /* 컨테이너들을 세로로 배열 */
  align-items: center; /* 수직 정렬 */
  margin-bottom: 5%;
  margin-left: 45%;
`;

const Container = styled.div`
  position: relative;
  width: 140px;
  height: 80px;
  margin-top: 10%;
  margin-bottom: 5%;
`;
 

const InnerContainer = styled.div`
  position: absolute;
  width: 136px;
  height: 80px;
  background-color: white;
  opacity: 0.8;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column; /* 컨테이너들을 세로로 배열 */
`;
const Text1 = styled.div`
 
position: relative;
  text-align: start; 
  left:15%;
top: 30%; /* 위쪽 기준으로 가운데 정렬을 위해 50%로 설정 */
color: #55A161;
font-size: 20px;
font-family: 'Pretendard Variable';
font-weight: 900;
`;

const Text2 = styled.div`
  position: relative;
  text-align: center; /* 왼쪽 기준으로 가운데 정렬을 위해 50%로 설정 */
  top: 22%; /* 위쪽 기준으로 가운데 정렬을 위해 50%로 설정 */
 color: black;
  font-size: 15px;
  font-family: 'Pretendard Variable';
  font-weight: 600;
  opacity: 0.7;
`;
const PerformanceComponent2 = ({ name, time }) => {
  return (
    <Wrapper>
       
      {/* 추가된 컨테이너 1 */}
      <Container>
        <InnerContainer />
        <Text2>{time}</Text2>
        <Text1>{name}</Text1>
       
      </Container>
      {/* 추가된 컨테이너 2 */}
       
    </Wrapper>
  );
};

export default PerformanceComponent2;
