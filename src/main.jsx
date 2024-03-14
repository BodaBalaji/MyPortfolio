import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Dashboard from './components/Dashboard.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Information from './components/Information.jsx'
import Master from './components/Master.jsx'
import Home from './components/Home.jsx'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Master/>
    </BrowserRouter>
  </React.StrictMode>,
)