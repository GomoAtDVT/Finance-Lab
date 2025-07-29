import { useNavigate } from "react-router-dom"

export default function MonthlyExpenses() {
  const navigate = useNavigate();
  function toExpense() {
    navigate("/expenses");
  }
    return(
        <>
        <section className="p-4 gap-4 flex flex-row justify-between h-max">
        <div className="flex flex-col gap-4">
        <h1 className="text-xl items-center"><i className="bi bi-graph-down text-lg"></i>&nbsp; Monthly Expenses</h1>
        <p className="text-3xl">R4,586</p>
        </div>
         <div>
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
                  <button onClick={toExpense}>More</button>
                </li>
              </ul>
            </div>
          </button>
        </div>
        </section>
        </>
    )
}