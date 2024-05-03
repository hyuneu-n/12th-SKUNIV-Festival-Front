import * as S from '../styles/components/Footer.styled';
import { Link } from 'react-router-dom';
import insta from '../assets/images/footer/insta.svg';
import logo from '../assets/images/footer/logo.svg';
import github from '../assets/images/footer/github.svg';

export default function Footer() {
  return (
    <S.FooterLayout>
      <S.FooterLine />
      <S.FooterCol style={{ marginTop: '30px' }}>
        <S.FooterHead>멋쟁이사자처럼 서경대학교</S.FooterHead>
        <S.FooterParagraph>likelion_skuniv</S.FooterParagraph>
        <S.FooterImageBox>
          <S.FooterInstaLink style={{ marginTop: '7px', marginBottom: '10px' }}>
            <S.FooterLogoImg src={logo} />
          </S.FooterInstaLink >
          <S.FooterInstaLink to="https://www.instagram.com/likelion_skuniv/">
            <S.FooterLogoImg src={insta} />
          </S.FooterInstaLink>
          <S.FooterInstaLink to="/">
            <S.FooterLogoImg src={github} />
          </S.FooterInstaLink>
        </S.FooterImageBox>
      </S.FooterCol>
    </S.FooterLayout>
  );
}
