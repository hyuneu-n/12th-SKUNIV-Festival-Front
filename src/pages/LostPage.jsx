import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import * as S from '../styles/pages/LostPage.styled';
import ItemSwitch from '../components/ItemSwitch';
import ItemBox from '../components/ItemBox';
//import { LostData } from '../utils/LostData';
import { Link , useLoaderData} from 'react-router-dom';
import InputButton from '../components/InputButton';
import i from '../assets/images/menubar/menubarImage.svg';
export default function ItemsLost() {
  
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <MenuBar></MenuBar>
      <S.LostLayout>
        <S.LostHead>
          <Link to="/lostInput">
            <InputButton></InputButton>
          </Link>
        </S.LostHead>
        <S.LostImg src={i}></S.LostImg>
        <ItemSwitch />
        <S.LostBody>
          {data.map((item) => {
            return (
              <ItemBox
                key={item.id}
                name={item.lostItemName}
                location={item.lostLocation}
                date={item.lostDate}
                img = {item.lostItemImagePath}
              />
            );
          })}
        </S.LostBody>
      </S.LostLayout>
      <Footer />
    </>
  );
}// get 요청
export async function loads() {
  const response = await fetch('http://dev.skufestival2024.site/api/lostitem/posts?lastId=0&size=8');
  console.log(response);
  return response;
}
