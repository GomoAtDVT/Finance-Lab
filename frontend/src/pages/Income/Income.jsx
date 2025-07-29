import { useState, useRef } from "react";
export default function Income({transactions}) {
    const [editIdx, setEditIdx] = useState(null);
        const modalRef = useRef(null);
    
        
        const openModal = (idx) => {
            setEditIdx(idx);
            modalRef.current.showModal();
        };
    
        const closeModal = () => {
            setEditIdx(null);
            modalRef.current.close();
        };
    return (
        <>
        <section className="flex flex-row justify-around items-center h-screen bg-gray-200">
            <section>
                <h1 className="text-2xl font-bold p-4">Add incomes</h1>
            <form action="" className="flex flex-col w-100 gap-4 p-4 border-2 rounded-lg shadow-md bg-white">
                <div className="flex flex-col p-2">
                    <label htmlFor="">Income Name</label>
                    <input type="text" placeholder="income Name" className="input input-bordered w-full  " />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="">Amount</label>
                    <input type="number" placeholder="Amount" className="input input-bordered w-full  " />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="">Category</label>
                    <select name="" id="" className="select select-bordered w-full " >
                        <option value="pick a category" disabled>select a category</option>
                        <option value="Salary">Salary</option>
                        <option value="FreeLance">FreeLance</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <button className="btn">Submit</button>
            </form>
           </section>
            <section className="w-180" >
                <h1 className="text-2xl font-bold p-4">View/edit incomes</h1>
                <div className="overflow-x-auto mt-4 border rounded-lg">
                <table className="table table-zebra">
                    <thead >
                        <tr className="bg-gray-200 " >
                            <th className=" ">#</th>
                            <th className="">Amount</th>
                            <th className="">Category</th>
                            <th className="">Name</th>
                            <th className="">Date</th>
                            <th className=""></th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.incomes.map((income, idx) => (
                            <tr key={idx} >
                                <th>{idx + 1}</th>
                                <td>{income.amount}</td>
                                <td>{income.category}</td>
                                <td>{income.name}</td>
                                <td>{income.date}</td>
                                <td>
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className=" m-1">
                                            <i className="bi bi-three-dots"></i>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content menu bg-base-100 rounded-box z-4 w-52 p-2 shadow-sm">
                                            <li>
                                                <button className="" onClick={() => openModal(idx)}>edit</button>
                                            </li>
                                            <li><a>delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <dialog ref={modalRef} className="modal" onClose={closeModal}>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Edit income</h3>
                        {editIdx !== null && (
                            <section>
                            <form action="" className="flex flex-col w-full gap-4 p-4   shadow-md bg-white">
                <div className="flex flex-col p-2">
                    <label htmlFor="">income Name</label>
                    <input type="text" placeholder="income Name" value={transactions.incomes[editIdx].name} className="input input-bordered w-full  " />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="">Amount</label>
                    <input type="number" placeholder="Amount" value={transactions.incomes[editIdx].amount} className="input input-bordered w-full  " />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="">Category</label>
                    <select name="" id="" className="select select-bordered w-full" defaultValue={transactions.incomes[editIdx].category} >
                        <option value="pick a category" disabled>select a category</option>
                        <option value="Salary">Salary</option>
                        <option value="FreeLance">FreeLance</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <button className="btn">Submit</button>
            </form>
                            </section>
                        )}
                    </div>
                    <form method="dialog" className="modal-backdrop" onClick={closeModal}>
                        <button>close</button>
                    </form>
                </dialog>
           </section>

        </section>
        </>
    );
}