import styled from 'styled-components';

export const ItemBox = styled.div`
    width: 100%;
    height: auto;  // 높이를 auto로 설정하여 내용에 맞게 조절
    background-color: #F6F6F6;
    color: #000000;
    border-radius: 12px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: row;  // 요소를 수평으로 배치
    align-items: center;  // 세로 중앙 정렬
    justify-content: flex-start;  // 가로 시작 부분에서 정렬
    margin: 10px 5% 10px 5%;  // 상하좌우 마진 적용
    padding: 5px;
`;

export const ItemImage = styled.img`
    width: 40%;  // 이미지 너비 설정
    height: 100%;  // 이미지 높이 설정
    border-radius: 10px;  // 이미지 모서리 둥글게
    writing-mode: horizontal-tb;
`;

export const ItemContent = styled.div`
    width: 60%;  // 글 부분 너비 설정
    height: 100%;  // 글 부분 높이 설정
    padding: 0 20px;  // 글 부분 내부 패딩
    display: flex;
    flex-direction: column;  // 내부 요소를 수직으로 배치
    justify-content: center;  // 중앙 정렬
`;

export const ItemName = styled.h1`
    font-family: 'Pretendard', sans-serif;
    font-weight: 600;
    font-size: 1em;
    padding-bottom: 5px;
`;

export const ItemDate = styled.h1`
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    font-size: 1em;
    color: #000000a5;
    padding-bottom: 3px;
    writing-mode: horizontal-tb;
`;

export const ItemLocation = styled.h1`
    font-family: 'Pretendard', sans-serif;
    font-weight: 600;
    font-size: 1em;
`;

export const ItemLine = styled.hr`
    width: 85%;
    color: #000000a5;
    margin: 10px 0px;  // 상하 여백 조절
    border: none;
`;
