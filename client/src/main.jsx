import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {} from "react-router-dom"
import { FourOhFour } from './Navigation/FourOhFour';
import { AuthProvider } from './Authentication/AuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
        <Route path="*" element={<FourOhFour/>} />
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
