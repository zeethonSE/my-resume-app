import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
          .then((reg) => console.log('Service Worker registered', reg))
          .catch((err) => console.log('Service Worker registration failed', err));
  });
}

createRoot(document.getElementById('root')).render(
<StrictMode>
  <App />
</StrictMode>
);
