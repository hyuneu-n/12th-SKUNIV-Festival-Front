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
    height: ${({ $height }) => `calc(100vh - 40vh)`} !important;
  }
  .react-modal-sheet-header {
    /* custom styles */
  }
  .react-modal-sheet-drag-indicator {
    /* custom styles */
  }
  .react-modal-sheet-content {
    h2 {
      text-align: center;
      color: #576141;
      margin: 10px 0px;
      font-family: Pretendard;
    }

    div {
      font-family: Pretendard;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    p { //인트로
      text-align: center;
      padding-top: 7px;
      padding-bottom: 20px;
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
    }
  }
`;

export const BoothItemParagraph = styled.p`
  white-space: pre-wrap;
  line-height: 1.4;
  padding-bottom: 10px;
`;