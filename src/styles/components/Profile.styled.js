import styled from 'styled-components';

export const ProfileLayout = styled.div`
  display: flex;
  width: 127px;
  height: 185px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF96;
  border-radius: 15px;
`;

export const ProfileItemBox = styled.div`
  display: flex;
  width: 127px;
  height: 185px;
  flex-direction: column;
  background-image: url('/aboutBox.png');
  background-size: cover; /* 이미지를 박스에 꽉 채우도록 설정 */
  background-repeat: no-repeat; /* 이미지 반복 방지 */
  border-radius: 15px;
  justify-content: flex-start;
  align-items: center;
  padding: 10% 0% 0% 0%;
  background-color: #FFFFFF;
  gap: 3px;
`;

export const ProfileLogoImg = styled.img`
  width: 63px;
  height: 68px;
`;

export const ProfileNameParagraph = styled.p`
  font-size: 14px;
  width: 100%;
  font-family: 'Pretendard Variable', arial;
  font-style: bold;
  text-align: center;
`;

export const ProfileMajorParagraph = styled.p`
  font-size: 10px;
  width: 100%;
  font-family: 'Pretendard Variable', arial;
  font-weight: 200;
  white-space: nowrap;
  text-align: center;

`;

export const ProfileRoleParagraph = styled.p`
  font-size: 12px;
  width: 100%;
  font-family: 'Pretendard Variable', arial;
  font-weight: 300;
  text-align: left;
  white-space: nowrap;
  margin-left: 10px;
`;