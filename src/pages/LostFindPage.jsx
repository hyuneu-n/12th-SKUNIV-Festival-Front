import styled from 'styled-components';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import * as S from '../styles/pages/LostPage.styled';
import i from '../assets/images/menubar/menubarImage.svg';
import ItemBox from '../components/ItemBox';
import InputButton from '../components/InputButton';
import ItemSwitch from '../components/ItemSwitch';
import { Link } from 'react-router-dom';
import { LostData } from '../utils/LostData';
export default function FindItems() {

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

          {LostData.map((item) => {
            return (
              <ItemBox
                key={item.id}
                name={item.name}
                location={item.location}
                date={item.date}
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
