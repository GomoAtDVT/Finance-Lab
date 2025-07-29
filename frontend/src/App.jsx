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

function App() {
  const [user, setUser] = useState({

  });
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Register />}/>
          <Route path="/login" element={<Login />} />
          {/* <Route element={<Protection />}> */}
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser}/>} />
          <Route path="/profile" element={<Profile user={user} setUser={setUser}/>} />
          {/* </Route> */}
          <Route path="*" element={<ErrorFound />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
