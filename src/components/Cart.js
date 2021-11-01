import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";

const Cart = () => {
  const {
    cartState: { cart },
  } = CartState();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (<div>
      <div className="text-center md:mt-8 mt-20 text-2xl">
          Total Price: <span className="font-bold">{total}</span>
      </div>
      <div className="flex flex-wrap box-content rounded">
      {cart.map((prod) => <SingleProduct prod={prod} key={prod.id} qty={true} />)}
      </div>


  </div>);
};

export default Cart;
