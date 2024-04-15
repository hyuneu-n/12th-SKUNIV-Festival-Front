import MainLogo from '../../public/MainLogo.svg';
import * as S from '../styles/components/Profile.styled';

export default function Profile(Props) {
  return (
    <>
      <S.ProfileLayout>
        <S.ProfileItemBox>
          <S.ProfileLogoImg src={MainLogo}></S.ProfileLogoImg>
          <S.ProfileNameParagraph>{Props.name}</S.ProfileNameParagraph>
        </S.ProfileItemBox>
        <S.ProfileMajorParagraph>{Props.major}</S.ProfileMajorParagraph>
      </S.ProfileLayout>
    </>
  );
}
