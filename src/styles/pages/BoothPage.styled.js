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
  width: 100%;
  height: 320px;
  margin-bottom: 5px;
`;

export const BoothPinImg = styled(motion.img)`
  height: 20px;
  width: 13px;
  position: absolute;
  top: 145px;
  left: 150px;
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
