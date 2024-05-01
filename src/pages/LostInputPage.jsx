import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import Switch from '../components/Switch';
import * as S from '../styles/pages/NoticeInputPage.styled';
import InputButton from '../components/InputButton';
import { Notices } from '../utils/NoticeData';
import { Link } from 'react-router-dom';
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
      <S.NoticeLayout>
        <S.NoticeHead>
          <InputButton></InputButton>
          <Link to={"/lostItems"}><S.NoticeBack></S.NoticeBack></Link>
        </S.NoticeHead>
        <S.NoticeBody>
          <S.NoticeTitle type="text" placeholder="날짜를 입력해주세요." id="lDate" name="lDate" />
          <S.NoticeTitle type="text" placeholder="시간을 입력해주세요." id="lTime" name="lTime" />
          <S.NoticeTitle type="text" placeholder="장소를 입력해주세요." id="lLocation" name="lLocation" />
        </S.NoticeBody>
      </S.NoticeLayout>
      <Footer />
    </div>
  );
}
