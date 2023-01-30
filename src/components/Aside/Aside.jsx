import React from "react";
import TableCount from "../tableCount/TableCount";

const Aside = ({ siderbarIsOpen, setSidebarIsOpen, count, setCount }) => {
  return (
    <aside className={siderbarIsOpen ? "open" : ""}>
      <div className="flex flex-row-reverse p-3 cursor-pointer ">
        <button
          className="   text-black active:bg-emerald-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setSidebarIsOpen(false)}
        >
          x
        </button>
      </div>

      <ul>
        <li>
          <div className="categories">
            <TableCount count={count} setCount={setCount} />
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
