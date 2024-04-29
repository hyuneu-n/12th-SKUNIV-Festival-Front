import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; /* 컨테이너들을 세로로 배열 */
  align-items: center; /* 수직 정렬 */
  margin-bottom: 5%;
`;

const Container = styled.div`
  position: relative;
  width: 140px;
  height: 80px;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const Container2 = styled.div`
  position: relative;
  width: 140px;
  height: 80px;
  margin-top: 50%;
  margin-bottom: 50%;
`;

const Container3 = styled.div`
  position: relative;
  width: 140px;
  height: 80px;
  margin-top: 50%;
  margin-bottom: 50%;
`;

const InnerContainer = styled.div`
  position: absolute;
  width: 140px;
  height: 80px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Text1 = styled.div`
  position: absolute;
  left: 59px;
  top: 39px;
  color: #55A060;
  font-size: 22px;
  font-family: 'Pretendard Variable';
  font-weight: 900;
`;

const Text2 = styled.div`
  position: absolute;
  left: 18px;
  top: 15px;
  color: black;
  font-size: 15px;
  font-family: 'Pretendard Variable';
  font-weight: 600;
  opacity: 0.7;
`;

const PerformanceComponent = ({ name, time }) => {
  return (
    <Wrapper>
      {/* 추가된 컨테이너 1 */}
      <Container>
        <InnerContainer />
        <Text1>{name}</Text1>
        <Text2>{time}</Text2>
      </Container>
      {/* 추가된 컨테이너 2 */}
      <Container>
        <InnerContainer />
        <Text1>{name}</Text1>
        <Text2>{time}</Text2>
      </Container>
      {/* 추가된 컨테이너 3 */}
      <Container2>
        <InnerContainer />
        <Text1>{name}</Text1>
        <Text2>{time}</Text2>
      </Container2>
      <Container3>
        <InnerContainer />
        <Text1>{name}</Text1>
        <Text2>{time}</Text2>
      </Container3>
    </Wrapper>
  );
};

export default PerformanceComponent;
