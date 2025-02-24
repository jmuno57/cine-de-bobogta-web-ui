import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './registry-wc/webcomponents-registry';
import App from './App';
import { Provider } from 'react-redux';
import store from './core/shared/store';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/"> 
          <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
