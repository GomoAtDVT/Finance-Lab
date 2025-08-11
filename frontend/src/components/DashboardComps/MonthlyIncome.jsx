import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function MonthlyIncome() {
  const navigate = useNavigate();
  const [monthlyIncome, setMonthlyIncome] = useState([]);

  useEffect( () => {
    
    async function fetchIncome() {
      try{axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      let transactions = await axios.get('http://localhost:5000/api/transactions/incomes')
      setMonthlyIncome(transactions.data.totalAmount);
    } catch (error) {
        console.error("Error fetching monthly income:", error);
      }
    }
      fetchIncome();
  },[]);
  function toIncome() {
    navigate("/income");
  }
  
    return(
        <>
        <section className="p-4 flex flex-row justify-between">
            <div className="flex flex-col gap-4 justify-around">
                <h1 className="text-xl  items-start"><i className="bi bi-graph-up text-lg"></i> &nbsp; Income</h1>
                <p className="text-3xl">R {monthlyIncome || 0}</p>
            </div>
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
                  <a className="cursor-pointer" onClick={toIncome}>More</a>
                </li>
                
              </ul>
            </div>
          </button>
        </div>
      </section>
        </>
    )
}