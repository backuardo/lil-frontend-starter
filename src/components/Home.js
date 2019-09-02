import React from 'react';

import useMousePosition from '../hooks/useMousePosition';
import EggHead from './EggHead';

function Home() {
  const { mouseXPosition, mouseYPosition } = useMousePosition();
  const backgroundPositionX = mouseXPosition * 0.1;
  const backgroundPositionY = mouseYPosition * 0.1;
  return (
    <div id="home-container" style={{ backgroundPosition: `${backgroundPositionX}% ${backgroundPositionY}%` }}>
      <EggHead />
    </div>
  );
}

export default Home;
