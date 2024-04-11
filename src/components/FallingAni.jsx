import { Snowfall } from 'react-snowfall';

const test = document.createElement('img');
test.src = '../public/test.png';

const images = [test];
export default function FallingAni() {
  return (
    <Snowfall radius={[50, 70]} images={images} snowflakeCount={100}></Snowfall>
  );
}
