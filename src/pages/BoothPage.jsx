import * as S from '../styles/pages/Booth.styled';
import map from '../../public/map.svg';
import { boothData } from '../utils/boothData';
import Footer from '../components/Footer';
import BoothItem from '../components/BoothItem';

export default function BoothPage() {
  return (
    <S.BoothLayout>
      <S.BoothMapImg src={map} />
      <S.BoothLine />
      <S.BoothItemBox>
        <BoothItem />
        <BoothItem />
        <BoothItem />
        <BoothItem />
      </S.BoothItemBox>
      <Footer />
    </S.BoothLayout>
  );
}
