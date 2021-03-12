import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './bootstrap.min.css';
import './index.css';
import LocaleProvider from './context/LocaleContext';

ReactDOM.render(
  <LocaleProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LocaleProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
