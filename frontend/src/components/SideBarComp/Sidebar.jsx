export default function Sidebar() {
  return (
    <>
      <div className="drawer w-max">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className=" cursor-pointer text-2xl drawer-button">
            <i className="bi bi-list"></i>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <p className="flex items-center justify-center my-4 ">
                <p className="text-xl font-bold">Finance Lab</p>
            </p>
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Expenses</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
