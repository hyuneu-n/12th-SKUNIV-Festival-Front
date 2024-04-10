import * as S from '../styles/components/Footer.styled';
import { Link } from 'react-router-dom';
import insta from '../../public/footer/insta.svg';
import logo from '../../public/footer/logo.svg';
import github from '../../public/footer/github.svg';

export default function Footer() {
  return (
    <S.FooterLayout>
      <hr />
      <S.FooterCol>
        <S.FooterHead>서경대학교 멋쟁이 사자처럼</S.FooterHead>
        <S.FooterParagraph>likelion_skuniv</S.FooterParagraph>
        <S.FooterImageBox>
          <S.FooterInstaLink>
            <S.FooterInstaImg src={logo} />
          </S.FooterInstaLink>
          <S.FooterInstaLink to="https://www.instagram.com/">
            <S.FooterInstaImg src={insta} />
          </S.FooterInstaLink>
          <S.FooterInstaLink to="/">
            <S.FooterInstaImg src={github} />
          </S.FooterInstaLink>
        </S.FooterImageBox>
      </S.FooterCol>
    </S.FooterLayout>
  );
}
