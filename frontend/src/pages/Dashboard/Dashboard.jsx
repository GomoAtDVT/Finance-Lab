import AccountBalance from "../../components/DashboardComps/AccountBalance";
import Categories from "../../components/DashboardComps/Categories";
import MonthlyExpenses from "../../components/DashboardComps/MonthlyExpenses";
import MonthlyExpensesChart from "../../components/DashboardComps/MonthlyExpensesChart";
import RecentExpenses from "../../components/DashboardComps/RecentExpenses";
import Navigation from "../../components/navigation/Navigation";
import MonthlyIncome from "../../components/DashboardComps/MonthlyIncome";
import axios from "axios";
import { useEffect } from "react";


export default function Dashboard() {
    
    
    return (
        <>
        <Navigation/> 
        <section className="flex flex-col h-max min-h-screen bg-gray-100 ">
        <section className='grid grid-rows-1 grid-cols-3 gap-4  p-4'>
        <div className=" rounded shadow-2xs bg-blue-400 h-40 col-1 row-1">
            <AccountBalance />
        </div>
        <div className=" rounded shadow-2xs bg-red-500 h-40 col-2 row-1">
            <MonthlyExpenses />
        </div>
        <div className=" rounded shadow-2xs bg-green-400 h-40 col-3 row-1">
            <MonthlyIncome />
        </div>

        </section>
        <section className="grid grid-rows-2 grid-cols-2 gap-4 p-4">
        <div className="rounded shadow-2xs bg-white col-1 row-1 ">
           <MonthlyExpensesChart />
        </div>
        <div className="rounded shadow-2xs bg-white col-2 row-1">
            <Categories />
        </div>
        <div className="col-span-2 rounded shadow-2xs bg-white row-2">
            <RecentExpenses />
        </div>
        </section>
        </section>
        </>
    )
}