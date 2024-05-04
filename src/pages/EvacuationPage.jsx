import React from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import evacuationRouteGif from '../assets/images/aedGIFPNG.gif';

const EvacuationPage = () => {
  return (
    <>
      <MenuBar />
      <Header title="AED & EVACUATION" />
      <div>
        <img src={evacuationRouteGif} style={{ display: 'block', margin: 'auto', width: '280px', height: 'auto' }}/>
        <p>AED 위치 안내/대피로 안내</p>
      </div>
    </>
  );
};

export default EvacuationPage;
