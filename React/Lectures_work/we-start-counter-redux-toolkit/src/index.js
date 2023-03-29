import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Counter from './Counter';
import { reduxStore } from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={reduxStore}>
    <Counter />
  </Provider>
);
