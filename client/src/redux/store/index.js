import { createStore } from 'redux';
import allReducers from '../reducers/index';

// establish the store to hold globalized state
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
