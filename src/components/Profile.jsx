import MainLogo from '../../public/MainLogo.svg';
import * as S from '../styles/components/Profile.styled';

export default function Profile({ name, major }) {
  return (
    <>
      <S.ProfileLayout>
        <S.ProfileItemBox>
          <S.ProfileLogoImg src={MainLogo}></S.ProfileLogoImg>
          <S.ProfileNameParagraph>{name}</S.ProfileNameParagraph>
        </S.ProfileItemBox>
        <S.ProfileMajorParagraph>{major}</S.ProfileMajorParagraph>
      </S.ProfileLayout>
    </>
  );
}
