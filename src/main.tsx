import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Suppress TypeScript error for side-effect CSS import when no type declarations are present
// @ts-ignore
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
