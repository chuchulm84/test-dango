import React from "react";
import { Input } from "@material-tailwind/react";

export default function Modal({
  showModal,
  setShowModal,
  range,
  setRange,
  updateTitle,
  setUpdateTitle,
  dataProducts,
  setDataProducts,
}) {
  const updateState = (value, id) => {
    setUpdateTitle({
      ...updateTitle,
      title: value,
    });

    setDataProducts((prev) => {
      const index = prev.findIndex((e) => e.id === id);

      prev[index].title = value;

      return prev;
    });
  };

  return (
    <>
      {showModal ? (
        <>
          <div className=" flex overflow-x-hidden overflow-y-auto fixed right-1 top-px z-50 outline-none focus:outline-none mt-3">
            <div className="relative w-auto my-1 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">EDIT TITLE</h3>
                  <button
                    className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                </div>

                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="w-96">
                    <Input
                      className=" p-2 "
                      size="lg"
                      placeholder="Title"
                      tipe="text"
                      value={updateTitle.title}
                      onChange={(e) =>
                        updateState(e.target.value, updateTitle.id)
                      }
                    />

                    <div className="mt-5">
                      <label>Title size</label>
                      <input
                        type="range"
                        value={range}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 "
                        onChange={(e) => setRange(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
        </>
      ) : null}
    </>
  );
}
