import alertReducer from './alerts';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  alerts: alertReducer
});

export default allReducers;
