import store from '../store';
import { SET_ALERT, REMOVE_ALERT } from '../actions';

export const setAlert = (msg, id, timeout = 4000) => {
  store.dispatch({
    type: SET_ALERT,
    msg: msg
  });
  setTimeout(
    () => store.dispatch({ type: REMOVE_ALERT, payload: msg }),
    timeout
  );
};
