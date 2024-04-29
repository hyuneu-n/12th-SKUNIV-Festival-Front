import styled from 'styled-components';
// 공지
export const NoticeBox = styled.a`
    width: 100%;
    height: 67px;
    background-color: #F6F6F6;
    color: #000000;
    border-radius: 10px;
    border: none;
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 0.75em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px 0% 5px 0%;
    padding: 0px 0px 0px 0px;
`;
// 공지 + 제목
export const TitleBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    margin-left: 39px;
`;
// 작성자 + 날짜
export const AboutBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin-left: 38px;
    margin-top: 5px;
`;
// 공지
export const Notice = styled.h1`
    font-family: 'Pretendard Variable', arial;
    font-weight: 700;
    font-size: 1.5em;
`;
// 공지 제목
export const NoticeTitle = styled.h1`
    font-family: 'Pretendard Variable', arial;
    font-weight: 700;
    font-size: 1.5em;
    margin-left: 3px;
`;
// 공지 날짜
export const NoticeDate = styled.h3`
    font-family: 'Pretendard Variable', arial;
    font-weight: 400;
    font-size: 0.75em;
    color: #6D6D6D;
    margin-left: 3px;
`;
// 공지 작성자
export const NoticeAuthor = styled.h3`
    font-family: 'Pretendard Variable', arial;
    font-weight: 400;
    font-size: 0.75em;
    color: #6D6D6D;
`;