import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CounterStore from './stores/CounterStore';
import MarketStore from './stores/MarketStore';

const counterStore = new CounterStore();
const marketStore = new MarketStore();

ReactDOM.render(
  <Provider counterStore={counterStore} marketStore={marketStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
