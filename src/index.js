// Title: Index
// Details: Main file for rendering React App component.
// Author: raadu
// Date: 17 March 2021, 11:28PM

// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);