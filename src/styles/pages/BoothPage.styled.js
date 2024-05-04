import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BoothLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const BoothImageBox = styled.div`
  width: 100%;
  position: relative;
`;

export const BoothMapImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 83%;
  height: 500px;
`;

export const BoothPinImg = styled(motion.img)`
  height: 20px;
  width: 13px;
  position: absolute;
  top: ${({ $top }) => `${$top}px`};
  left: ${({ $left }) => `${$left}px`};
  visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};
`;
export const BoothListBox = styled.div`
  width: 90%;
`;

export const BoothLine = styled.hr`
  width: 90%;
  border: 1px solid;
  margin-bottom: 5px;
`;

export const BoothItemBox = styled.div`
  width: 90%;
  height: 35vh;
  overflow: scroll;
`;
