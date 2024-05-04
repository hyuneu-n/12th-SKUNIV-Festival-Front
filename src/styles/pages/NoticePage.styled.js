import styled from 'styled-components';

export const NoticeLayout = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0% 0% 0% 0%;
`;

export const NoticeHead = styled.div`
  width: 84%;
  margin: auto;
  display: flex; 
  flex-direction: row;
  justify-content: flex-end;
  margin: 7% 0% 0% 0%;
`;
export const NoticeBody = styled.div`
width: 100%;
height: 500px;
margin: 10% 0% 10% 0%;
padding: 3% 0% 3% 0%;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
gap: 10px; 
justify-items: center;
overflow-y: scroll; 
overflow-x: hidden; 
max-height: 80vh; 
`;

export const NoticeH1 = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 1.4em;
  font-family: 'Pretendard Variable', arial;
  margin: 5% 0% 5% 0%;
`;
export const NoticeWrite = styled.a`
  width: 20px;
  height: 20px;
  background-image: url('../../public/penIcon.svg');
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  bottom: 0;
  right: 0;
`;
export const WidthLine = styled.hr`
  width: 100%;
  border: 1px solid;
  margin: 10% 0% 10% 0%;
`;