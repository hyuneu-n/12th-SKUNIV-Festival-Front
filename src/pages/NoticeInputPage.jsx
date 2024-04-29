import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import Switch from '../components/Switch';
import * as S from '../styles/pages/NoticeInputPage.styled';
import NoticeBox from '../components/NoticeBox';
import { Notices } from '../utils/NoticeData';

const getData = () => {

};
const getDate = () => {

};
const Container = () => {
  const [isDropdownView, setDropdownView] = useState(false)

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView)
  }

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false)
    }, 200);
  }

  return (
    <div className="container" onBlur={handleBlurContainer}>
      <label onClick={handleClickContainer}>
        <button>Dropdown Menu{isDropdownView ? '▲' : '▼'}</button>
      </label>
      {isDropdownView && <Dropdown />}
    </div>
  )
}
export default function Notice() {
  return (
    <div className="app">
      <S.NoticeBack onClick={() => history.go(-1)}></S.NoticeBack>
      <S.NoticeLayout>
        <S.NoticeHead>
          <S.NoticeForm>
            등록
            <S.NoticeWrite></S.NoticeWrite>
          </S.NoticeForm>
        </S.NoticeHead>
        <S.NoticeBody>
          <S.NoticeTitle type="text" placeholder="제목을 입력해주세요." id = "bTitle" name = "bTitle"/>
          <S.NoticeContent  type="text" placeholder="내용을 입력해주세요." id = "bContent" name = "bContent"></S.NoticeContent>
        </S.NoticeBody>
      </S.NoticeLayout>
      <Footer />
    </div>
  );
}
