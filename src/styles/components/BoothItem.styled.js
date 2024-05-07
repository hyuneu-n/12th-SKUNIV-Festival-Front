import styled from 'styled-components';
import Sheet from 'react-modal-sheet';

export const BoothItemLayout = styled.div`
  width: 100%;
  display: flex;
  margin: 2% 0;
`;

export const BoothItemGrayBox = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  width: 80px;
  height: 9vh;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: gray;
  border-radius: 5px 0 0 5px;
`;

export const BoothItemInfoBox = styled.div`
  flex-grow: 100;
  height: 9vh;
  background-color: white;
  border-radius: 0 5px 5px 0;
`;

export const BoothItemTitleP = styled.p`
  font-size: 18px;
  color: #333;
  padding-top: 13px;
  padding-left: 9px;
  font-weight: bold;
  font-family: 'Pretendard', sans-serif;
`;
export const BoothItemNumberP = styled.p`
  font-size: 9px;
  color: #333;
  padding-top: 3px;
  padding-left: 10px;
  padding-right: 13px;
  font-family: 'Pretendard', sans-serif;
`;

export const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    /* custom styles */
  }
  .react-modal-sheet-container {
    width: ${({ $width }) => `${$width}px`} !important;
    left: ${({ $left }) => `${$left}px`} !important;
    height: 60vh !important;
    @media (max-width: 400px) {
      .react-modal-sheet-container {
          height: 90vh; 
          width: 90%;    
          left: 5%;      
          bottom: 5%;   
      }
}

  .react-modal-sheet-header {
    /* custom styles */
  }
  .react-modal-sheet-drag-indicator {
    /* custom styles */
  }
  .react-modal-sheet-content {
    overflow-y: scroll !important;  /* 항상 스크롤 표시 */
    height: calc(100% - 40px);      /* 헤더나 기타 요소 높이를 빼고 계산 */
    -webkit-overflow-scrolling: touch; /* iOS에서 스크롤 성능 개선 */
    scrollbar-width: thin;         /* 스크롤바 두께 설정 (Firefox) */
    scrollbar-color: #888 #ffffff; /* 스크롤바 색상 설정 (Firefox) */

    /* 크롬, 사파리, 엣지에서 스크롤바 항상 보이게 설정 */
    &::-webkit-scrollbar {
      width: 8px;                /* 스크롤바 너비 설정 */
    }
    &::-webkit-scrollbar-track {
      background: #ffffff;       /* 스크롤바 트랙 색상 */
    }
    &::-webkit-scrollbar-thumb {
      background-color: #888;    /* 스크롤바 핸들 색상 */
      border-radius: 10px;       /* 스크롤바 핸들 둥글게 */
      border: 2px solid #ffffff; /* 스크롤바 핸들 테두리 */
    }
  }

    h2 {
      text-align: center;
      color: #576141;
      margin: 10px 0px;
      font-family: Pretendard;
    }

    button {
      width: 40%;
      height: 35px;
      display: block;
      margin: auto !important;
      background-color: white;
      border-radius: 25px;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.16);
    }

    a {
      text-decoration: none;
      color: #576141 !important;
      font-family: Pretendard;
      font-weight: 600;
      padding-bottom:20px;
    }
  }
`;

export const BoothItemParagraph = styled.p`
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  padding-top: 7px;
  white-space: pre-wrap;
  line-height: 1.6;
  padding-bottom: 13px;
`;

export const BoothAccountParagraph = styled.p`
  text-align: center;
  font-family: Pretendard;
  font-weight: 450;
  font-size: 15px;
  padding-top: 7px;
  white-space: pre-wrap;
  line-height: 1.4;
  padding-top: 15px;
  padding-bottom: 13px;
`;

export const BoothMenuIntroBox = styled.div`
  width: 90%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eeeeee;
  margin: auto;
  border-radius: 5px;
`;

export const BoothDayBox = styled.div`
  flex: 3;
  font-family: Pretendard;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 11px;
  align-self: flex-start;
  padding: 0 8px 0 8px;
  white-space: nowrap;
`;

export const BoothMenuDivider = styled.div`
  width: 1.5px;
  height: 125px;
  background-color: #282e18;
  opacity: 0.4;
  align-self: center;
  border-radius: 3px;
`;
export const BoothNightBox = styled.div`
  flex: 3;
  font-family: Pretendard;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 11px;
  align-self: flex-start;
  padding: 0 8px 0 8px;
  white-space: nowrap;
`;

export const BoothMenuParagraph = styled.p`
  font-size: 13px;
  text-align: center;
  font-family: Pretendard;
  padding: 9px 0 10px 0;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3px 0;
`;

export const MenuItemName = styled.span`
  font-weight: bold;
`;

export const MenuItemPrice = styled.span`
  font-weight: normal;
`;
