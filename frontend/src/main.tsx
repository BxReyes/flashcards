import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import App from './App';
import './styles/main.css';

const root: Root = createRoot(document.querySelector('#root')!);
function renderApp() {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

renderApp();
