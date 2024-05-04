import * as S from '../styles/components/Profile.styled';

export default function Profile({ image, name, role, major }) {
  return (
    <>
      <S.ProfileLayout>
        <S.ProfileItemBox>
          <S.ProfileLogoImg src={image} alt={`${name}의 프로필 이미지`} />
          <S.ProfileNameParagraph style={{ paddingTop: '8px', fontWeight: 'bold' }}>{name}</S.ProfileNameParagraph>
          <S.ProfileMajorParagraph>{major}</S.ProfileMajorParagraph>
          <S.ProfileRoleParagraph style={{paddingTop: '8px'}}>{role}</S.ProfileRoleParagraph>
        </S.ProfileItemBox>
      </S.ProfileLayout>
    </>
  );
}
