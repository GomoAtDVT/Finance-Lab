import axios from "axios";
import { useState, useRef, useEffect } from "react";
import Navigation from "../../components/navigation/Navigation";
export default function Income() {
  const [editIdx, setEditIdx] = useState(null);
  const [incomes, setIncomes] = useState([]);
  const [editForm, setEditForm] = useState({
    name: "",
    amount: "",
    category: "",
  });
  const modalRef = useRef(null);

  // onChange({...transactions, name: event.target.value});
  const openModal = (idx) => {
    setEditIdx(idx);
    setEditForm({
      id: incomes[idx].id,
      name: incomes[idx].name,
      amount: incomes[idx].amount,
      category: incomes[idx].category,
    });
    modalRef.current.showModal();
  };

  const closeModal = () => {
    setEditIdx(null);
    modalRef.current.close();
  };
  async function SubmitIncome(event) {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;

      const response = await axios.post(
        "http://localhost:5000/api/transactions/incomes",
        {
          name: event.get("name"),
          amount: event.get("amount"),
          type: "income",
          category: event.get("category"),
        }
      );
      await GetIncome();
    } catch (error) {
      console.error("Error submitting income:", error);
    }
  }

    
    async function DeleteIncome(idx){
        try{
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            await axios.delete(`http://localhost:5000/api/transactions/${incomes[idx].id}`);
            await GetIncome();
        }catch (error){
            console.error("Error deleting income:", error);
        }
    }

  async function GetIncome() {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    let IncomeResponse = await axios.get(
      "http://localhost:5000/api/transactions/incomes"
    );
    setIncomes(IncomeResponse.data.myIncome);
  }

  useEffect(() => {
    GetIncome();
  }, []);

  async function EditIncome() {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
       await axios.patch(
        `http://localhost:5000/api/transactions/${incomes[editIdx].id}`,
        {
          name: editForm.name,
          amount: editForm.amount,
          type: "income",
          category: editForm.category,
        }
      );
      await GetIncome();
      closeModal();
    } catch (error) {
      console.error("Error editing income:", error);
    }
  }

  return (
    <>
    <Navigation />
      <section className="flex flex-row gap-6 justify-center items-center p-20.5 bg-gray-200">
        <section className="flex flex-col  gap-4 p-4 mt-4  rounded-lg shadow-md bg-white">
          <h1 className="text-2xl font-bold p-4">Add incomes</h1>
          <form
            action={SubmitIncome}
            className="flex flex-col w-100 gap-4 p-4 rounded-lg shadow-md bg-white"
          >
            <div className="flex flex-col p-2">
              <label htmlFor="">Income Name</label>
              <input
                type="text"
                placeholder="income Name"
                name="name"
                className="input input-bordered w-full  "
              />
            </div>
            <div className="flex flex-col p-2">
              <label htmlFor="">Amount</label>
              <input
                type="number"
                placeholder="Amount"
                name="amount"
                className="input input-bordered w-full  "
              />
            </div>
            <div className="flex flex-col p-2">
              <label htmlFor="">Category</label>
              <select
                name="category"
                id=""
                className="select select-bordered w-full "
              >
                <option value="pick a category" disabled>
                  select a category
                </option>
                <option value="Salary">Salary</option>
                <option value="FreeLance">FreeLance</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button className="btn">Submit</button>
          </form>
        </section>
        <section className="w-200 p-4 bg-white rounded-lg shadow-md mt-4">
          <h1 className="text-2xl font-bold p-4">View/edit incomes</h1>
          <div className="overflow-x-auto mt-4 border rounded-lg overflow-y-scroll min-h-90 h-max">
            <table className="table table-zebra">
              <thead>
                <tr className="bg-gray-200 ">
                  <th className=" ">#</th>
                  <th className="">Amount</th>
                  <th className="">Category</th>
                  <th className="">Name</th>
                  <th className="">Date</th>
                  <th className=""></th>
                </tr>
              </thead>
              <tbody>
                {incomes.map((income, idx) => (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td>{income.amount}</td>
                    <td>{income.category}</td>
                    <td>{income.name}</td>
                    <td>{income.updated_at.slice(0, 10)}</td>
                    <td>
                      <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className=" m-1">
                          <i className="bi bi-three-dots"></i>
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu bg-base-100 rounded-box z-4 w-52 p-2 shadow-sm"
                        >
                          <li>
                            <button className="" onClick={() => openModal(idx)}>
                              edit
                            </button>
                          </li>
                          <li>
                            <a onClick={() => DeleteIncome(idx)}>delete</a>
                          </li>
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
                  <form
                    action={EditIncome}
                    className="flex flex-col w-full gap-4 p-4   shadow-md bg-white"
                  >
                    <div className="flex flex-col p-2">
                      <label htmlFor="">income Name</label>
                      <input
                        type="text"
                        placeholder="income Name"
                        className="input input-bordered w-full"
                        value={editForm.name}
                        onChange={(e) =>
                          setEditForm({ ...editForm, name: e.target.value })
                        }
                      />{" "}
                    </div>
                    <div className="flex flex-col p-2">
                      <label htmlFor="">Amount</label>
                      <input
                        type="number"
                        placeholder="Amount"
                        className="input input-bordered w-full"
                        value={editForm.amount}
                        onChange={(e) =>
                          setEditForm({ ...editForm, amount: e.target.value })
                        }
                      />{" "}
                    </div>
                    <div className="flex flex-col p-2">
                      <label htmlFor="">Category</label>
                      <select
                        className="select select-bordered w-full"
                        value={editForm.category}
                        onChange={(e) =>
                          setEditForm({ ...editForm, category: e.target.value })
                        }
                      >
                        <option value="pick a category" disabled>
                          select a category
                        </option>
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
            <form
              method="dialog"
              className="modal-backdrop"
              onClick={closeModal}
            >
              <button>close</button>
            </form>
          </dialog>
        </section>
      </section>
    </>
  );
}
