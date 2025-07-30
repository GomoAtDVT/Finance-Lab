import axios from "axios";
import { useEffect, useState } from "react";
export default function AccountBalance() {

    const [monthlyIncome, setMonthlyIncome] = useState([]);
    const [monthlyExpense, setMonthlyExpense] = useState([]);

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
  const totalBalance = monthlyIncome - monthlyExpense;
    return(
        <>
        <section className="p-4 gap-4 flex flex-row justify-between ">

        <div className="flex flex-col gap-4">
            <h1 className="text-xl items-start"> <i className="bi bi-wallet"></i> &nbsp; Account Balance</h1>
        <p className="text-3xl">R {totalBalance || 0}</p></div>
        
        </section>
        </>
    )
}