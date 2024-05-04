import styled from 'styled-components';

export const AboutLayout = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutLogoImg = styled.img`
  width: 40%;
`;

export const AboutItemBox = styled.div`
  display: flex;
  width: 100%;
  gap: 10px; /* 간격 조절 */
  justify-content: space-around;
`;
export const AboutTitleHeading = styled.h1`
  margin-top: 69px;
  font-size: 15px;
  font-family: SUIT Variable, sans-serif;
  font-style: extra-bold;
`;

export const AboutInfoHeading = styled.h1`
  margin-top: 16px;
  font-size: 15px;
  font-family: Pretendard Variable, sans-serif;
  font-style: bold;
`;

export const AboutPartHeading = styled.h1`
  margin-top: 20px;
  font-size: 15px;
  font-family: Pretendard, sans-serif;
  font-style: bold;
`;
