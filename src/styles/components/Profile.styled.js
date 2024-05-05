import styled from 'styled-components';

export const ProfileLayout = styled.div`
  display: flex;
  width: 300px; 
  height: 80px;
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
`;

export const NameBlockContainer = styled.div`
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 30px;
    align-items: center;
    padding-left: 15px;
    & img {
      width: 80px;
      height: auto;
      margin-top: 8px;
      margin-left: 0px;
    }
    & p {
      margin-left: 11px;
      font-size: 20px;
      font-family: Pretendard;
      font-weight: bold;
    }
    & p:last-child {
      margin-left: 10px;
      font-size: 10px;
    }
  }
`;

export const ProfileItemBox = styled.div`
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90px;
    padding-top: 2px;
    justify-content: center;
    background-image: url('/ProfileBoxLarge.png');;
    background-size: 100% 100%;
  }

`;

export const ProfileLogoImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const ProfileRoleParagraph = styled.p`

  padding-left: 69px;
  padding-right: 10px;
  font-family: 'Pretendard Variable', arial;
  margin: 2px;
  font-size: 5%;
  @media screen and (max-width: 500px) {
    padding-left: 69px;
    padding-right: 10px;
    font-family: 'Pretendard Variable', arial;
    margin: 2px;
    margin-left: 37px;
    font-size: 11px;
  }
`;