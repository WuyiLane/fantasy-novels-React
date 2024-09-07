import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/border.css'
import 'normalize.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 *100 + 'px';

window.addEventListener('resize',() =>{
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 *100 + 'px';
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
