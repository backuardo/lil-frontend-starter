import { combineReducers } from 'redux';

import CountReducer from './countReducer';

const rootReducer = combineReducers({
  count: CountReducer,
});

export default rootReducer;
