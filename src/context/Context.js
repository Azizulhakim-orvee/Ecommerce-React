import React, { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer } from "./Reducer";
import image from './image.png'

faker.seed(49);

const Cart = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    image: image,
    price: faker.commerce.price(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
  }));

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return (
    <Cart.Provider value={{ cartState, cartDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
