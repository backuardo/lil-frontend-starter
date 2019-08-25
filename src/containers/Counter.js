import React from 'react';
import { connect } from 'react-redux';

function Counter({ count }) {
  return (
    <div>{`Count: ${count}`}</div>
  );
}

function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps, null)(Counter);
