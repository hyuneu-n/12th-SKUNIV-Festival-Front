import { Snowfall } from 'react-snowfall';

const flower1 = document.createElement('img');
flower1.src = '../public/flower/ls1.svg';

const flower2 = document.createElement('img');
flower2.src = '../public/flower/ls2.svg';

const flower3 = document.createElement('img');
flower3.src = '../public/flower/ls3.svg';

const flower4 = document.createElement('img');
flower4.src = '../public/flower/rs1.svg';

const flower5 = document.createElement('img');
flower5.src = '../public/flower/rs2.svg';

const images = [flower1, flower2, flower3, flower4, flower5];
export default function FallingAni() {
  return (
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
    ></Snowfall>
  );
}
