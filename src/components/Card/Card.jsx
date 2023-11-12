/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "../Rating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { data } from "autoprefixer";

// eslint-disable-next-line no-unused-vars
export const Card = ({ product }) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products);

  return (
    <div className="card flex justify-center w-full">
      <div className="w-full z-10 max-w-md overflow-hidden bg-gray-100 hover:scale-105 transition-[.3s] border border-gray-200 rounded-lg shadow-md shadow-black dark:bg-gray-800 dark:border-gray-700">
        {/* {`/Product/${id}`} */}
        <Link to={`/Products/${product.id}`} className="relative">
          <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
            {product?.best_seller ? "Best Seller" : ""}
          </span>
          <img
            className="object-cover w-full h-40 overflow-hidden transform-[.3s]"
            src={product.poster}
            alt="product-imag"
          />
        </Link>
        <div className="px-5 pb-4">
          <Link>
            <h5 className="text-[16px] truncate py-[15px] font-bold tracking-tight text-blue-800 dark:text-white">
              {product.name}
            </h5>
          </Link>
          <p className="text-sm text-gray-900 dark:text-white">
            {product.overview.slice(0, 80)}...{" "}
          </p>

          <div className="flex items-center mt-[15px] mb-5">
            {/* ________________________________ */}
            <Rating rating={product.rating} />
            {/* ________________________________ */}

            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {product.rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl  text-gray-900 dark:text-white">
              ${product.price}
            </span>

            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    name: product.name,
                    poster: product.poster,
                    price: product.price,
                  })
                )
              }
              className="text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
