import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="Iwan Plamboyan" pekerjaan="Peserta Bootcamp batch 3" />
    <App name="coba" pekerjaan="Peserta Bootcamp batch 3" />
  </React.StrictMode>
);
