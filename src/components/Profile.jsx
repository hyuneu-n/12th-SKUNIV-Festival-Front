import * as S from '../styles/components/Profile.styled';

export default function Profile({ image, name, role, major }) {
  return (
    <>
      <S.ProfileLayout>
      <S.ProfileLogoImg src={image} alt={`${name}`} />
        <S.ProfileItemBox>
          <S.NameBlockContainer>
            <p>{name}</p>
            <p>{major}</p>
          </S.NameBlockContainer>
          <S.ProfileRoleParagraph style={{paddingTop: '3px'}}>{role}</S.ProfileRoleParagraph>
        </S.ProfileItemBox>
      </S.ProfileLayout>
    </>
  );
}
