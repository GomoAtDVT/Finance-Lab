export default function AccountBalance({transactions}) {

    let totalExpenses = 0;
    let totalIncome = 0;
    transactions.expenses.forEach((expense) => {
        totalExpenses += expense.amount;
    });
    transactions.incomes.forEach((income) => {
        totalIncome += income.amount;
    });
    const balance = totalIncome - totalExpenses;
    return(
        <>
        <section className="p-4 gap-4 flex flex-row justify-between ">

        <div className="flex flex-col gap-4">
            <h1 className="text-xl items-start"> <i className="bi bi-wallet"></i> &nbsp; Account Balance</h1>
        <p className="text-3xl">R {balance}</p></div>
        
        </section>
        </>
    )
}