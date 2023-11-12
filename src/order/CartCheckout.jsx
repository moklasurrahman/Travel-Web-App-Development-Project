/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTitle } from '../Hook';
import { getUser } from "../service/authService";

const CartCheckout = ({ setCartCheck }) => {
  
  const [user, setUser] = useState({});
  
  useTitle("Payment")
  
    // geting API login user informetion 
    useEffect(() => {
    async function fetchData() {
      try{
        const data = await getUser() // grtUser coming to 'services/dataService'
          setUser(data);
      }catch(error){
        toast.error(error.message, {closeButton: true, position: "top-center" });

      }
     
    }
    fetchData();
  }, []);

 

  return (
    <section>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      <div className="card w-full h-full">
        <div className="item rounded-sm bg-white dark:bg-slate-800 py-5 px-8 w-[310px] md:w-[350px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="Heading flex items-center justify-between uppercase dark:text-white text-xl">
            <span>
              <i className="bi bi-wallet" style={{ fontSize: "25px" }} /> Card payment
            </span>
            <span
              onClick={() => setCartCheck(false)}
              className="text-[130px] w-[25px]  h-[25px] bg-slate-500 flex justify-center rounded-[50px] items-center hover:bg-slate-600 cursor-pointer text-white"
            >
              < i className="bi bi-x" style={{ fontSize: "25px" }} />
            </span>
          </div>

          <div className="">
            <form className="flex flex-col gap-[15px]">
              <div className="mt-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize"
                >
                  name:
                </label>
                <input
                  type="text"
                  value={user.name || 'Undefined'}
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-100 focus:ring-4 focus:outline-none"
                  placeholder="Your Full Name"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize"
                >
                  email:
                </label>
                <input
                  type="email"
                  value={user.email || '...@gmail.com'}
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-100 focus:ring-4 focus:outline-none"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize"
                >
                  Card number:
                </label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  value='3444589669'
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-100 focus:ring-4 focus:outline-none"
                  placeholder="Your Card number"
                  required=""
                />
              </div>

              <div>
                <label
                 htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize"
                >
                  expiry date:
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    name="number"
                    value='03'
                    id="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-100 focus:ring-4 focus:outline-none"
                    placeholder="days"
                    required=""
                  />
                  <input
                    type="number"
                    name="number"
                    value='05'
                    id="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-100 focus:ring-4 focus:outline-none"
                    placeholder="month"
                    required=""
                  />
                </div>
              </div>

              <div>
                <label
                 htmlFor="code"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize"
                >
                  Security Code:
                </label>
                <input
                  type="number"
                  name="code"
                  id="code"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-100 focus:ring-4 focus:outline-none"
                  placeholder="Enter security code"
                  required=""
                />
              </div>

              <div className="price text-center text-2xl font-bold text-green-700">
                <span>$120</span>
              </div>

              <button className="w-full flex items-center justify-center gap-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase">
                <i className="bi bi-lock-fill" style={{ fontSize: "15px" }} />
                Pay now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartCheckout;
