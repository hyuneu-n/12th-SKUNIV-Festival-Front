import styled from 'styled-components';

export const ProfileLayout = styled.div`
  display: flex;
  width: 40%;
  height: 137px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

export const ProfileItemBox = styled.div`
  width: 111px;
  height: auto;
  display: flex;
  flex-direction: column;
  background-image: url('/aboutBox.png');
  background-size: cover; /* 이미지를 박스에 꽉 채우도록 설정 */
  background-repeat: no-repeat; /* 이미지 반복 방지 */
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 9px;
  margin: 10%;
  gap: 3px;
`;

export const ProfileLogoImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const ProfileNameParagraph = styled.p`
  font-size: 14px;
  width: 100%;
  font-family: 'Pretendard Variable', arial;
  font-style: bold;
  text-align: center;
`;

export const ProfileMajorParagraph = styled.p`
  font-size: 12px;
  width: 100%;
  font-family: 'Pretendard Variable', arial;
  font-weight: 300;
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
`;