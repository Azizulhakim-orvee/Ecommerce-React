import React from "react";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

const Header = () => {
    const {cartState:{cart}} = CartState()

  return (
    <div className="container h-8 mx-auto p-5">
      <div className="md:flex md:flex-row md:justify-between">
 <div className="flex justify-center">
 <div className="flex flex-row">
          <div className="bg-gradient-to-r from-blue-400 to-red-400 w-10 h-10 rounded-lg"></div>
          <h1 className="text-3xl text-gray-600 ml-2">Logo</h1>
        </div>
 </div>
        <div className="mt-5 text-center">
          <Link to="/" className="text-gray-800 hover:text-yellow-800 p-4"> Home </Link>
          <Link to="/" className="text-gray-800 hover:text-yellow-800 p-4"> Blog </Link>
          <Link to="/" className="text-gray-800 hover:text-yellow-800 p-4"> Contact </Link>
          <Link to="/cart" className="text-white hover:bg-pink-600 px-5 py-2 bg-pink-500 rounded-lg"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg> Cart <span className="font-bold">
  {cart.length}
</span> </Link>
    
        </div>
      </div>
    </div>
  );
};

export default Header;

