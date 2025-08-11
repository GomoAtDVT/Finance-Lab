import { useNavigate } from "react-router-dom";
import Navigation from "../../components/navigation/Navigation";
import CategoryDoughnutChart from "./CategoryChart/CategoryDoughnutChart";
import ExpCategoryDoughnutChart from "./CategoryChart/ExpCategoryDoughnutChart";

export default function CategoryVisualBreakdown() {
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
        <section className="flex flex-row bg-gray-50">
        <aside className="flex flex-col w-50 p-4 gap-10 pt-16 bg-gray-100 h-screen shadow-md">
            <a onClick={toExpense} className="btn font-semibold italic border-b-1  ">Expense Transactions</a>
            <a onClick={toIncome} className="btn font-semibold italic border-b-1  ">Income Transactions</a>
            <a onClick={toDashboard} className="btn  font-semibold italic border-b-1 p-4">Dashboard</a>
        </aside>
        <section className="p-10 pt-0 m-16 mt-0 h-150 items-center flex flex-col justify-between">
        {/* <h1 className="text-2xl font-bold text-center my-6">Category Visual Breakdown</h1> */}
        <section className="flex flex-row  justify-between">
        <div className="h-150 w-150">
        <h1 className="text-2xl font-bold  my-4">Income Categories</h1>
        <CategoryDoughnutChart />
        </div>
        <div className="h-150 w-150">
        <h1 className="text-2xl font-bold my-4">Expense Categories</h1>
        <ExpCategoryDoughnutChart />
        </div>
        </section>
        </section>
        </section>
        </>
    )
}