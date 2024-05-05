import Footer from '../components/Footer';
import * as S from '../styles/pages/NoticeInputPage.styled';
import InputButton from '../components/InputButton';
import { Form, Link, redirect } from 'react-router-dom';
import styled from 'styled-components';
import ss from '../assets/images/icon_back.svg';

const NoticeBack = styled.img`
  margin: 5% 0% 0% 5%;
  width: 20px;
  height: 29px;
  position: absolute;
  top: 3%;
  left: 0;
`;

export default function Notice() {
  const handleButtonClick = () => {
    console.log('button clicked');
    history.goBack();
  };
  return (
    <>
      <S.NoticeLayout>
        <S.NoticeHead>
          <Link to={'/notice'}>
            <NoticeBack src={ss}></NoticeBack>
          </Link>
          <InputButton onClick={handleButtonClick}></InputButton>
        </S.NoticeHead>
          <S.NoticeBodyForm method="post">
            <S.NoticeTitle
              type="text"
              placeholder="제목을 입력해주세요."
              id="bTitle"
              name="bTitle"
            />
            <S.NoticeContent
              type="text"
              placeholder="내용을 입력해주세요."
              id="bContent"
              name="bContent"
            ></S.NoticeContent>
          </S.NoticeBodyForm>
      </S.NoticeLayout>
      <Footer />
    </>
  );
}

// post 요청은 작동 확인 못함.
export async function action({ request }) {
  const data = await request.formData();

  console.log(data);

  const eventData = {
    title: data.get('bTitle'),
    content: data.get('bContent'),
  };

  const response = await fetch(
    // url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    }
  );

  console.log(response);
  return redirect('/notice');
}
