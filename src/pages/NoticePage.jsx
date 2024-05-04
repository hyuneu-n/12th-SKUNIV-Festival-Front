import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import Switch from '../components/Switch';
import * as S from '../styles/pages/NoticePage.styled';
import NoticeBox from '../components/NoticeBox';
import { Notices } from '../utils/NoticeData';
import { Link, useLoaderData } from 'react-router-dom';
import InputButton from '../components/InputButton';

export default function Notice() {
  const data = useLoaderData();

  console.log(data);

  return (
    <>
      <MenuBar></MenuBar>

      <S.NoticeLayout>
        <S.NoticeHead>
          <Link to={'/noticeInput'}>
            <InputButton></InputButton>
          </Link>
        </S.NoticeHead>
        <S.WidthLine></S.WidthLine>
        <S.NoticeH1>NOTICE</S.NoticeH1>
        <S.NoticeBody>
          {data.map((item) => {
            return (
              <NoticeBox
                key={item.title}
                title={item.title}
                content={item.content}
                date={item.date}
              />
            );
          })}
        </S.NoticeBody>
      </S.NoticeLayout>
    </>
  );
}

// get 요청은 정상작동 확인
export async function loader() {
  const response = await fetch();
  // url
  console.log(response);

  return response;
}
