import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* app ko wraped with auth provider */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
