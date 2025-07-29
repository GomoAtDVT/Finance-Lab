import { useNavigate } from "react-router-dom"

export default function MonthlyIncome({transactions}) {
  const navigate = useNavigate();
  function toIncome() {
    navigate("/income");
  }
  let total = 0;
  transactions.forEach((transaction) => {
    total += transaction.amount;
  });
    return(
        <>
        <section className="p-4 flex flex-row justify-between">
            <div className="flex flex-col gap-4 justify-around">
                <h1 className="text-xl  items-start"><i class="bi bi-graph-up text-lg"></i> &nbsp; Income</h1>
                <p className="text-3xl">R {total}</p>
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
                  <button onClick={toIncome}>More</button>
                </li>
                
              </ul>
            </div>
          </button>
        </div>
      </section>
        </>
    )
}