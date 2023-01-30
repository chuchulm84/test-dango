import React, { useState } from "react";

const Card = ({
  id,
  image,
  title,
  price,
  description,
  countInStock,
  setShowModal,
  range,
  count,
  setCount,
  siderbarIsOpen,
  setSidebarIsOpen,
}) => {
  const [newName, setNewName] = useState(title);
  const [count1, setCount1] = useState(0);

  const getInfo = () => {
    setNewName(title);
    setShowModal(true);
  };

  const update = (e, value) => {
    console.log("value", value);
    console.log("e.target.value", e.target.value);

    const filterItem = count.find((fil) => fil.id === id);
    if (filterItem) {
      setCount((prev) => {
        const index = prev.findIndex((e) => e.id === id);

        prev[index].count = e.target.value === "" ? value : e.target.value;

        return prev;
      });
    } else {
      setCount([
        ...count,
        {
          id: id,
          item: title,
          count: e.target.value === "" ? value : e.target.value,
          price: price,
        },
      ]);
    }
    setCount1(e.target.value);
    setSidebarIsOpen(true);
  };

  return (
    <div className="border-2  p-5 h-full bg-white shadow-xl  ">
      <div className="flex justify-center  ">
        <img src={image} alt="" className="rounded-md" />
      </div>
      <div
        className="flex justify-center mt-10 cursor-pointer hover:text-slate-600"
        onClick={() => getInfo()}
      >
        <h2 style={{ fontSize: `${range}px` }} className="font-black">
          {newName}
        </h2>
      </div>
      <div className="mt-10">
        <span className="mr-3 font-black  text-xl">${price}</span>

        {countInStock === 0 ? (
          <span className="mr-3 text-red-600 font-semibold text-xs">
            Not available
          </span>
        ) : (
          <select
            placeholder={countInStock === 0 ? " Not available" : ""}
            value={count1}
            onChange={(e) => update(e, 1)}
            className="w-10 h-10 border bg-white"
          >
            {[...Array(countInStock).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className={countInStock === 0 ? "mt-12" : "mt-10"}>
        <p>{description}</p>
      </div>
      <div className="flex justify-center">
        <button
          className="border p-3 mt-10  bg-orange-200 shadow-lg shadow-gray-300 w-44 rounded-md"
          onClick={(e) => update(e, 1)}
        >
          Add to cart
        </button>
      </div>

      <div className="flex justify-center m-10">
        <p className="underline cursor-pointer">Learn More</p>
      </div>
    </div>
  );
};

export default Card;
