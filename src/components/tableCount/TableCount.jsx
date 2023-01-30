import React from "react";

const TableCount = ({ count, setCount }) => {
  const formatNumber = (number) => {
    let n = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(number);

    return n;
  };

  console.log("count", count);

  const total = () => {
    const total = count.reduce(
      (acc, curr) => acc + Number(curr.count || 0) * Number(curr.price || 0),
      0
    );

    return Number(total);
  };

  const deleteItem = (id) => {
    setCount((prev) => {
      const dl = count.filter((fil) => fil.id !== id);

      return dl;
    });
  };

  return (
    <table className="border-spacing      ">
      <thead className="">
        <tr className="">
          <th className="border border-slate-300 p-2">ITEM</th>
          <th className="border border-slate-300 p-3">TOTAL</th>
          <th className="border border-slate-300 p-3">DELETE</th>
        </tr>
      </thead>
      {count.map((e) => {
        return (
          <tbody className="border border-slate-300" key={e.id + e.item}>
            <tr>
              <td className="border border-slate-300 p-1">{e.item}</td>

              <td className="flex justify-center mt-1">{e.count}</td>

              <td className=" border border-slate-300 pl-6">
                <button
                  className=" bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none  mb-1 ml-1 mt-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => deleteItem(e.id)}
                >
                  x
                </button>
              </td>
            </tr>
          </tbody>
        );
      })}
      <div className="flex justify-between w-full relative border border-slate-300">
        <h3 className="p-3 font-bold ">TOTAL ITEMS</h3>
        <p className="  p-3 self-end absolute bottom-0 right-0 font-semibold">
          {count.length > 0 && formatNumber(total())}
        </p>
      </div>
    </table>
  );
};

export default TableCount;
