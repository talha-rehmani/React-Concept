import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Components1 from './Components1';
import reportWebVitals from './reportWebVitals';
import User from './User'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div  className='App'><button onClick={User}>Click me </button></div>
    <div className='App'><button onClick={()=>alert("This is Arrow Function")}>Arrow Function</button></div>
    <Components1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
