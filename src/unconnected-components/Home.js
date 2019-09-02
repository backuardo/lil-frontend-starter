import React from 'react';

import EggHead from './EggHead';
import Controls from '../connected-components/Controls';
import Counter from '../connected-components/Counter';

function Home() {
  return (
    <div id="home-container">
      <EggHead />
      <Controls />
      <Counter />
    </div>
  );
}

export default Home;
