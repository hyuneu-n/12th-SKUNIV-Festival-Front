import { useEffect } from 'react';
import { Snowfall } from 'react-snowfall';
import { keyframes, styled } from 'styled-components';

const test = document.createElement('img');
test.src = '../public/test.png';

const test2 = document.createElement('img');
test2.src = '../public/test2.png';

const images = [test, test2];
export default function FallingAni() {
  let animation = keyframes`
      0% { opacitiy: 1; }
      100% { opacitiy: 0; }
  `;
  const TestF = styled(Snowfall)`
    animation: ${animation} 2s infinite !important;
  `;

  return <TestF radius={[30, 40]} images={images} snowflakeCount={20}></TestF>;
}
