import styled from 'styled-components';

import i from '../../assets/images/homePage/main.png'
export const HomePageLayout = styled.div`
  width: 100%;
  background-image: url('BG_Home.png') !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    display: flex;
    width: 40%;
    height: 40px;
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 0.75em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);

    margin: 15% 35% 10% 35%;
    background-color: #f6f6f6;
    color: #4d5359;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
  }
`;

export const HompageImg = styled.img`
  width: 375px;
`;

export const HomePageBox = styled.div`
  width: 375px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomePageTitleHeading = styled.h1`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 1.1em;
  font-family: Paytone One;
  font-style: extra-bold;
  text-align: center;
  color: #576141;
`;

export const HomePageDayHeading = styled.h1`
  margin-bottom: 20px;
  font-size: 1.1em;
  font-family: Inter, sans-serif;
  color: #404040;
  font-weight: 600;
  font-style: extra-bold;
  text-align: center;
`;
export const HomePageBottomImage = styled.img`
  margin-top: 10px;
  margin-bottom: 0px;
  width: 375px;
`;
