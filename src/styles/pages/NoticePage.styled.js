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
  position: relative;
  flex-direction: row;
  justify-content: center;
  margin: 7% 0% 0% 0%;
`;
export const NoticeBody = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 7% 0% 5% 0%;
`;

export const NoticeH1 = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 1.1em;
  font-family: 'Pretendard Variable', arial;
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
