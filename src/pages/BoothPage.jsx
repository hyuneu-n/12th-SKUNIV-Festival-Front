import * as S from '../styles/pages/BoothPage.styled';
import map from '../../public/booth/boothMap.svg';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { boothData } from '../utils/boothData';
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import pin from '../../public/booth/pin.svg';
import { boothData } from '../utils/boothdata';
>>>>>>> Stashed changes
import Footer from '../components/Footer';
import BoothItem from '../components/BoothItem';
import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import pin from '../../public/booth/pin.svg';

export default function BoothPage() {
  const [height, setHeight] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [showPin, setShowPin] = useState(false);
  const test = useRef();
  const test1 = useRef();

  useEffect(() => {
    setHeight(test.current.getBoundingClientRect().bottom);
    setLeft(test.current.getBoundingClientRect().left);
    setWidth(test.current.clientWidth);
  }, []);

  return (
    <S.BoothLayout>
      <Header />

      <S.BoothImageBox>
        <S.BoothMapImg src={map} ref={test} />
        <S.BoothPinImg
          $show={showPin}
          src={pin}
          initial={{ y: 0 }}
          animate={{ y: 3, transition: { duration: 1.5, repeat: Infinity } }}
        />
      </S.BoothImageBox>

      <S.BoothLine />

      <S.BoothItemBox ref={test1}>
        <BoothItem
          height={height}
          left={left}
          width={width}
          setShowPin={setShowPin}
        />
        <BoothItem height={height} left={left} width={width} />
        <BoothItem height={height} left={left} width={width} />
        <BoothItem height={height} left={left} width={width} />
      </S.BoothItemBox>

      <Footer />
    </S.BoothLayout>
  );
}
