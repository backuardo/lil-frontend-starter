import React from 'react';
import packageDotJson from '../../package.json';

function EggHead() {
  return (
    <a href={packageDotJson.repository}>
      <div className="egg">
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
    </a>
  );
}

export default EggHead;
