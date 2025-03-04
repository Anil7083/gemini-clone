import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/Context.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './UserContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </ContextProvider>,
)
