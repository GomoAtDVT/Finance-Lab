import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css'
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Expenses from './pages/Expenses/Expenses';
import Dashboard from './pages/Dashboard/Dashboard';
import ErrorFound from './pages/Error/ErrorFound';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Register />}/>
          <Route path="login" element={<Login />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<ErrorFound />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
