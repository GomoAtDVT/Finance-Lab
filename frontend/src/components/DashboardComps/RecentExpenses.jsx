export default function RecentExpenses({transactions}) {
    

    return (
        <>
            <section className="p-4 flex flex-col justify-between">
                <h1 className="text-xl">Recent Expenses</h1>
                <div className="overflow-x-auto mt-4 border rounded-lg">
                <table className="table table-zebra">
                    <thead >
                        <tr className="bg-gray-200 ">
                            <th className=" ">#</th>
                            <th className="">Amount</th>
                            <th className="">Category</th>
                            <th className="">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((expense, idx) => (
                            <tr key={idx} className="">
                                <td className="px-4 py-2 ">{idx + 1}</td>
                                <td className="px-4 py-2 border-x">{expense.amount}</td>
                                <td className="px-4 py-2 border-x">{expense.category}</td>
                                <td className="px-4 py-2 ">{expense.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </section>
        </>
    );
}