import * as S from '../styles/components/Header.styled';

import MenuBar from './MenuBar';

export default function Header() {
  return (
    <>
      <S.HeaderLayout>
        <MenuBar />
        <S.HeaderNameParagraph>BoothList</S.HeaderNameParagraph>
      </S.HeaderLayout>
    </>
  );
}
