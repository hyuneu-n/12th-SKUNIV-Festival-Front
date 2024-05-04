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
  const booth = boothData.find(b => b.id === boothId);
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
        <S.BoothItemTitleP>{booth ? booth.boothName : 'Loading...'}</S.BoothItemTitleP>
        <S.BoothItemNumberP>{booth ? booth.intro : 'Loading...'}</S.BoothItemNumberP>
      </S.BoothItemInfoBox>
      <S.CustomSheet
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
          setShowPin(false);
        }}
        rootId="root"
        $height={height}
        $left={left}
        $width={width}
      >
        <Sheet.Container>
        <Sheet.Header />
          <Sheet.Content>
            {/* Display the detailed information about the booth */}
            {booth && (
              <div>
                <h2>{booth.boothName} - {booth.major}</h2>
                <p>{booth.intro}</p>
                <ul>
                  {Object.entries(booth.menu).map(([item, price]) => (
                    <li key={item}>{item}: {price}</li>
                  ))}
                </ul>
                <p>Instagram: <a href={booth.snsLink}>{booth.snsLink}</a></p>
              </div>
            )}
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </S.CustomSheet>
    </S.BoothItemLayout>
  );
}
