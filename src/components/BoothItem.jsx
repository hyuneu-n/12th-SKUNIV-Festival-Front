import * as S from '../styles/components/BoothItem.styled';
import { boothData } from '../utils/boothData';

import Sheet from 'react-modal-sheet';
import { useState } from 'react';

export default function BoothItem({
  boothId,
  height,
  left,
  width,
  setShowPin,
  pinLeft,
  pinTop,
  setPinLeft,
  setPinTop,
}) {
  const [isOpen, setOpen] = useState(false);
  const booth = boothData.find((b) => b.id === boothId);
  return (
    <S.BoothItemLayout
      onClick={() => {
        setOpen(true);
        setShowPin(true);
        setPinTop(pinTop);
        setPinLeft(pinLeft);
      }}
    >
      <S.BoothItemGrayBox />
      <S.BoothItemInfoBox>
        <S.BoothItemTitleP>
          {booth ? booth.boothName : 'Loading...'}
        </S.BoothItemTitleP>
        <S.BoothItemNumberP>
          {booth ? booth.major : 'Loading...'}
        </S.BoothItemNumberP>
      </S.BoothItemInfoBox>
      <S.CustomSheet
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
          setShowPin(false);
        }}
        rootId="app"
        $height={height}
        $left={left}
        $width={width}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            {booth && (
              <div>
                <h2>{booth.boothName}</h2>
                <S.BoothItemParagraph>{booth.intro}</S.BoothItemParagraph>
                <S.BoothMenuIntroBox>
                  {/* {' '} */}
                  <S.BoothDayBox>
                    <S.BoothMenuParagraph>DAY</S.BoothMenuParagraph>
                    <ul>
                      {Object.entries(booth.menuDay).map(([item, price]) => (
                        <li key={item}>
                          {item}: {price}
                        </li>
                      ))}
                    </ul>
                  </S.BoothDayBox>
                  <S.BoothMenuDivider />
                  <S.BoothNightBox>
                    <S.BoothMenuParagraph>NIGHT</S.BoothMenuParagraph>
                    <ul>
                      {Object.entries(booth.menuNight).map(([item, price]) => (
                        <li key={item}>
                          {item}: {price}
                        </li>
                      ))}
                    </ul>
                  </S.BoothNightBox>
                </S.BoothMenuIntroBox>

                <p>{booth.account}</p>
                <button>
                  <a href={booth.snsLink}>SNS 구경하기</a>
                </button>
              </div>
            )}
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </S.CustomSheet>
    </S.BoothItemLayout>
  );
}
