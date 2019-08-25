import React from 'react';
import { Controls, Counter } from '../containers';

import '../style.scss';

function App() {
  return (
    <div id="app">
      <h1>ben&apos;s frontend starter kit</h1>
      <Counter />
      <Controls />
    </div>
  );
}

export default App;
