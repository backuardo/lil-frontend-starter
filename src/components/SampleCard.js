import React from 'react';

import Controls from '../containers/Controls';
import Counter from '../containers/Counter';

function SampleCard() {
  return (
    <div className="sample-card">
      <h1>Ben&#39;s starter kit</h1>
      <Counter />
      <Controls />
    </div>
  );
}

export default SampleCard;
