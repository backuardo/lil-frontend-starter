import React from 'react';

import Counter from '../connected-components/Counter';

function EggHead() {
  return (
    <div className="egg">
      <Counter />
      <div className="egg-eyes">
        <div className="egg-eye">
          <div className="egg-eye-iris">
            <div className="egg-eye-iris-sparkle" />
          </div>
        </div>
        <div className="egg-eye">
          <div className="egg-eye-iris">
            <div className="egg-eye-iris-sparkle" />
          </div>
        </div>
      </div>
      <div className="egg-mouth" />
    </div>
  );
}

export default EggHead;
