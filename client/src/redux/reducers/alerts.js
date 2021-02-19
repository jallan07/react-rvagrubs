import { SET_ALERT, REMOVE_ALERT } from '../actions';

// based on the action that is dispatched, the reducer will change the store's globalized state
const alertReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.msg];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.msg !== action.msg);
    default:
      return state;
  }
};

export default alertReducer;
