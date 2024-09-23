import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(<App />);
// CSR: Client Side Rendering
// SSR: Server Side Rendering 

// HTTP: Hypertext Transfer Protocol
// API: Application Programming Interface

/*
    HTTP 
    Phương thức giao tiếp
        GET
        POST
        PUT
        DELETE
    Status code: 
        2xx: Thành công
        4xx: Client error
        5xx: Server error
*/