import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getDay } from '../utils/getday';

// styled
import * as S from '../styles/pages/HomPage.styled';

// components
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import MiniTimeTable from '../components/MiniTimeTable';

//svg
import map from '../assets/images/homePage/3dmapp.png';
import pinkMuhly from '../assets/images/homePage/Pinkmuhly.png';
import test3 from '../assets/images/homePage/main3.png';
import cd from '../assets/images/homePage/cdreal.png';
import playlist from '../assets/images/homePage/playlist.png';
import AllLogo from '../assets/images/homePage/allLGO.svg';
import playbar from '../assets/images/homePage/playbar.svg';
import bgimg from '../assets/images/homePage/backgroundimage.png';
import cdleft from '../assets/images/homePage/cdleft.svg';
import cdright from '../assets/images/homePage/cdright2.png';

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
          <img src={map} style={{ width: '340px', height: 'auto' }} />
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
              width: '300px',
              height: '300px',
              position: 'relative',
              left: '62px',
              bottom: '50px',
              zIndex: '2',
            }}
            animate={{
              rotate: [0, 360],
              transition: {
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          />
          <img
            src={playbar}
            style={{
              width: '150px',
              height: 'auto',
              position: 'relative',
              top: '-10px',
            }}
          />
          <img
            src={cdleft}
            style={{
              width: '190px',
              height: 'auto',
              position: 'absolute',
              zIndex: '1',
              bottom: '100px',
              left: '-40px',
            }}
          />
          <img
            src={cdright}
            style={{
              width: '240px',
              height: 'auto',
              position: 'absolute',
              zIndex: '1',
              right: '-59px',
              bottom: '300px'
            }}
          />
          <Link to="/timetable">전체 일정 확인하기</Link>
        </S.HomePageBox>

        <S.HomePageBottomImage src={AllLogo} />
      </S.HomePageLayout>
    </>
  );
}
