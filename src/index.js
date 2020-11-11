import './index.css';
import store  from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import {Provider} from 'react-redux'




  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <App  dispatch={store.dispatch.bind(store)}  />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );




 