import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import MenuBar from '../components/MenuBar';

const Layout = styled.div`
  background-image: url('../../public/background.svg');
`;
export default function HomePage() {
  return (
    <>
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
      <p>test</p>
      <Footer />
    </>
  );
}
