import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Globalstyles from './globalstyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Globalstyles />
    <App />
  </StrictMode>,
)
