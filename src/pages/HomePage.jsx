import { LayoutGroup, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getDay } from '../utils/getday';

// styled
import * as S from '../styles/pages/HomPage.styled';
import AllLogo from '../..//public/homePage/AllLogo.svg';

// components
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import MiniTimeTable from '../components/MiniTimeTable';
import FallingAni from '../components/FallingAni';

//svg
import map from '../../public/map.svg';
import pinkMuhly from '../../public/homePage/Pinkmuhly.svg';
import test3 from '../..//public/homePage/test3.svg';

export default function HomePage() {
  return (
    <>
      <S.HomePageLayout>
        <MenuBar></MenuBar>
        <div style={{ width: '375px', height: '600px', position: 'relative' }}>
          <img src={test3} />
          <motion.img
            src={pinkMuhly}
            style={{
              width: '375px',
              zIndex: 1,
              left: '1px',
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
          />
        </div>

        <S.HomePageTitleHeading>BOOTH MAP</S.HomePageTitleHeading>
        <img src={map}></img>
        <Link to="/booth">부스 둘러보기</Link>
        <S.HomePageTitleHeading>TIME TABLE</S.HomePageTitleHeading>
        <S.HomePageDayHeading>DAY {getDay()}</S.HomePageDayHeading>
        <MiniTimeTable></MiniTimeTable>
        <Link to="">전체 일정 확인하기</Link>
        <S.HomePageImage src={AllLogo} />
        <FallingAni />
      </S.HomePageLayout>
      <Footer />
    </>
  );
}
