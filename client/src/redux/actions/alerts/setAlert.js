import store from '../../store';
import { SET_ALERT, REMOVE_ALERT } from '..';

export const setAlert = (msg, timeout = 10000) => {
  store.dispatch({
    type: SET_ALERT,
    msg: msg
  });
  setTimeout(
    () => store.dispatch({ type: REMOVE_ALERT, payload: msg }),
    timeout
  );
};
