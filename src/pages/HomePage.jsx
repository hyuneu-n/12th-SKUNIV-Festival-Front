import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import MenuBar from '../components/MenuBar';
import MiniTimeTable from '../components/MiniTimeTable';

const Layout = styled.div`
  background-image: url('../../public/background.svg');
`
const Title = styled.h1`
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 1.1em;
    font-family: SUIT, sans-serif;
    font-style: extra-bold;
    text-align : center
`
const SemiTitle = styled.h1`
    font-size: 1.1em;
    font-family: Inter, sans-serif;
    color: #808080;
    font-weight: 600;
    font-style: extra-bold;
    text-align : center
`

// 날짜 계산
var today = new Date();
const date1 = new Date('2024-05-09');
const date2 = new Date('2024-05-10');
const getDay = () => {
  var day = "DAY 1";
  if(today < date1){
    day = "DAY 1";
  }
  else{
    day = "DAY 2";
  }
  return day
}

export default function HomePage() {
  return (
    <>
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
      <Title>TIME TABLE</Title>
      <SemiTitle>{getDay()}</SemiTitle>
      <MiniTimeTable></MiniTimeTable>
      <Title>로고</Title>
      <Title>학생회장 한마디 </Title>
      <Footer />
    </div>
    </>
  );
}
