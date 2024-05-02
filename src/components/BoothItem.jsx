import * as S from '../styles/components/BoothItem.styled';
import Sheet from 'react-modal-sheet';
import { useState } from 'react';

export default function BoothItem({ height, left, width, setShowPin }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <S.BoothItemLayout
      onClick={() => {
        setOpen(true);
        setShowPin(true);
      }}
    >
      <S.BoothItemGrayBox />
      <S.BoothItemInfoBox>
        <S.BoothItemNumberP>부스번호</S.BoothItemNumberP>
        <S.BoothItemNumberP>부스명 학과명</S.BoothItemNumberP>
        <S.BoothItemNumberP>부스 안내 및 한줄소개</S.BoothItemNumberP>
      </S.BoothItemInfoBox>
      <S.CustomSheet
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
          setShowPin(false);
        }}
        rootId="root"
        $height={height}
        $left={left}
        $width={width}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>{/* Your sheet content goes here */}</Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </S.CustomSheet>
    </S.BoothItemLayout>
  );
}
