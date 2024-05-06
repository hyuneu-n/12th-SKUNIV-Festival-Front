import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterLayout = styled.div`
  width: 100%;
  margin: auto;
  margin-bottom:12px;
`;

export const FooterCol = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const FooterHead = styled.p`
  color: #5e5e5e;
  text-align: center;
  font-size: 0.5em;
  font-weight: bold;
  font-family: Pretendard;
`;

export const FooterParagraph = styled.p`
  text-align: center;
  color: #5e5e5e;
  font-size: 0.4em;
  font-family: Pretendard;
  margin-top: 5px;
`;

export const FooterImageBox = styled.div`
  text-align: center;
  margin-top: 8px;
`;

export const FooterInstaLink = styled(Link)`
  display: inline-block;
  width: 20px;
  margin: 0 5px;
`;

export const FooterLoginBtn = styled.button`
  display: inline-block;
  width: 20px;
  margin: 0 3px;
  border: none;
  background-color: transparent;
`;

export const FooterLogoImg = styled.img`
  width: 100%;
`;

export const FooterLine = styled.hr`
  width: 100%;
  border: 1px solid;
  margin-bottom: 5px;
`;
