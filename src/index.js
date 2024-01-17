import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './style.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { toast, ToastContainer } from 'react-toastify'

ReactDOM.render(
  <React.StrictMode>
    <div id="preloader"></div>
    <App />
    <ToastContainer pauseOnFocusLoss={false}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
