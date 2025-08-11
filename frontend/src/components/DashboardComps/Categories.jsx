import { useNavigate } from "react-router-dom";
import DoughnutChart from "./Charts/DoughnutChart";

export default function Categories() {
  const navigate = useNavigate();

  function toChart() {
    navigate("/categoryChart");
  }
    return(
        <>
        <section className="p-4 flex flex-row justify-between">
        <section className="flex flex-col w-150 ">
            <h1 className="text-xl">Categories</h1>
            <div  className="ml-40 m-[-3rem]"><DoughnutChart /></div>
        </section>
        <div>
        <button>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className=" m-1">
                <i className="bi bi-three-dots cursor-pointer"></i>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a className="cursor-pointer" onClick={toChart}>More</a>
                </li>
              </ul>
            </div>
          </button>
          </div>
        </section>
        </>
    )
}