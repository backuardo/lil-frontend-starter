import React from 'react';

import Controls from '../connected-components/Controls';
import Counter from '../connected-components/Counter';

function Home() {
  return (
    <div id="home-container">
      <h1>starter kit</h1>
      <Counter />
      <Controls />
    </div>
  );
}

export default Home;
