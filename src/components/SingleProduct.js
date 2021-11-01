import React from "react";
import { CartState } from "../context/Context";
import './styles.css'


const SingleProduct = ({ prod, qty }) => {
  const {
    cartState: { cart },
    cartDispatch,
  } = CartState();

  return (
    <div className="mx-auto px-7">
      <div className="mt-10 shadow-xl p-8 hover:shadow-2xl hover:bg-pink-100">
        <div className="w-60">
          <img src={prod.image} alt=""></img>
        </div>
        <div className="p-2">
          <p className="font-bold text-center">{prod.name}</p>
          <p> Price: {prod.price}</p>
          <p> In Stock: {prod.inStock}</p>
          <p> Fast Delivery: {prod.fastDelivery ? "YES" : "NO"}</p>
        </div>

        {cart.some((c) => c.id === prod.id) ? (
          <button
            className="bg-red-300 p-1 px-2 rounded-md hover:bg-red-500 font-semibold"
            onClick={() =>
              cartDispatch({ type: "REMOVE_FROM_CART", payload: prod })
            }
          >
            {" "}
            <svg
              class="w-6 h-6 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              ></path>
            </svg>{" "}
            Remove from cart
          </button>
        ) : (
          <button
            className="bg-green-300 p-1 px-2 rounded-md hover:bg-green-500 font-semibold"
            onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: prod })}
          >
            {" "}
            <svg
              class="w-6 h-6 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>{" "}
            Add to cart
          </button>
        )}
        {
        qty && (<> 
        <label className="ml-5 p-2 font-mono">Quantity</label>  
        <input
        placeholder={prod.qty}
         type="number" 
         min="1" 
         max= {prod.inStock} 
         onChange={(e) => cartDispatch({type: "CHANGE_CART_QTY", payload: {qty:e.target.value, id:prod.id}})}/>

        </>)
      }
      </div>
    </div>
  );
};

export default SingleProduct;
