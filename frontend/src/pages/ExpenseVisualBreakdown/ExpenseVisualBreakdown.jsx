import { useNavigate } from "react-router-dom";
import Navigation from "../../components/navigation/Navigation";
import { ExpenseBarChart } from "./Chart/ExpenseBarChart";

export default function ExpenseVisualBreakdown() {
    const navigate = useNavigate();
     function toExpense(){
        navigate("/expenses");
    }
    function toIncome(){
        navigate("/income");
    }
    function toDashboard(){
        navigate("/dashboard");
    }
    function toChart(){
        navigate("/categoryChart");
    }
    return (
        <>
        <Navigation />
        <section className="flex flex-row bg-gray-200">
        <aside className="flex flex-col w-50 p-4 gap-10 pt-16 bg-gray-100 h-screen shadow-md">
            <a onClick={toExpense} className="btn font-semibold italic border-b-1  ">Expense Transactions</a>
            <a onClick={toIncome} className="btn font-semibold italic border-b-1  ">Income Transactions</a>
            <a onClick={toDashboard} className="btn  font-semibold italic border-b-1 p-4">Dashboard</a>
            <a onClick={toChart} className="btn font-semibold italic border-b-1 p-4">Category Chart</a>
        </aside>
        <section className="p-10 pt-0 m-16 mt-0 h-full w-350 items-center flex flex-col justify-between">
        <h1 className="text-2xl font-bold text-start my-4">Expense Visual Breakdown</h1>
        <ExpenseBarChart />
        </section>
        </section>
        </>
    )
}