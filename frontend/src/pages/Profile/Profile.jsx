import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Profile() {
  const [editIdx, setEditIdx] = useState(null);
    const [myUser, setMyUser] = useState([]);
    const [editMyUser, setEditMyUser] = useState({
    user: "",
    password: "",
    date_of_birth: "",
    country: "",
    city: "",
  });
    const navigate = useNavigate();
    const modalRef = useRef(null);
    function toExpense(){
        navigate("/expenses");
    }
    function toIncome(){
        navigate("/income");
    }
    function toDashboard(){
        navigate("/dashboard");
    }
    const openModal = (idx) => {
    setEditIdx(idx);
    setEditMyUser({
      username: myUser[idx].username,
      password: myUser[idx].password,
      email: myUser[idx].email,
      date_of_birth: myUser[idx].date_of_birth,
      country: myUser[idx].country,
      city: myUser[idx].city,
    });
    modalRef.current.showModal();
  };

  const closeModal = () => {
    setEditIdx(null);
    modalRef.current.close();
  };
    
    async function getUser() {
        try{
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            let response = await axios.get('http://localhost:5000/api/user', {
                email: localStorage.getItem('email')
            });
            setMyUser(response.data.user);

        }catch (error){
            console.error("Error fetching user:", error);
        }
    }
    useEffect(() => {
        getUser();
    }, []);

    

    async function editUser() {
        try{
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
             axios.patch('http://localhost:5000/api/user', {
                username: editMyUser.username,
                password: editMyUser.password,
                email: `${localStorage.getItem('email')}`,
                date_of_birth: editMyUser.date_of_birth,
                country: editMyUser.country,
                city: editMyUser.city,
            }) 
            await getUser();
            closeModal();
        } catch(error){
            console.error("Error editing user:", error);
        }
    }
    return (
        <>{myUser !== undefined ? myUser.map((use , idx) => (
        <section key={idx} className="flex flex-row gap-8 bg-gray-100">

        
        <aside className="flex flex-col w-100 p-4 gap-10 pt-16 bg-white h-screen shadow-md">
            <p onClick={toExpense} className="btn font-semibold italic border-b-1  ">Expense Transactions</p>
            <p onClick={toIncome} className="btn font-semibold italic border-b-1 p-4">Income Transactions</p>
            <p onClick={toDashboard} className="btn font-semibold italic border-b-1 p-4">Dashboard</p>
            <a onClick={() => openModal(idx)} className="btn font-semibold italic border-b-1 p-4">Update Info</a>
        </aside>
        
            <section  className="flex flex-col p-6 gap-6 ">
           <h1  className="font-bold text-2xl pb-4">Profile</h1>
            <section className="flex flex-row gap-8 p-4 items-center bg-white shadow-md rounded-md">
                <div className="rounded-full border-2 w-20 h-20 items-center flex justify-center text-4xl bg-black text-white">
                    {use.username.slice(0,1)}
                    </div>
                <div>
                    <h1 className="font-bold text-2xl">{use.username}</h1>
                    <p>{use.country+", "+ use.city}</p>
                </div>
            </section>
            <section className="flex flex-col bg-white shadow-md rounded-md">
                <div className="w-280 border-b-1 m-4">
                    <h1 className="font-bold text-2xl pb-4">Personal Information</h1>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4">
                    <div>
                        <h3 className="font-semibold">First Name</h3>
                        <p>{use.username.split(" ")[0]}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Last Name</h3>
                        <p>{use.username.split(" ")[1]}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Date of Birth</h3>
                        <p>{use.date_of_birth.slice(0, 10)}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Email Address</h3>
                        <p>{use.email}</p>
                    </div>
                    
                </div>
            </section>
            <section className="flex flex-col bg-white shadow-md rounded-md">
                <div className="w-280 border-b-1 m-4">
                    <h1 className="font-bold text-2xl pb-4">Address</h1>
                    </div>
                <div className="grid grid-cols-3 grid-rows-1 gap-4 p-4">
                    <div>
                        <h3 className="font-semibold">Country</h3>
                        <p>{use.country}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">City</h3>
                        <p>{use.city}</p>
                    </div>
                </div>
            </section>
        <dialog ref={modalRef} className="modal" onClose={closeModal}>
            <div className="modal-box">
              <h3 className="font-bold text-lg">Edit Account</h3>
              {editIdx !== null && (
                <section>
                  <form
                    action={editUser}
                    className="flex flex-col w-full gap-4 p-4   shadow-md bg-white"
                  >
                    <div className="flex flex-col p-2">
                      <label htmlFor="">Full Name</label>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="input input-bordered w-full"
                        value={editMyUser.username}
                        onChange={(e) =>
                          setEditMyUser({ ...editMyUser, username: e.target.value })
                        }
                      />{" "}
                    </div>
                    <div className="flex flex-col p-2">
                      <label htmlFor="">Date of birth</label>
                      <input
                        type="text"
                        placeholder="date of birth"
                        className="input input-bordered w-full"
                        value={editMyUser.date_of_birth.slice(0,10)}
                        onChange={(e) =>
                          setEditMyUser({ ...editMyUser, date_of_birth: e.target.value })
                        }
                      />{" "}
                    </div>
                    <div className="flex flex-col p-2">
                      <label htmlFor="">Country</label>
                      <input
                        type="text"
                        placeholder="country"
                        className="input input-bordered w-full"
                        value={editMyUser.country}
                        onChange={(e) =>
                          setEditMyUser({ ...editMyUser, country: e.target.value })
                        }
                      />{" "}
                    </div>
                    <div className="flex flex-col p-2">
                      <label htmlFor="">City</label>
                      <input
                        type="text"
                        placeholder="city"
                        className="input input-bordered w-full"
                        value={editMyUser.city}
                        onChange={(e) =>
                          setEditMyUser({ ...editMyUser, city: e.target.value })
                        }
                      />{" "}
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
        </section>)): " "}
        </>
    )
}