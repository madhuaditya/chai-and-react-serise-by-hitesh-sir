import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Background from "./assets/components/Background.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Background/>
  </StrictMode>,
)
