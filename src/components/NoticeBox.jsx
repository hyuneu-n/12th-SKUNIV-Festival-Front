import * as S from '../styles/components/NoticeBox.styled';
export default function NoticeBox({ title, author,date,link }) {
    return (
        <S.NoticeBox>
            <S.TitleBox>
                <S.Notice>[공지]</S.Notice>
                <S.NoticeTitle>{title}</S.NoticeTitle>
            </S.TitleBox>
            <S.AboutBox>
                <S.NoticeAuthor>{author}</S.NoticeAuthor>
                <S.NoticeDate>{date}</S.NoticeDate>
            </S.AboutBox>
            
            
        </S.NoticeBox>
    );
}