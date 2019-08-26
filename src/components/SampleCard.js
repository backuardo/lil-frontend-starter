import React from 'react';

import { Controls, Counter } from '../containers';

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
