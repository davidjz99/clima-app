import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClimaApp } from './ClimaApp'
import './styles/ClimaStyles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClimaApp />
  </React.StrictMode>,
)
