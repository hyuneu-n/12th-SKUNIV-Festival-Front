import styled from 'styled-components';

// 부모 컨테이너 스타일
const PerformanceContainer = styled.div`
  margin-left: 10%;
`;

// 자식 컨테이너 스타일
const ItemContainer = styled.div`
width: 100px;
height: 10vh;
background-color: white;
border-radius: 20px;
margin-top: 10%;
margin-bottom: 10%;

 
`;

const PerformanceComponent = () => {
  return (
    <PerformanceContainer>
     
      <ItemContainer>컨테이너</ItemContainer>
      <ItemContainer>컨테이너</ItemContainer>
       
      <ItemContainer>컨테이너</ItemContainer>
    </PerformanceContainer>
  );
};

export default PerformanceComponent;


