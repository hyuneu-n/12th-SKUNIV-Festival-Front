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

export const NoticeHead = styled.form`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 7% 0% 0% 0%;
`;
export const NoticeBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 7% 0% 15% 0%;
`;
export const NoticeBack = styled.button`
  margin: 5% 0% 0% 5%;
  width: 20px;
  height: 29px;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  background-color: #00000000;
  background-image: url('../../public/icon _play.svg');
`;
export const NoticeForm = styled.button`
  width: 100px;
  height: 40px;
  padding: 0% 5% 0% 5%;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.1em;
  border: none;
  border-radius: 30px;
  font-family: 'Pretendard Variable', arial;
  background-color: #F8F8F8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
`;
export const NoticeWrite = styled.button`
  width: 20px;
  height: 20px;
  background-image: url('../../public/penIcon.svg');
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  bottom: 0;
  right: 0;
`;
export const NoticeTitle = styled.input`
  width: 100%;
  height: 67px;

  margin: 2% 0% 2% 0%;
  padding: 0% 5% 0% 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  border: none;
  border-radius: 10px;
  color: #636363;
  font-weight: 600;
  font-family: 'Pretendard Variable', arial;
  font-size: 1.2em;
`;
export const NoticeContent = styled.textarea`
  width: 100%;
  height: 419px;

  margin: 2% 0% 2% 0%;
  padding: 5% 5% 5% 5%;
  display: flex;
  text-align: left;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  border: none;
  border-radius: 10px;
  color: #636363;
  font-weight: 300;
  font-family: 'Pretendard Variable', arial;
  font-size: 1.1em;
`;