import React from 'react';

const MovingMap = () => {
  const pathD = "M10 10 L 50 50 L 100 10"; // 도형이 움직일 경로를 SVG path 데이터로 정의

  return (
    <div style={{ position: 'relative', width: '500px', height: '500px' }}>
      <img src="/assets/images/evaMap.png" alt="Map" style={{ width: '100%', height: '100%' }} />
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <path id="path1" d={pathD} fill="none" stroke="red" strokeWidth="3" />
        <circle r="5" fill="blue">
          <animateMotion dur="5s" repeatCount="indefinite">
            <mpath href="#path1" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}

export default MovingMap;