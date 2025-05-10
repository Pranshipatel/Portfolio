import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './AppRoutes.jsx'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ErrorBoundary>

    <AppRoutes/>
    </ErrorBoundary>
    </BrowserRouter>
   
  </StrictMode>,
)
