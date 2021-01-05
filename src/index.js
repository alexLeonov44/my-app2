import './index.css';
import store  from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';




  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
      <App  dispatch={store.dispatch.bind(store)}  />
      </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );




 