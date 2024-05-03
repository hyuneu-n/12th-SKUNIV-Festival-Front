import { useEffect, useRef } from 'react';
import { Snowfall } from 'react-snowfall';
import test from '../assets/images/flower/test.jpg';

// const flower4 = document.createElement('img');
// flower4.src = '../assets/images/flower/rs1.svg';

// const flower5 = document.createElement('img');
// flower5.src = '../assets/images/flower/rs2.svg';

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
        snowflakeCount={10}
        wind={[3, 5]}
        rotationSpeed={[1, 2]}
      />
    </>
  );
}
