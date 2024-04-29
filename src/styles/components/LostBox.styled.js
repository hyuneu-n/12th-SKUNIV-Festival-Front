import styled from 'styled-components';
// 공지
export const ItemBox = styled.div`
    width: 80%;
    height: 120px;
    background-color: #F6F6F6;
    color: #000000;
    border-radius: 10px;
    border: none;
    
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px 0% 5px 0%;
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
