import * as S from '../styles/components/InputButton.styled';
import i from '../assets/images/penIcon.svg'
export default function InputButton() {
    return (
            <S.NoticeForm>
                등록
                <S.NoticeWrite src={i}></S.NoticeWrite>
            </S.NoticeForm>
    );
}