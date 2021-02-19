import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';

// redux
import store from './redux/store';
import { Provider } from 'react-redux';

// display in console
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
