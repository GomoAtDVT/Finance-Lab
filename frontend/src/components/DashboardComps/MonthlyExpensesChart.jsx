import { useNavigate } from "react-router-dom";
import BarChart from "./Charts/BarChart.jsx";

export default function MonthlyExpensesChart() {
  const navigate = useNavigate();

  function toChart() {
    navigate("/expensesChart");
  }
  return (
    <>
      <section className="p-4 flex flex-col justify-between">
        <div className="flex flex-row justify-between">
          <h1 className="text-xl items-start">Monthly Expenses Chart</h1>
          <button>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className=" m-1">
                <i className="bi bi-three-dots"></i>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a onClick={toChart}>More</a>
                </li>
              </ul>
            </div>
          </button>
        </div>
        <BarChart />
      </section>
    </>
  );
}
