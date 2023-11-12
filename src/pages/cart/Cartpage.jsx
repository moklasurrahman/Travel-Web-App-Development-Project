import React, { useState } from "react";
import Cart from "../../components/cart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCheckout from "../../order/CartCheckout";

const Cartpage = () => {
  const products = useSelector((state) => state.cart.products);
  const [cartCheck, setCartCheck] = useState(false);


  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.count * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <section className="p-20 md:px-[100px]">
      <section>
        <p className="flex justify-between items-center mt-10 uppercase font-medium text-3xl text-black dark:text-white sm:text-start text-center sm:flex-row flex-col gap-10 sm:gap-0">
          <span>
            {" "}
            Total Amount: <span className="text-cyan-800">${totalPrice()}</span>
          </span>
          <span>
            Total Item: <span className="text-cyan-800">{products?.length}</span>
          </span>
        </p>
      </section>
      {products?.map((product) => (
        <article key={product?.id}>
          <Cart product={product} />
        </article>
      ))}

      <div className="w-full">
        <Link onClick={() => setCartCheck(!cartCheck)} className="text-sm capitalize px-3 flex items-end w-fit justify-end m-auto py-2 border-2 text-blue-800 border-blue-800 hover:bg-blue-300 transition-[.3s] rounded-sm font-bold">
        proceed payment
        </Link>
      </div>


      {cartCheck && <CartCheckout setCartCheck={setCartCheck} />}

    </section>
  );
};

export default Cartpage;
