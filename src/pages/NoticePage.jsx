import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import Switch from '../components/Switch';
import * as S from '../styles/pages/NoticePage.styled';
import NoticeBox from '../components/NoticeBox';
import { Notices } from '../utils/NoticeData';
import { Link } from 'react-router-dom';
import InputButton from '../components/InputButton';
export default function Notice() {
  return (
    <>
      <MenuBar></MenuBar>

      <S.NoticeLayout>

        <S.NoticeHead>
          
          <InputButton></InputButton>
          
        </S.NoticeHead>
        <S.NoticeBody>
          <S.WidthLine></S.WidthLine>
          <S.NoticeH1>NOTICE</S.NoticeH1>
          {Notices.map((item) => {
            return (
              <NoticeBox
                key={item.id}
                title={item.title}
                author={item.author}
                date={item.date}
              />
            );
          })}
        </S.NoticeBody>
      </S.NoticeLayout>

      <Footer />
    </>
  );
}
