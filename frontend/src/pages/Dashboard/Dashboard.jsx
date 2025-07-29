import AccountBalance from "../../components/DashboardComps/AccountBalance";
import Categories from "../../components/DashboardComps/Categories";
import Income from "../../components/DashboardComps/Income";
import MonthlyExpenses from "../../components/DashboardComps/MonthlyExpenses";
import MonthlyExpensesChart from "../../components/DashboardComps/MonthlyExpensesChart";
import RecentExpenses from "../../components/DashboardComps/RecentExpenses";
import Navigation from "../../components/navigation/Navigation";
import Sidebar from "../../components/SideBarComp/Sidebar";


export default function Dashboard(){
    const labels = ['Food', 'Rent', 'Bills', 'Transport'];
  const data = [500, 1200, 400, 300];
    return (
        <>
        <Navigation /> 
        <section className="flex flex-col h-max min-h-screen bg-gray-100 ">
        <section className='grid grid-rows-1 grid-cols-3 gap-4  p-4'>
        <div className=" rounded shadow-2xs bg-linear-to-t from-blue-200 to-blue-50 h-40 col-1 row-1">
            <AccountBalance />
        </div>
        <div className=" rounded shadow-2xs bg-linear-to-t from-red-200 to-red-50 h-40 col-2 row-1">
            <MonthlyExpenses />
        </div>
        <div className=" rounded shadow-2xs bg-linear-to-t from-green-200 to-green-50 h-40 col-3 row-1">
            <Income />
        </div>

        </section>
        <section className="grid grid-rows-2 grid-cols-2 gap-4 p-4">
        <div className="rounded shadow-2xs bg-white col-1 row-1 ">
           <MonthlyExpensesChart labels={labels} dataValues={data}/>
        </div>
        <div className="rounded shadow-2xs bg-white col-2 row-1">
            <Categories labels={labels} dataValues={data}/>
        </div>
        <div className="col-span-2 rounded shadow-2xs bg-white row-2">
            <RecentExpenses />
        </div>
        </section>
        </section>
        </>
    )
}