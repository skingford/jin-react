/*
 * @Author: kingford
 * @Date: 2021-05-14 22:19:53
 * @LastEditTime: 2021-05-17 14:25:41
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import {AppRouter} from './router';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
