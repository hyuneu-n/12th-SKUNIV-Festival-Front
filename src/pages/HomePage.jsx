import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import MenuBar from '../components/MenuBar';
import MiniTimeTable from '../components/MiniTimeTable';
import * as S from '../styles/pages/Booth.styled';
import map from '../../public/map.svg';
const Layout = styled.div`
  background-image: url('../../public/background.svg');
`;
const Title = styled.h1`
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 1.1em;
  font-family: SUIT, sans-serif;
  font-style: extra-bold;
  text-align: center;
`;
const SemiTitle = styled.h1`
  font-size: 1.1em;
  font-family: Inter, sans-serif;
  color: #808080;
  font-weight: 600;
  font-style: extra-bold;
  text-align: center;
`;
export const BtnDirect = styled.a`
  display: flex;
  width: 30%;
  height: 5%;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 0.75em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);

  margin: 5% 35% 50% 35%;
  background-color: #f6f6f6;
  color: #4d5359;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
// 날짜 계산
var today = new Date();
const date1 = new Date('2024-05-09');
const date2 = new Date('2024-05-10');
const getDay = () => {
  var day = '0';
  if (today < date1) {
    day = '1';
  } else if (today >= date2) {
    day = '2';
  }
  return day;
};

export default function HomePage() {
  return (
    <div className="app">
      <MenuBar></MenuBar>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          backgroundImage: 'url(../../public/festivallogo.svg)',
          height: '40%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
      />
      <Title>BOOTH MAP</Title>
      <S.BoothMapImg src={map}></S.BoothMapImg>
      <BtnDirect href="/booth">부스 둘러보기</BtnDirect>
      <Title>TIME TABLE</Title>
      <SemiTitle>DAY {getDay()}</SemiTitle>
      <MiniTimeTable></MiniTimeTable>
      <BtnDirect href="/booth">전체 일정 확인하기</BtnDirect>
      <Title>로고</Title>
      <Title>학생회장 한마디 </Title>
      <Footer />
    </div>
  );
}
