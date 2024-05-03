import { useEffect, useRef } from 'react';
import { Snowfall } from 'react-snowfall';

// const flower4 = document.createElement('img');
// flower4.src = '../assets/images/flower/rs1.svg';

const flower1 = document.createElement('img');
flower1.src = 'public/1.png';

const flower2 = document.createElement('img');
flower2.src = 'public/2.png';

const flower3 = document.createElement('img');
flower3.src = 'public/3.png';

const images = [flower1, flower2, flower3];
export default function FallingAni() {
  return (
    <>
      <Snowfall
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
        radius={[40, 50]}
        images={images}
        snowflakeCount={10}
        wind={[3, 5]}
        rotationSpeed={[1, 2]}
      />
    </>
  );
}
