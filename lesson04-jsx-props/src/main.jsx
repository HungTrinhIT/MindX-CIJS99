import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <App />
  //* </StrictMode>}
);
// Component: App
// CSR: Client side rendering
// -> HTML Creating
// SSR: Server side rendering
