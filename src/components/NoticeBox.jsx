import * as S from '../styles/components/NoticeBox.styled';
import { Link } from 'react-router-dom';

export default function NoticeBox({ id, title, author, date, link }) {
  return (
    <S.NoticeBox>
      <S.TitleBox>
        <S.Notice>[공지]</S.Notice>
        <S.NoticeTitle>{title}</S.NoticeTitle>
      </S.TitleBox>
      <S.AboutBox>
        <S.NoticeAuthor>{author}</S.NoticeAuthor>
        <S.NoticeDate>
          {new Date(date).toISOString().split('T')[0]}
        </S.NoticeDate>
      </S.AboutBox>
    </S.NoticeBox>
  );
}
