import * as S from '../styles/components/BoothItem';

export default function BoothItem() {
  return (
    <S.BoothItemLayout>
      <S.BoothItemGrayBox />
      <S.BoothItemInfoBox>
        <S.BoothItemNumberP>부스번호</S.BoothItemNumberP>
        <S.BoothItemNumberP>부스명 학과명</S.BoothItemNumberP>
        <S.BoothItemNumberP>부스 안내 및 한줄소개</S.BoothItemNumberP>
      </S.BoothItemInfoBox>
    </S.BoothItemLayout>
  );
}
