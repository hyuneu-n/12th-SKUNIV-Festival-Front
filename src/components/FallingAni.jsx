import { Snowfall } from 'react-snowfall';

const test = document.createElement('img');
test.src = '../public/test.png';

const test2 = document.createElement('img');
test2.src = '../public/test2.png';

const images = [test, test2];
export default function FallingAni() {
  return (
    <Snowfall
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
      }}
      radius={[30, 40]}
      images={images}
      snowflakeCount={10}
      wind={[3, 5]}
      rotationSpeed={[1, 2]}
    ></Snowfall>
  );
}
