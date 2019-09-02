import React from 'react';

import EggHead from './EggHead';
import Controls from '../connected-components/Controls';

function Home() {
  return (
    <div id="home-container">
      <Controls />
      <EggHead />
    </div>
  );
}

export default Home;
