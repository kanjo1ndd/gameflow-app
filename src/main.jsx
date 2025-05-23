import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
} else {
    console.error("Root element not found");
}
