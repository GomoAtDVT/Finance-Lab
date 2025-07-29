import DoughnutChart from "./Charts/DoughnutChart";

export default function Categories({transactions, user, setUser }) {
    return(
        <>
        <section className="p-4 flex flex-row justify-between">
        <section className="flex flex-col w-150 ">
            <h1 className="text-xl">Categories</h1>
            <div  className="ml-40 m-[-3rem]"><DoughnutChart transactions={transactions} user={user} setUser={setUser}/></div>
        </section>
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
                  <a>check</a>
                </li>
                <li>
                  <a>delete</a>
                </li>
              </ul>
            </div>
          </button>
          </div>
        </section>
        </>
    )
}