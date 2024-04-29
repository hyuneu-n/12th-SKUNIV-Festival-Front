import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import Switch from '../components/Switch';
import * as S from '../styles/pages/NoticePage.styled';
import NoticeBox from '../components/NoticeBox';
import { Notices } from '../utils/NoticeData';

const getData = () => {

};
const getDate = () => { };
export default function Notice() {
  return (
    <div className="app">
      <MenuBar></MenuBar>
      <Switch left = {true}></Switch>
      <S.NoticeLayout>
        <S.NoticeHead>
          <S.NoticeH1>NOTICE</S.NoticeH1>
          <S.NoticeWrite href={"/lostItems"}><butto></butto></S.NoticeWrite>
        </S.NoticeHead>
        <S.NoticeBody>
          {
            Notices.map((item) => {
              return (
                <NoticeBox key={item.id} title= {item.title} author={item.author} date= {item.date}></NoticeBox>
              );
            })}
        </S.NoticeBody>
      </S.NoticeLayout>

      <Footer />
    </div>
  );
}
