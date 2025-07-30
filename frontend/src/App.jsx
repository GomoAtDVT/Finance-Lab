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

function App() {
  const [user, setUser] = useState({
      name : "John Doe",
      email : "Tlq9w@example.com",
  });
  const [transactions, setTransactions] = useState({
     expenses : [
        { amount: 120, category: "Food", name: "Kit-kat", date: "2025-07-28" },
        { amount: 520, category: "Food", name: "LunchBar", date: "2025-07-28" },
        { amount: 50, category: "Transport", name: "Bus", date: "2025-07-27" },
        { amount: 2500, category: "Shopping", name: "Prada Bag", date: "2025-07-26" },
    ],
      incomes : [
        { amount: 12000, category: "Salary", name: "Job", date: "2025-07-28" },
        { amount: 2000, category: "Freelance", name: "Taxi Driver", date: "2025-07-27" },
    ]
  }
  )

const  fetchTransactions = async () => {
  try {
    
  } catch (error){

  }
}
 
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Register />}/>
          <Route path="/login" element={<Login />} />
          <Route element={<Protection />}>
          <Route path="/expenses" element={<Expenses transactions={transactions}/>} />
          <Route path="/income" element={<Income />} />
          <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} transactions={transactions}/>} />
          <Route path="/profile" element={<Profile user={user} setUser={setUser}/>} />
          </Route>
          <Route path="*" element={<ErrorFound />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
