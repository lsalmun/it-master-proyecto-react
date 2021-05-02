import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

var cartelCookie = document.querySelector('#cookie')
var aceptar = document.querySelector('#cookie a')
var mostrarMensaje = false

if (mostrarMensaje) {
    cartelCookie.style.display = 'none'
}

aceptar.addEventListener('click', function () {
    cartelCookie.style.display = 'none'
})

