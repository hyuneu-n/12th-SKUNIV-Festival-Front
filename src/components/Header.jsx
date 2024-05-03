// import * as S from '../styles/components/Header.styled';

// import MenuBar from './MenuBar';

// export default function Header() {
//   return (
//     <>
//       <S.HeaderLayout>
//         <MenuBar />
//         <S.HeaderNameParagraph>BOOTH MAP</S.HeaderNameParagraph>
//       </S.HeaderLayout>
//     </>
//   );
// }
import * as S from '../styles/components/Header.styled';
import MenuBar from './MenuBar';

export default function Header({ title = 'Default Title' }) { 
  return (
    <>
      <S.HeaderLayout>
        <MenuBar />
        <S.HeaderNameParagraph>{title}</S.HeaderNameParagraph>
      </S.HeaderLayout>
    </>
  );
}
