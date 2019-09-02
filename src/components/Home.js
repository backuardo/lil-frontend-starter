import React from 'react';

import useMousePosition from '../hooks/useMousePosition';
import EggHead from './EggHead';

function Home() {
  const { mouseXPosition, mouseYPosition } = useMousePosition();
  const backgroundPositionX = 500 - mouseXPosition;
  const backgroundPositionY = 500 - mouseYPosition;
  return (
    <div id="home-container" style={{ backgroundPosition: `${backgroundPositionX}% ${backgroundPositionY}%` }}>
      <EggHead />
    </div>
  );
}

export default Home;
