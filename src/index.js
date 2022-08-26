// coder&c1 is github password
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// creting store
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import reducers from './reducers'
import thunk from "redux-thunk"
const store = createStore(reducers, compose(applyMiddleware(thunk)))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

