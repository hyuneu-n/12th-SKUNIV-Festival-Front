import * as S from '../styles/pages/Booth.styled';
import map from '../../public/map.svg';
import { boothData } from '../utils/boothData';
import Footer from '../components/Footer';
import BoothItem from '../components/BoothItem';
import { useEffect, useRef, useState } from 'react';

export default function BoothPage() {
  const [height, setHeight] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const test = useRef();
  const test1 = useRef();

  useEffect(() => {
    setHeight(test.current.getBoundingClientRect().bottom);
    setLeft(test.current.getBoundingClientRect().left);
    setWidth(test.current.clientWidth);
  }, []);

  return (
    <S.BoothLayout>
      <S.BoothMapImg src={map} ref={test} />
      <S.BoothLine />
      <S.BoothItemBox ref={test1}>
        <BoothItem height={height} left={left} width={width} />
        <BoothItem height={height} left={left} width={width} />
        <BoothItem height={height} left={left} width={width} />
        <BoothItem height={height} left={left} width={width} />
      </S.BoothItemBox>
      <Footer />
    </S.BoothLayout>
  );
}
