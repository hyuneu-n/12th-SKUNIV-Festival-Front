// import styled from 'styled-components';

// export const ProfileLayout = styled.div`
//   display: flex;
//   width: 127px;
//   height: 185px;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   align-items: center;
//   background-color: #FFFFFF96;
//   border-radius: 15px;
// `;

// export const ProfileItemBox = styled.div`
//   display: flex;
//   width: 100px;
//   height: auto;
//   flex-direction: column;
//   background-image: url('/ProfileBoxLarge.png');
//   background-size: cover; 
//   background-repeat: no-repeat;
//   border-radius: 15px;
//   justify-content: flex-start;
//   align-items: center;
//   padding: 10% 0% 0% 0%;
//   gap: 3px;
// `;

// export const ProfileLogoImg = styled.img`
//   width: 65px;
//   height: auto;
// `;

// export const ProfileNameParagraph = styled.p`
//   font-size: 14px;
//   width: 100%;
//   font-family: 'Pretendard Variable', arial;
//   font-style: bold;
//   text-align: center;
// `;

// export const ProfileMajorParagraph = styled.p`
//   font-size: 10px;
//   width: 100%;
//   font-family: 'Pretendard Variable', arial;
//   font-weight: 200;
//   white-space: nowrap;
//   text-align: center;

// `;

// export const ProfileRoleParagraph = styled.p`
//   font-size: 12px;
//   width: 100%;
//   font-family: 'Pretendard Variable', arial;
//   font-weight: 300;
//   text-align: left;
//   white-space: nowrap;
//   margin-left: 10px;
// `;

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