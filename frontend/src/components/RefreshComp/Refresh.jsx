import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Refresh() {
  const [myModal, setMyModal] = useState(false);
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const openModal = () => {
    if(myModal === true){
      modalRef.current.showModal();
      setTimeout(() => {
        navigate("/");
      },7000);
    }
  };

  const closeModal = () => {
    setEditIdx(null);
    modalRef.current.close();
    
  };
    async function RefreshUser() {
        try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
      const resp = await axios.post("http://localhost:5000/api/refresh");
      localStorage.setItem("token", resp.data.userToken);
      window.location.reload();
    } catch (error) {
      console.error("Error refreshing user:", error);
    }
  }

  useEffect(() => {

  }, []);
  return (
    <>
      {/* The button to open modal */}
      {/* <label htmlFor="my_modal_7" className="btn">
        open modal
      </label> */}

      {/* Put this part before </body> tag */}
      {/* <form action={RefreshUser}>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal visible" role="dialog">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Hello!</h3>
            <p className="py-4">This modal works with a hidden checkbox!</p>
          </div>
          <button className=" btn modal-backdrop" htmlFor="my_modal_7">
            Refresh
          </button>
        </div>
      </form> */}
      {/* <dialog ref={modalRef} className="modal" onClose={closeModal}>
            <div className="modal-box">
              <h3 className="font-bold text-lg">Edit income</h3>
              {editIdx !== null && (
                <section>
                  <form
                    action={RefreshUser}
                    className="flex flex-col w-full gap-4 p-4   shadow-md bg-white"
                  >
                    <div className="flex flex-col p-2">
                      <label htmlFor=""></label>
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
          </dialog> */}
    </>
  );
}
