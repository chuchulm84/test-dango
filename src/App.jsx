import { useState } from "react";
import Aside from "./components/Aside/Aside";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import TableCount from "./components/tableCount/TableCount";
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
  const [range, setRange] = useState(18);
  const [dataProducts, setDataProducts] = useState(Data.products);
  const [siderbarIsOpen, setSidebarIsOpen] = useState(false);

  const [count, setCount] = useState([]);

  console.log("siderbarIsOpen", siderbarIsOpen);

  return (
    <div className="bg-gray-100 cardfill2">
      <Aside
        siderbarIsOpen={siderbarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
        count={count}
        setCount={setCount}
      />

      <header className="container cardfill p-5">
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
        {/* <div className="col-span-2 ">
          {showModal
            ? ""
            : count.length > 0 && (
                <TableCount count={count} setCount={setCount} />
              )}
        </div> */}
      </header>
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
