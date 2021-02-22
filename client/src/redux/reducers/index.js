import alertReducer from './alerts';
import authReducer from './auth';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  alerts: alertReducer,
  auth: authReducer
});

export default allReducers;
