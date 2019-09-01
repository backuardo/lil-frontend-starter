import React from 'react';

function NotFound(props) {
  return (
    <div id="not-found">
      <h1>
        <span role="img" aria-label="person">🧖</span>
        {' '}
        {`Bad url path ${props.match.params.path}`}
      </h1>
    </div>
  );
}

export default NotFound;
