import { useNavigate } from "react-router-dom";
import Sidebar from "../SideBarComp/Sidebar";

export default function Navigation({user, setUser}) {
  const navigate = useNavigate();
  return (
    <>
      <section className="flex flex-row p-4 justify-between items-center">
        <section className="flex flex-row gap-10 justify-around">
            <Sidebar />
        <div className="flex flex-col px-4">
          <p className="text-xl font-semibold">Hey {user.name.split(" ")[0]}</p>
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
    <span className="text-xs">{user.name.slice(0, 1)}</span>
  </div>
</div>
          </div>
        </section>
      </section>
    </>
  );
}
