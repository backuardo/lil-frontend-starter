import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../state/actions';

function Controls(props) {
  return (
    <div>
      <button type="button" onClick={props.increment}>
        <i className="far fa-thumbs-up" />
      </button>
      <button type="button" onClick={props.decrement}>
        <i className="far fa-thumbs-down" />
      </button>
    </div>
  );
}

export default connect(null, { increment, decrement })(Controls);
