import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Layout = styled.div`
background-image: url(${({ bgImage }) => bgImage});
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  margin-top: 7%;
  font-size: 18px;
  font-family: SUIT Variable, sans-serif;
  font-style: extra-bold;
  font-weight: bold;
  text-align: center;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  margin-bottom: 10%;
`;

export const NumberFirst = styled.h1`
  font-size: 35px;
  font-family: SUIT Variable, sans-serif;
  font-weight: bold;
  margin: 0 30%;
  color: #55A161;
`;

export const Day = styled.h1`
  font-size: 20px;
  font-family: SUIT Variable, sans-serif;
  font-weight: bold;
  color: #5e5e5e;
  margin: 0 30%;
`;

export const TimeTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 95vh;
  background: linear-gradient(90deg, rgba(244, 231, 228, 0.5) 10%, rgba(245, 248, 234, 0.5) 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset;
  border-radius: 20px;
  margin: auto;
  margin-bottom: 5%;
`;

export const SmallTitle = styled.div`
  font-family: SUIT Variable, sans-serif;
  font-weight: bold;
  font-size: 24px;
  margin-top: 10%;
  margin-left: 7%;
`;

export const StyledLink = styled(Link)`
  color: ${({ active }) => (active ? '#55A161' : 'black')};
`;
