import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function MonthlyExpenses({transactions}) {
  const navigate = useNavigate();
  const [monthlyExpense, setMonthlyExpense] = useState([]);

  async function fetchIncome() {
    try{axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    let transactions = await axios.get('http://localhost:5000/api/transactions/expenses')
    setMonthlyExpense(transactions.data.totalAmount);
  } catch (error) {
      console.error("Error fetching monthly income:", error);
    }
  }

  useEffect( () => {
      fetchIncome();
  },[]);
  function toExpense() {
    navigate("/expenses");
  }
  
    return(
        <>
        <section className="p-4 gap-4 flex flex-row justify-between h-max">
        <div className="flex flex-col gap-4">
        <h1 className="text-xl items-center"><i className="bi bi-graph-down text-lg"></i>&nbsp; Monthly Expenses</h1>
        <p className="text-3xl">R {monthlyExpense || 0}</p>
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
                  <a onClick={toExpense}>More</a>
                </li>
              </ul>
            </div>
          </button>
        </div>
        </section>
        </>
    )
}