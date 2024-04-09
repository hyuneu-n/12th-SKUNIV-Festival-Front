import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterLayout = styled.div`
  width: 30vh;
  margin: auto;
`;

export const FooterCol = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const FooterHead = styled.p`
  color: #5e5e5e;
  text-align: center;
  font-size: 0.5em;
  font-weight: bold;
`;

export const FooterParagraph = styled.p`
  text-align: center;
  color: #5e5e5e;
  font-size: 0.4em;
  margin-top: 5px;
`;

export const FooterImageBox = styled.div`
  text-align: center;
  margin-top: 8px;
`;

export const FooterInstaLink = styled(Link)`
  display: inline-block;
  width: 20px;
  margin: 0 3px;
`;

export const FooterInstaImg = styled.img`
  width: 100%;
`;
