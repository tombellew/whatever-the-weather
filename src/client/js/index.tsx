import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './Components/App'

const createApp = () => {
  const el = document.querySelector('[data-app]') as HTMLElement
  const root = createRoot(el)
  root.render(<App />);
}

createApp();