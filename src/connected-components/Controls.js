import React from 'react';
import { connect } from 'react-redux';

import Counter from './Counter';
import { increment, decrement } from '../state/actions';

function Controls(props) {
  return (
    <div className="controls">
      <button type="button" onClick={props.increment}>
        <i className="far fa-hand-point-up" />
      </button>
      <Counter />
      <button type="button" onClick={props.decrement}>
        <i className="far fa-hand-point-down" />
      </button>
    </div>
  );
}

export default connect(null, { increment, decrement })(Controls);
