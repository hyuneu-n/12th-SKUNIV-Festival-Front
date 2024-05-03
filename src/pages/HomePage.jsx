import { LayoutGroup, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getDay } from '../utils/getday';

// styled
import * as S from '../styles/pages/HomPage.styled';

// components
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import MiniTimeTable from '../components/MiniTimeTable';
import FallingAni from '../components/FallingAni';

//svg
import map from '../assets/images/homePage/boothmap.png';
import pinkMuhly from '../assets/images/homePage/Pinkmuhly.png';
import test3 from '../assets/images/homePage/test3.png';
import cd from '../assets/images/homePage/cd.jpg';
import playlist from '../assets/images/homePage/playlist.png';
import AllLogo from '../assets/images/homePage/AllLogo.svg';

export default function HomePage() {
  return (
    <>
      <MenuBar></MenuBar>
      <S.HomePageLayout>
        <S.HomePageBox>
          <S.HompageImg src={test3} />
          <motion.img
            src={pinkMuhly}
            style={{
              width: '375px',
              zIndex: 1,
              left: '0px',
              top: '120px',
              position: 'absolute',
            }}
            animate={{
              rotate: [0, -3, 3, -3, 3, 0],
              transition: {
                duration: 10,
                repeat: 3,
                repeatType: 'loop',
                repeatDelay: 1,
              },
            }}
            fetchPriority="high"
          />
        </S.HomePageBox>

        <S.HomePageBox>
          <S.HomePageTitleHeading>BOOTH MAP</S.HomePageTitleHeading>
          <S.HompageImg src={map} />
          <Link to="/booth">부스 둘러보기</Link>
        </S.HomePageBox>

        <S.HomePageBox>
          <S.HomePageTitleHeading>TIME TABLE</S.HomePageTitleHeading>
          <S.HomePageDayHeading>DAY {getDay()}</S.HomePageDayHeading>
          <img
            src={playlist}
            style={{
              marginBottom: '50px',
            }}
          />
          <div></div>
          <MiniTimeTable />
          <motion.img
            src={cd}
            style={{
              width: '200px',
              height: '200px',
              position: 'relative',
              left: '50px',
            }}
            animate={{
              rotate: [0, 360],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          />
          <Link to="">전체 일정 확인하기</Link>
        </S.HomePageBox>

        <S.HomePageBottomImage src={AllLogo} />
      </S.HomePageLayout>
      <Footer />
    </>
  );
}
