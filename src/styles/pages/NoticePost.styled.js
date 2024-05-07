import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top: 60px;
  padding: 24px;
`;

export const Title = styled.p`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 26px;
  padding-top:40px;
  padding-bottom: 4px;
  padding-left: 10px;
  color: #000000;
  white-space: nowrap;
`

export const Date = styled.p`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #000000;
  opacity: 0.7;
  padding-top:2px;
  padding-bottom:9px;
  padding-left: 10px;
`

export const ContentBody = styled.div`
  width: 100%;
  max-width: 330px;
  height: auto;
  margin: 10px auto;
  background: white;
  backdrop-filter: blur(10.2px);
  border-radius: 10px;
  padding: 8px;
  opacity:0.9;
`

export const ContentParagraph = styled.p`
  width: 100%;
  max-width: 229px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: #000000;
  padding:10px;
`

export const Border = styled.div`
  width: 330px;
  height: 1px;
  align-items: center;
  border: 1px solid rgba(86, 101, 66, 0.5);
  border-radius: 5px;
`

export const IconCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 47px;
  padding-right: 10px;
`

export const IconImg = styled.img`
  width: auto;
  height: 15px;
  opacity:0.8;
`
export const TitleContainer = styled.div`
  display: flex;
  align-items: center; 
`;