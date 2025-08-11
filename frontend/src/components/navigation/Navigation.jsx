import { useNavigate } from "react-router-dom";
import Sidebar from "../SideBarComp/Sidebar";
import { useEffect, useState } from "react";
import Refresh from "../RefreshComp/Refresh";
import axios from "axios";

export default function Navigation() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState([]);

  setInterval(() => {
    window.location.reload();
  }, 430000)
  if(window.location === "/login"){
    clearInterval();
  }

  async function logoutUser() {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

  async function GetUser() {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
      const response = await axios.get("http://localhost:5000/api/user", {
        email: localStorage.getItem("email"),
      });
      setCurrentUser(response.data);
    } catch (error) {
      console.error("Error fetching user:", error);
      if(error.response.status === 403) {
        await logoutUser();
        
      }
    }
  }

  useEffect(() => {
    GetUser();
  }, []);

  let userIntro =
    currentUser.user !== undefined
      ? currentUser.user.map((user) => user.username.split(" ")[0])
      : " friend";
  let avatarLetter =
    currentUser.user !== undefined
      ? currentUser.user.map((user) => user.username.slice(0, 1))
      : " ";
  return (
    <>
      <section className="flex flex-row p-4 justify-between items-center">
        <section className="flex flex-row gap-10 justify-around">
          <div className="flex flex-col px-4">
            <p className="text-xl font-semibold">Hey {userIntro}</p>
            <p>Track all your finances here</p>
          </div>
        </section>
        <section className="flex flex-row gap-4 items-center">
          <div className="flex flex-row gap-6 items-center">
            <abbr title="Logout">
              <div
                className="avatar avatar-placeholder cursor-pointer "
                onClick={logoutUser}
              >
                <div className=" text-neutral-content w-10 rounded-full bg-red-900">
                  <span className="text-xs">
                    <i className="bi bi-box-arrow-left text-white"></i>
                  </span>
                </div>
              </div>
            </abbr>
            <abbr title="Profile">
              <div
                className="avatar avatar-placeholder cursor-pointer"
                onClick={() => navigate("/profile")}
              >
                <div className="bg-neutral text-neutral-content w-10 rounded-full">
                  <span className="text-lg">{avatarLetter}</span>
                </div>
              </div>
            </abbr>
          </div>
        </section>
        {<Refresh />}
      </section>
    </>
  );
}
