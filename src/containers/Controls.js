import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../state/actions';

function Controls(props) {
  return (
    <div>
      <button type="button" onClick={props.increment}>+</button>
      <button type="button" onClick={props.decrement}>-</button>
    </div>
  );
}

export default connect(null, { increment, decrement })(Controls);
