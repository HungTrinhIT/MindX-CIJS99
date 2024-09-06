import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core';
import { all } from '@awesome.me/kit-KIT_CODE/icons';

import App from './App.jsx';

import './index.css';

library.add(...all);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
// Component: App
// CSR: Client side rendering
// -> HTML Creating
// SSR: Server side rendering
