import axios from "axios";
import { useEffect, useState, useRef } from "react";

export default function Expenses() {
     const [editIdx, setEditIdx] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [editForm, setEditForm] = useState({
    name: "",
    amount: "",
    category: "",
  });
  const modalRef = useRef(null);

  const openModal = (idx) => {
    setEditIdx(idx);
    setEditForm({
      id: expenses[idx].id,
      name: expenses[idx].name,
      amount: expenses[idx].amount,
      category: expenses[idx].category,
    });
    modalRef.current.showModal();
  };

  const closeModal = () => {
    setEditIdx(null);
    modalRef.current.close();
  };
  async function SubmitExpense(event) {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;

       await axios.post(
        "http://localhost:5000/api/transactions/expenses",
        {
          name: event.get("name"),
          amount: event.get("amount"),
          type: "expense",
          category: event.get("category"),
        }
      );
      await GetExpense();
    } catch (error) {
      console.error("Error submitting income:", error);
    }
  }

    
    async function DeleteExpense(idx){
        try{
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            await axios.delete(`http://localhost:5000/api/transactions/${expenses[idx].id}`);
            await GetExpense();
        }catch (error){
            console.error("Error deleting income:", error);
        }
    }

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

  async function EditExpense() {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
       await axios.patch(
        `http://localhost:5000/api/transactions/${expenses[editIdx].id}`,
        {
          name: editForm.name,
          amount: editForm.amount,
          type: "expense",
          category: editForm.category,
        }
      );
      await GetExpense();
      closeModal();
    } catch (error) {
      console.error("Error editing income:", error);
    }
  }

    return (
        <>
        
        <section className="flex flex-row justify-around items-center h-screen bg-gray-200">
            <section>
                <h1 className="text-2xl font-bold p-4">Add Expenses</h1>
            <form action={SubmitExpense} className="flex flex-col w-100 gap-4 p-4 border-2 rounded-lg shadow-md bg-white">
                <div className="flex flex-col p-2">
                    <label htmlFor="">Expense Name</label>
                    <input type="text" placeholder="Expense Name" name="name" className="input input-bordered w-full  " />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="">Amount</label>
                    <input type="number" placeholder="Amount" name="amount" className="input input-bordered w-full  " />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="">Category</label>
                    <select name="category" id="" className="select select-bordered w-full " >
                        <option value="pick a category" disabled>select a category</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Travel">Travel</option>
                        <option value="Essentials">Essentials</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <button className="btn">Submit</button>
            </form>
           </section>
            <section className="w-180" >
                <h1 className="text-2xl font-bold p-4">View/edit Expenses</h1>
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
                        {expenses.map((expense, idx) => (
                            <tr key={idx} >
                                <th>{idx + 1}</th>
                                <td>{expense.amount}</td>
                                <td>{expense.category}</td>
                                <td>{expense.name}</td>
                                <td>{expense.updated_at.slice(0, 10)}</td>
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
                                            <li><a onClick={() => DeleteExpense(idx)}>delete</a></li>
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
                        <h3 className="font-bold text-lg">Edit Expense</h3>
                        {editIdx !== null && (
                            <section>
                            <form action={EditExpense} className="flex flex-col w-full gap-4 p-4   shadow-md bg-white">
                <div className="flex flex-col p-2">
                    <label htmlFor="">Expense Name</label>
                    <input type="text" placeholder="Expense Name"  value={editForm.name}
                        onChange={(e) =>
                          setEditForm({ ...editForm, name: e.target.value })
                        } className="input input-bordered w-full  " />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="">Amount</label>
                    <input type="number" placeholder="Amount" value={editForm.amount}
                        onChange={(e) =>
                          setEditForm({ ...editForm, amount: e.target.value })
                        } className="input input-bordered w-full  " />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="">Category</label>
                    <select name="" id="" className="select select-bordered w-full"value={editForm.category}
                        onChange={(e) =>
                          setEditForm({ ...editForm, category: e.target.value })
                        } >
                        <option value="pick a category" disabled>select a category</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Travel">Travel</option>
                        <option value="Essentials">Essentials</option>
                        <option value="Shopping">Shopping</option>
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
    )
}