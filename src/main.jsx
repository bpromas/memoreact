import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/generic/reset.css'
import './style/elements/base.css'
import './style/settings/colors.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)