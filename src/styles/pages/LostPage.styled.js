import styled from 'styled-components';

export const LostLayout = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0% 0% 0% 0%;
`;

export const LostHead = styled.div`
  width: 84%;
  margin: auto;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-end;
  margin: 7% 0% 0% 0%;
`;
export const LostBody = styled.div`
  width: 90%;
  margin: 10% 0% 0% 0%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px; 
  justify-items: center;
  overflow-y: auto; 
  max-height: 80vh; 
`;

export const LostWrite = styled.a`
  width: 20px;
  height: 20px;
  background-image: url('../../public/penIcon.svg');
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  bottom: 0;
  right: 0;
`;
export const LostImg = styled.img`
  width: 100%;
  height: 70px;
  margin: 10% 0 0 0;
`;