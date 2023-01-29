import { useState } from "react";
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

  const [count, setCount] = useState([]);

  return (
    <div className="bg-gray-100  cardfill2 ">
      <header className="container  cardfill ">
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
            />
          </div>
        ))}
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

      {showModal
        ? ""
        : count.length > 0 && <TableCount count={count} setCount={setCount} />}
    </div>
  );
};

export default App;
