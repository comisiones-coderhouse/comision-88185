import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { App } from './App.jsx'
import { CustomCartProvider } from "./providers/CartProvider.jsx";
import './index.css'


const DOMElement = document.getElementById('root')
const VDOMElement = createRoot(DOMElement)

VDOMElement.render(
  <StrictMode>
    <BrowserRouter>
      {/* 5) Envuelvo a la aplicacion en el CustomCartProvider */}
      <CustomCartProvider>
        <App />
      </CustomCartProvider>
    </BrowserRouter>
  </StrictMode>,
)
