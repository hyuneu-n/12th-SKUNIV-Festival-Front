import styled from 'styled-components';
import espaImage from '../../public/esapa.svg';

// 부모 컨테이너 스타일
const SpecaiContainer = styled.div`
margin-top: 30%;  
margin-left: 30%;
margin-botoom: 30%;

`;

// 자식 컨테이너 스타일
const ItemContainer = styled.div`
position: relative; 
width: 140px;
height: 23vh;
background-color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin-top: 10%;
margin-bottom: 10%; 

`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
 
  width: 100%;  
  height: auto; /* 높이는 자동으로 조정됩니다. */
  border-radius: 20px; /* 컨테이너와 일치하도록 둥근 모서리 설정 */
  transform: rotate(180deg); 
`;
const Title = styled.div`
  position: relative;
  padding-top: 5%; 
  padding-left: 5%; 
  color: #2E4966;
  font-size: 22px;
  font-family: 'Pretendard Variable';
  font-weight: 900;
`;

const Time = styled.div`
  position: relative;
  padding-left: 5%;
  padding-top: 15%; 
  color: black;
  font-size: 15px;
  font-family: 'Pretendard Variable';
  font-weight: 600;
  opacity: 0.7;
  
`;





const SpecialComponent = () => {
  return (
    <SpecaiContainer>
    <ItemContainer>
      <ImageContainer>
        <Image src={espaImage} alt="에스파 이미지" />
        <Time>14:50 ~ 15:30</Time>
        <Title>두둠칫</Title>
      </ImageContainer>
    </ItemContainer>
  </SpecaiContainer>
  );
};

export default SpecialComponent;


