import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { Configuration, PopoverManager, ModalManager, Toaster } from '@pega/cosmos-react-core';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router basename={window.location.pathname || ''}>
    <Configuration>
      <PopoverManager>
        <Toaster dismissAfter={5000}>
          <ModalManager>
            <App />
          </ModalManager>
        </Toaster>
      </PopoverManager>
    </Configuration>
  </Router>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
