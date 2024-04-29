import styled from 'styled-components';

export const HeaderLayout = styled.div`
  width: 100%;
  height: 50px;
`;
export const ButtonBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 15% 0 0 0;
`;
export const SwithButton = styled.a`
  width: 32%;
  height: 45px;
  background-color: #C2E3BD;
  color: #000000;
  border-radius: 10px;
  border: none;
  font-family: 'Pretendard Variable', arial;
  font-weight: 700;
  font-size: 0.75em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  margin: 5% 5% 5% 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const OffButton = styled.a`
  width: 32%;
  height: 45px;
  background-color: #F6F6F6;
  color: #000000;
  border-radius: 10px;
  border: none;
  font-family: 'Pretendard Variable', arial;
  font-weight: 700;
  font-size: 0.75em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  margin: 5% 5% 5% 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderNameParagraph = styled.p`
  text-align: center;
  padding-top: 20px;
  font-family: Paytone One;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #576141;
`;
export const WidthLine = styled.hr`
  width: 100%;
  border: 1px solid;
  margin-bottom: 5px;
`;