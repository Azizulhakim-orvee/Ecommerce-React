import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import './styles.css'

const Home = () => {
  const {
    cartState: { products },
  } = CartState();
  return (
    <div className="flex flex-wrap box-content rounded absolute mt-12">
      {products.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default Home;
