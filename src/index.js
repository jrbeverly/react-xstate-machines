import React from 'react';
import ReactDOM from "react-dom";
import Modal from "react-modal";

import App from './App';

import './index.css';

const rootElement = document.getElementById("root");

Modal.setAppElement(rootElement);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
