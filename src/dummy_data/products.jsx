import { v4 as uuidv4 } from "uuid";

const data = {
  products: [
    {
      id: uuidv4(),
      title: "Tourmanile & Eucaliptus Bar Soap",
      image: "https://loremflickr.com/320/240",
      price: 12,
      countInStock: 0,
      description:
        "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    },

    {
      id: uuidv4(),
      title: "Tourmanile & Argan Oil Bar Soap",
      image: "https://loremflickr.com/320/240",
      price: 12.5,
      countInStock: 10,
      description:
        "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    },

    {
      id: uuidv4(),
      title: "Tourmanile & Tea tree Bar Soap",
      image: "https://loremflickr.com/320/240",
      price: 12,
      countInStock: 3,
      description:
        "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    },

    {
      id: uuidv4(),
      title: "Tourmanile Unscented Bar Soap",
      image: "https://loremflickr.com/320/240",
      price: 12.5,
      countInStock: 15,
      description:
        "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    },

    {
      id: uuidv4(),
      title: "Tourmanile & Tea Tree Bar Soap ",
      image: "https://loremflickr.com/320/240",
      price: 12.5,
      countInStock: 5,
      description:
        "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    },

    {
      id: uuidv4(),
      title: "Tourmanile Unscented Bar Soap",
      image: "https://loremflickr.com/320/240",
      price: 12.5,
      countInStock: 12,
      description:
        "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    },
  ],
};

export default data;
