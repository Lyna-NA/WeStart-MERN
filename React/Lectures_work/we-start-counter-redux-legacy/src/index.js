import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Counter from './Counter';
import './Index.css';
import { counterStore } from './redux/counter-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={counterStore}>
    <Counter />
  </Provider>
);
