import * as S from '../styles/components/LostBox.styled';
export default function ItemBox({ name, location, date, link }) {
    return (
        <S.ItemBox>
            <S.ItemName>{name}</S.ItemName>
            <S.ItemDate>{date}</S.ItemDate>
            <S.ItemLocation>{location}</S.ItemLocation>
        </S.ItemBox>
    );
}