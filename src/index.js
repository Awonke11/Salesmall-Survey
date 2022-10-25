import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SurveyContextProvider from './context/SurveyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SurveyContextProvider>
      <App />
    </SurveyContextProvider>
  </React.StrictMode>
);

reportWebVitals();
