import { useState } from "react";
import Aside from "./components/Aside/Aside";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import Data from "./dummy_data/products";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [updateTitle, setUpdateTitle] = useState({
    title: "",
    id: "",
    price: "",
    image: "",
    countInStock: "",
    description: "",
  });
  const [range, setRange] = useState(20);
  const [dataProducts, setDataProducts] = useState(Data.products);
  const [siderbarIsOpen, setSidebarIsOpen] = useState(false);

  const [count, setCount] = useState([]);

  return (
    <div className="">
      <Aside
        siderbarIsOpen={siderbarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
        count={count}
        setCount={setCount}
      />

      <div className="flex flex-wrap  p-5">
        <div
          className="flex relative h-7 cursor-pointer"
          onClick={() => setSidebarIsOpen(!siderbarIsOpen)}
        >
          <i className="fa-solid fa-cart-shopping flex justify text-2xl cursor-pointer " />
          {count.length > 0 ? (
            <small className="flex justify-center h-4 w-4 rounded-xl bg-red-600 text-white font-bold absolute top-0 left-2 right-0 ">
              {count.length}
            </small>
          ) : (
            ""
          )}
        </div>

        <header className=" container cardfill ">
          {dataProducts.map((e) => (
            <div
              key={e.id + e.title}
              onClick={() =>
                setUpdateTitle({
                  title: e.title,
                  id: e.id,
                  price: e.price,
                  image: e.image,
                  countInStock: e.countInStock,
                  description: e.description,
                })
              }
            >
              <Card
                image={e.image}
                title={e.title}
                price={e.price}
                description={e.description}
                countInStock={e.countInStock}
                updateTitle={updateTitle}
                setUpdateTitle={setUpdateTitle}
                setShowModal={setShowModal}
                range={range}
                showModal={showModal}
                dataProducts={dataProducts}
                setDataProducts={setDataProducts}
                id={e.id}
                count={count}
                setCount={setCount}
                setSidebarIsOpen={setSidebarIsOpen}
              />
            </div>
          ))}
        </header>
      </div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        range={range}
        setRange={setRange}
        updateTitle={updateTitle}
        setUpdateTitle={setUpdateTitle}
        dataProducts={dataProducts}
        setDataProducts={setDataProducts}
      />
    </div>
  );
};

export default App;
