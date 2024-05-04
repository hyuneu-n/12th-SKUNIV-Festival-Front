import styled from 'styled-components';
// 공지
export const ItemBox = styled.div`
    width: 90%;
    height: 210px;
    background-color: #F6F6F6;
    color: #000000;
    border-radius: 10px;
    border: none;
    
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0px 0% 4% 0%;
    padding: 0px 0px 0px 0px;
`;
// 이름
export const ItemName = styled.h1`
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 0.1em;
`;
// 날짜
export const ItemDate = styled.h1`
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 0.1em;
`;
// 장소
export const ItemLocation = styled.h1`
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 0.1em;
`;
// 구분 선
export const ItemLine = styled.hr`
    width: 85%;
    color: #000000a5;
    margin: -1px 0px 0px 0px;
    border: none;
`;
// 이미지
export const ItemImage = styled.img`
    width: 100%;
    height: 60%;
    border-radius: 10px 10px 0px 0px;
    margin: 0px 0px 0px 0px;
    background-color: #000000a5 !important;

`;
