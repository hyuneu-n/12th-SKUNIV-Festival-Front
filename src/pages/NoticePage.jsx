import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import Switch from '../components/Switch';
import * as S from '../styles/pages/NoticePage.styled';
import NoticeBox from '../components/NoticeBox';
import { Notices } from '../utils/NoticeData';
import { Link } from 'react-router-dom';

export default function Notice() {
  return (
    <>
      <MenuBar></MenuBar>

      <S.NoticeLayout>
        <Switch />
        <S.NoticeHead>
          <S.NoticeH1>NOTICE</S.NoticeH1>
          <Link to="/lostItems">
            <button></button>
          </Link>
        </S.NoticeHead>
        <S.NoticeBody>
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
