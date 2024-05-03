import styled from 'styled-components';

export const ProfileLayout = styled.div`
  display: flex;
  width: 30%;
  height: 137px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

export const ProfileItemBox = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin: 10%;
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
  text-align: center;
`;

export const ProfileRoleParagraph = styled.p`
  font-size: 12px;
  width: 100%;
  font-family: 'Pretendard Variable', arial;
  font-weight: 300;
  text-align: center;
`;