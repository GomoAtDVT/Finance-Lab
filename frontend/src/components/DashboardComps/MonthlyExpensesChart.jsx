import BarChart from "./Charts/BarChart";

export default function MonthlyExpensesChart({ transactions, user, setUser }) {
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
                  <a>check</a>
                </li>
                <li>
                  <a>delete</a>
                </li>
              </ul>
            </div>
          </button>
        </div>
        <BarChart transactions={transactions} user={user} setUser={setUser}/>
      </section>
    </>
  );
}
