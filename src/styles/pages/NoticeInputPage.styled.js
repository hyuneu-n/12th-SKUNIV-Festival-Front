import styled from 'styled-components';

export const NoticeLayout = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin:10% 0% 0% 5%;
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
export const NoticeBodyForm = styled.form`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 7% 0% 15% 0%;
`;
export const NoticeBack = styled.img`
  margin: 5% 0% 0% 5%;
  width: 20px;
  height: 29px;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  background-color: #00000000;
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
  background-color: ;
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
export const NoticeName = styled.input`
  width: 70%;
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
export const HorizonBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const BtnImage = styled.div`
  width: 67px;
  height: 67px;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: right;
  background-color: #F8F8F8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  padding: 3% 3% 3% 3%;
`;
export const NoticeInImage = styled.img`
  width: 100%;
  height: 188px;
  margin: 2% 0% 2% 0%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  border: none;
  border-radius: 10px;
  background-color: #F8F8F8;
  background-size: contain;
`;