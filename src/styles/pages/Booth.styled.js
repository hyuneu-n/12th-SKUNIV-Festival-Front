import styled from 'styled-components';

export const BoothLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const BoothMapImg = styled.img`
  width: 90%;
  height: 50vh;
  margin-bottom: 5px;
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
