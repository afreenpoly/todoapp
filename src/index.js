import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from "./Header";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const headerRoot = ReactDOM.createRoot(document.getElementById("header"));
headerRoot.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
