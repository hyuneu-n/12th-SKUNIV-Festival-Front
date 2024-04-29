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
      <h1>대충 글 내용</h1>
      <Footer />
    </>
  );
}
