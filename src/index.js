import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // redux 적용 
  <Provider store={store}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


// 1. router 세팅
// 2. redux 적용 <Provider>
