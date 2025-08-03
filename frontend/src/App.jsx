import { useState } from 'react';
import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Expenses from './pages/Expenses/Expenses';
import Dashboard from './pages/Dashboard/Dashboard';
import ErrorFound from './pages/Error/ErrorFound';
import Protection from './middleware/Protection';
import Profile from './pages/Profile/Profile';
import Income from './pages/Income/Income';
import axios from 'axios';
import ExpenseVisualBreakdown from './pages/ExpenseVisualBreakdown/ExpenseVisualBreakdown';
import CategoryVisualBreakdown from './pages/CategoryVisualBreakdown/CategoryVisualBreakdown';

function App() {
  const [user, setUser] = useState({
      name : "John Doe",
      email : "Tlq9w@example.com",
  });
  


 
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Register />}/>
          <Route path="/login" element={<Login />} />
          <Route element={<Protection />}>

          <Route path="/expenses" element={<Expenses />} />
          <Route path="/expensesChart" element={<ExpenseVisualBreakdown />} />
          <Route path="/categoryChart" element={<CategoryVisualBreakdown />} />
          <Route path="/income" element={<Income />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<ErrorFound />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
