import axios from "axios";
import { useEffect, useState } from "react";

export default function RecentExpenses() {
    const [expenses, setExpenses] = useState([]);
     async function GetExpense() {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    let ExpenseResponse = await axios.get(
      "http://localhost:5000/api/transactions/expenses"
    );
    setExpenses(ExpenseResponse.data.myExpenses);
  }
  useEffect(() => {
    GetExpense();
  }, []);

    return (
        <>
            <section className="p-4 flex flex-col justify-between">
                <h1 className="text-xl">Recent Expenses</h1>
                <div className="overflow-x-auto mt-4 border rounded-lg">
                <table className="table table-zebra">
                    <thead >
                        <tr className="bg-gray-200 ">
                            <th className=" ">#</th>
                            <th className="">Name</th>
                            <th className="">Amount</th>
                            <th className="">Category</th>
                            <th className="">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense, idx) => (
                            <tr key={idx} className="">
                                <td className="px-4 py-2 ">{idx + 1}</td>
                                <td className="px-4 py-2 border-x">{expense.name}</td>
                                <td className="px-4 py-2 border-x">{expense.amount}</td>
                                <td className="px-4 py-2 border-x">{expense.category}</td>
                                <td className="px-4 py-2 ">{expense.updated_at.slice(0, 10)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </section>
        </>
    );
}