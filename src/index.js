import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as alertProvider, positions, transitions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'
const root = ReactDOM.createRoot(document.getElementById('root'));
const options = {position:positions.BOTTOM_CENTER,timeout:5000, transition:transitions.SCALE}
root.render(
  
  <React.StrictMode>
    <alertProvider template={AlertTemplate} {...options}>
       <App />
      </alertProvider>
  </React.StrictMode>
);


reportWebVitals();
