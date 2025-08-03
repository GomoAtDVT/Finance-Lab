import axios from "axios";
import { useEffect } from "react";

export default function Refresh() {
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

  useEffect(() => {}, []);
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <form action={RefreshUser}>
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
      </form>
    </>
  );
}
