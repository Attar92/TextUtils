import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// let bable = document.getElementById('flexSwitchCheckDefault');
// let entire = document.getElementById("root")
// bable.addEventListener("click", ()=>{
//   if(bable.value == true){
//     entire.style.backgroundColor = "black"
//   }else{
//     entire.style.backgroundColor = "white"
//   }
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />    
  </React.StrictMode>
);
// line no 10 means rendering a comp called app [which is the app func in app.js]

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
