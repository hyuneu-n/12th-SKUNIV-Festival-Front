import * as S from '../styles/components/LostBox.styled';
import complete from '../assets/images/complete.svg';
export default function ItemBox({ name, location, date, link, img, find = false}) {
    return (
        <S.ItemBox>
            <S.ItemImage src={find ? complete : img} alt = "item"></S.ItemImage>
            <S.ItemLine></S.ItemLine>
            <S.ItemName>{name}</S.ItemName>
            <S.ItemDate>{date}</S.ItemDate>
            <S.ItemLocation>{location}</S.ItemLocation>
        </S.ItemBox>
    );
}