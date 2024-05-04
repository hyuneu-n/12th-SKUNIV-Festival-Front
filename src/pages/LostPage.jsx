import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import * as S from '../styles/pages/LostPage.styled';
import ItemSwitch from '../components/ItemSwitch';
import ItemBox from '../components/ItemBox';
import { LostData } from '../utils/LostData';
import { Link } from 'react-router-dom';
import InputButton from '../components/InputButton';
import i from '../assets/images/menubar/menubarImage.svg';
import { useState, useEffect } from 'react';
export default function ItemsLost() {
  const [itemData, setData] = useState([]);

  useEffect(() => {
    console.log("entered");
    fetch('http://dev.skufestival2024.site/api/lostitem/posts?lastId=0&size=8')
      .then(response => response.json())
      .then(json => console.log(json))
  }, []);
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
          {LostData.map((item) => {
            return (
              <ItemBox
                key={item.id}
                name={item.name}
                location={item.location}
                date={item.date}
              />
            );
          })}
        </S.LostBody>
      </S.LostLayout>
      <Footer />
    </>
  );
}
