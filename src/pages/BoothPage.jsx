import * as S from '../styles/pages/BoothPage.styled';
import map from '../assets/images/booth/boothMap3.png';
import { boothData } from '../utils/boothData';
import Footer from '../components/Footer';
import BoothItem from '../components/BoothItem';
import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import pin from '../assets/images/booth/pin.svg';

export default function BoothPage() {
  const [height, setHeight] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [showPin, setShowPin] = useState(false);
  const [pinLeft, setPinLeft] = useState(0);
  const [pinTop, setPinTop] = useState(0);
  const test = useRef();
  const test1 = useRef();

  useEffect(() => {
    setHeight(test.current.getBoundingClientRect().bottom);
    setLeft(test.current.getBoundingClientRect().left);
    setWidth(test.current.clientWidth);
  }, []);

  return (
    <S.BoothLayout>
      <Header title="BOOTH MAP" />
      <S.BoothImageBox>
        <S.BoothMapImg src={map} ref={test} />
        <S.BoothPinImg
          $show={showPin}
          src={pin}
          $left={pinLeft}
          $top={pinTop}
          initial={{ y: 0 }}
          animate={{ y: 3, transition: { duration: 1.5, repeat: Infinity } }}
        />
      </S.BoothImageBox>

      <S.BoothLine />

      <S.BoothItemBox ref={test1}>
        {boothData.map((prod) => {
          return (
            <BoothItem
              key={prod.id}
              boothId={prod.id}
              height={height}
              left={left}
              width={width}
              setShowPin={setShowPin}
              pinLeft={prod.left}
              pinTop={prod.top}
              setPinLeft={setPinLeft}
              setPinTop={setPinTop}
            />
          );
        })}
      </S.BoothItemBox>
    </S.BoothLayout>
  );
}
