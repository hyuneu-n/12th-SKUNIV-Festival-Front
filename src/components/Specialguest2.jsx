import styled from 'styled-components';
import Haswa from '../assets/images/timetable/Hawsa.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; /* 컨테이너들을 세로로 배열 */
  align-items: center; /* 수직 정렬 */
  margin-bottom: 5%;
`;
// 부모 컨테이너 스타일
const SpecaiContainer = styled.div`
  margin-top: 5%;
  margin-left: 0%;
  margin-botoom: 5%;
`;

// 자식 컨테이너 스타일
const ItemContainer = styled.div`
  position: relative;
  width: 136px;
  height: 20vh;
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
  border-radius: 0px; /* 컨테이너와 일치하도록 둥근 모서리 설정 */
`;
const Title = styled.div`
  position: relative;
  padding-top: 5%;
  color: #55A161;
  font-size: 20px;
  font-family: 'Pretendard Variable';
  font-weight: 610;
  text-align: start;
  padding-left: 14%;
`;

const Time = styled.div`
  position: relative;
  text-align: center;
  padding-top: 5%;
  color: black;
  font-size: 15px;
  font-family: 'Pretendard Variable';
  font-weight: 600;
  opacity: 0.7;
`;

const SpecialComponent2 = ({ imageSrc, altText, timeText, titleText }) => {
  return (
    <Wrapper>
      <SpecaiContainer>
        <ItemContainer>
          <ImageContainer>
            <Image src={imageSrc} alt={altText} />
            <Time>{timeText}</Time>
            <Title>{titleText}</Title>
          </ImageContainer>
        </ItemContainer>
      </SpecaiContainer>
    </Wrapper>
  );
};

export default SpecialComponent2;
