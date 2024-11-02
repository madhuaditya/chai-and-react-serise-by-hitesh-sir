import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Backgournd from './components/Background.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Background />
  </StrictMode>,
)
