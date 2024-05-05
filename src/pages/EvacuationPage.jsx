import React from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import evacuationRouteGif from '../assets/images/aedGIFPNG.gif';
import background from '../assets/images/bg.png'
import infoImage from '../assets/images/info.png'

const EvacuationPage = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center', 
      minHeight: '800px'
    }}>
      <MenuBar />
      <Header title="AED & EVACUATION" />
      <div>
        <img src={evacuationRouteGif} style={{ display: 'block', margin: 'auto', width: '280px', height: 'auto' }}/>
        <img src={infoImage} style={{ display: 'block', margin: 'auto', paddingTop: '20px', width: '280px', height: 'auto' }}/>
      </div>
    </div>
  );
};

export default EvacuationPage;
