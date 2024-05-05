import styled from 'styled-components';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import * as S from '../styles/pages/LostPage.styled';
import i from '../assets/images/menubar/menubarImage.svg';
import ItemBox from '../components/ItemBox';
import InputButton from '../components/InputButton';
import ItemSwitch from '../components/ItemSwitch';
import { Link, useLoaderData } from 'react-router-dom';
import { LostData } from '../utils/LostData';
export default function FindItems() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <MenuBar></MenuBar>
      <S.LostLayout>
        <S.LostHead>
          <Link to={"/lostInput"}>
            <InputButton></InputButton>
          </Link>
        </S.LostHead>
        <S.LostImg src={i}></S.LostImg>
        <S.LostWrite></S.LostWrite>
        <ItemSwitch />
        <S.LostBody>

          {data.map((item,index) => {
            return (
              <ItemBox
                key={item.id}
                name={item.lostItemName}
                location={item.lostLocation}
                date={item.lostDate}
                img = {item.lostItemImagePath}
                find={true}
              />
            );
          })}
        </S.LostBody>
      </S.LostLayout>

      <Footer />
    </>
  );
}
// get 요청
export async function loadLis2() {
  const response = await fetch('http://dev.skufestival2024.site/api/lostitem/posts?lastId=0&size=8');
  // url
  console.log(response);
  return response;
}