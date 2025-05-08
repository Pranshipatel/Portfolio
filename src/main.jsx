import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Final from './Final.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Final />
  </StrictMode>,
)
