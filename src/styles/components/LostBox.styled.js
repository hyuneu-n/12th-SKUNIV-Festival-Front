import styled from 'styled-components';

export const ItemBox = styled.div`
    width: 170px;
    height: 95px;  // 높이를 auto로 설정하여 내용에 맞게 조절
    background-color: rgba(246, 246, 246, 0.9);
    color: #000000;
    border-radius: 12px;
    border: none;
    box-shadow: inset 0px 0px 3px 3px rgba(149, 174, 110, 0.1);
    
    display: flex;
    flex-direction: row;  // 요소를 수평으로 배치
    align-items: center;  // 세로 중앙 정렬
    justify-content: flex-start;  // 가로 시작 부분에서 정렬
    margin: 10px 5% 15px 5%;  // 상하좌우 마진 적용
    padding: 18px;
`;

export const ItemImage = styled.img`
    width: 65px;  // 이미지 너비 설정
    height: auto;  // 이미지 높이 설정
    border-radius: 10px;  // 이미지 모서리 둥글게
    margin-left:-6px;

`;

export const ItemContent = styled.div`
    width: 60%;  // 글 부분 너비 설정
    height: 100%;  // 글 부분 높이 설정
    padding: 0 1px;  // 글 부분 내부 패딩
    display: flex;
    flex-direction: column;  // 내부 요소를 수직으로 배치
    justify-content: center;  // 중앙 정렬
`;

export const ItemName = styled.h1`
    font-family: 'Pretendard', sans-serif;
    font-weight: 600;
    font-size: 15px;
    padding-bottom: 5px;
    writing-mode: horizontal-tb;
`;

export const ItemDate = styled.h1`
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    font-size: 13px;
    color: #000000a5;
    padding-bottom: 3px;
    writing-mode: horizontal-tb;
`;

export const ItemLocation = styled.h1`
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    font-size: 13px;
`;

export const ItemLine = styled.hr`
    width: 15px;
    color: #000000a5;
    margin: 1px 0px;  // 상하 여백 조절
    border: none;
`;