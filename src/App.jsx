import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import Data from "./dummy_data/products";

function App() {
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

  return (
    <div className="bg-gray-100 ">
      <header className="container p-4 cardfill ">
        {dataProducts.map((e) => (
          <div
            key={e.id}
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
            />
          </div>
        ))}
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
      </header>
    </div>
  );
}

export default App;
