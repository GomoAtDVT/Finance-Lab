
export default function Expenses() {
    return (
        <>
        <section className="flex flex-col justify-center items-center h-screen bg-gray-200">
            <h1 className="text-2xl font-bold p-4">Add Expenses</h1>
            <form action="" className="flex flex-col w-100 gap-4 p-4 border-2 rounded-lg shadow-md bg-white">
                <div className="flex flex-col p-2">
                    <label htmlFor="">Expense Name</label>
                    <input type="text" placeholder="Expense Name" className="input input-bordered w-full  " />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="">Amount</label>
                    <input type="number" placeholder="Amount" className="input input-bordered w-full  " />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="">Category</label>
                    <select name="" id="" className="select select-bordered w-full " >
                        <option value="pick a category" disabled>select a category</option>
                        <option value="Groceries">Groceries</option>
                    </select>
                </div>
                <button className="btn">Submit</button>
            </form>
           
        </section>
        </>
    )
}