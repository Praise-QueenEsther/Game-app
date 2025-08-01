import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { NameContext } from './pages/demoContext';
import { ConProvider } from './pages/demoContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ConProvider >
    <App />
  </ConProvider >
  </BrowserRouter>
);
