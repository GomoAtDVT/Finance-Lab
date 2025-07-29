import { Navigate, Outlet } from "react-router-dom";

export default function Protection() {
  const token = localStorage.getItem("token");
  if (!token) {
    <Navigate to={"/Login"} replace />;
  } else {
    <Outlet />;
  }
}
