import AccountBalance from "../../components/DashboardComps/AccountBalance";
import Categories from "../../components/DashboardComps/Categories";
import MonthlyExpenses from "../../components/DashboardComps/MonthlyExpenses";
import MonthlyExpensesChart from "../../components/DashboardComps/MonthlyExpensesChart";
import RecentExpenses from "../../components/DashboardComps/RecentExpenses";
import Navigation from "../../components/navigation/Navigation";
import MonthlyIncome from "../../components/DashboardComps/MonthlyIncome";


export default function Dashboard({transactions, user, setUser}) {
    
    return (
        <>
        <Navigation user={user} setUser={setUser}/> 
        <section className="flex flex-col h-max min-h-screen bg-gray-100 ">
        <section className='grid grid-rows-1 grid-cols-3 gap-4  p-4'>
        <div className=" rounded shadow-2xs bg-linear-to-t from-blue-200 to-blue-50 h-40 col-1 row-1">
            <AccountBalance transactions={transactions}/>
        </div>
        <div className=" rounded shadow-2xs bg-linear-to-t from-red-200 to-red-50 h-40 col-2 row-1">
            <MonthlyExpenses transactions={transactions.expenses}/>
        </div>
        <div className=" rounded shadow-2xs bg-linear-to-t from-green-200 to-green-50 h-40 col-3 row-1">
            <MonthlyIncome transactions={transactions.incomes}/>
        </div>

        </section>
        <section className="grid grid-rows-2 grid-cols-2 gap-4 p-4">
        <div className="rounded shadow-2xs bg-white col-1 row-1 ">
           <MonthlyExpensesChart transactions={transactions.expenses} user={user} setUser={setUser}/>
        </div>
        <div className="rounded shadow-2xs bg-white col-2 row-1">
            <Categories transactions={transactions.expenses}  user={user} setUser={setUser}/>
        </div>
        <div className="col-span-2 rounded shadow-2xs bg-white row-2">
            <RecentExpenses transactions={transactions.expenses}/>
        </div>
        </section>
        </section>
        </>
    )
}