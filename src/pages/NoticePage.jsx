import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import MenuBar from '../components/MenuBar';

const Layout = styled.div`
  background-image: url('../../public/background.svg');
`;
const Title = styled.h1`
  margin-top: 69px;
  font-size: 15px;
  font-family: SUIT Variable, sans-serif;
  font-style: extra-bold;
`;
export default function Notice() {
  return (
    <div className="app">
      <MenuBar></MenuBar>
      <Title> 대충 공지</Title>
      <Footer />
    </div>
  );
}
