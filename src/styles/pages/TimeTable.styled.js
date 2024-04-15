import styled from 'styled-components';


export const Layout = styled.div`
  background-image: url('../../public/background.svg');
`;

export const Title = styled.h1`
  margin-top: 10%;
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

export const DateRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

export const NumberFirst = styled.h1`
  font-size: 35px;
  font-family: SUIT Variable, sans-serif;
  font-weight: bold;
  margin: 0 30%;
`;

export const NumberSecond = styled.h1`
  font-size: 35px;
  font-family: SUIT Variable, sans-serif;
  font-weight: bold;
  margin: 0 30%;
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
  height: 80vh;
  background-color: white;
  border-radius: 20px;
  margin: auto;
`;

export const SmallTitle = styled.div`
  font-family: SUIT Variable, sans-serif;
  font-weight: bold;
  font-size: 24px;
  margin-top: 10%;
`;

export const SmallIcon = styled.img`
  width: 10px;
  margin-left: 10%;
`;
