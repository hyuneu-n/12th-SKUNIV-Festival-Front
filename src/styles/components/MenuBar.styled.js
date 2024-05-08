export const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '25px',
    height: '18px',
    left: '25px',
    top: '25px',
    zIndex: '1200', // z-index를 높게 설정하여 다른 요소들 위에 보이도록 설정
  },
  bmBurgerBars: {
    height: '15%',
    background: '#000000',
  },
  bmBurgerBarsHover: {
    background: '#7bd317', // 색상 코드 수정
  },
  bmCrossButton: {
    height: '24px', // 크기를 더 적절하게 조정
    width: '24px',  // 너비를 높이와 동일하게 설정
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    width: '250px', // 메뉴의 너비를 300px로 설정
    left: '0px',
  },
  bmMenu: {
    background: '#ffffff',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Pretendard, sans-serif',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    display: 'flex',
    padding: '0.8em',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bmItem: {
    display: 'inline-block',
    color: 'rgb(0, 0, 0)',
    marginTop: '10px',
    marginBottom: '10px',
    fontFamily: 'Pretendard, sans-serif',
  },
  bmOverlay: {
    width: '100vw', // 전체 뷰포트 너비로 설정
    background: 'rgba(0, 0, 0, 0.3)',
  },
};
