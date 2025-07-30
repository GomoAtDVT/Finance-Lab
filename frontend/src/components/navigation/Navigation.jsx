import { useNavigate } from "react-router-dom";
import Sidebar from "../SideBarComp/Sidebar";
import { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";
import axios from "axios";

export default function Navigation() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState([])

  async function fetchUser() {
    try{
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      const response = await axios.get('http://localhost:5000/api/user/16');
setCurrentUser(response.data.user);
    } catch (error){
      console.error("Error fetching user:", error);
    }
  }
  useEffect(()=> {
    fetchUser();
  },[])
  console.log( currentUser);
  return (
    <>
      <section className="flex flex-row p-4 justify-between items-center">
        <section className="flex flex-row gap-10 justify-around">
            {/* <Sidebar /> */}
        <div className="flex flex-col px-4">          

          <p className="text-xl font-semibold">Hey {currentUser.map((user) => user.username.split(" ")[0])}</p>
          <p>Track all your finances here</p>
        </div>
        </section>
        <section className="flex flex-row gap-4 items-center">
          
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search" />
            </label>
          </div>
          <div>
            <div className="avatar avatar-placeholder" onClick={() => navigate("/profile")}>
  <div className="bg-neutral text-neutral-content w-10 rounded-full">
    <span className="text-xs">{currentUser.map((user) => user.username.slice(0, 1))}</span>
  </div>
</div>
          </div>
        </section>
      </section>
    </>
  );
}
