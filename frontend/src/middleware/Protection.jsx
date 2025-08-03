import { Navigate, Outlet } from "react-router-dom";

export default function Protection() {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to={"/login"} replace />;
  } else if ( token === ("Forbidden") || token === "Unauthorized" || token === 'undefined' || token === null) { 
    return <Navigate to={"/login"} replace />;
    
  }else {
    return <Outlet />;
  }
}
