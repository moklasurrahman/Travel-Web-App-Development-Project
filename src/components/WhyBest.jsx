import React from "react";
import { Link } from "react-router-dom";

const WhyBest = () => {
  return (
    <section className="p-[20px] md:px-[100px] md:pt-[40px] bg-blue-50">
      <div className="flex gap-5 flex-col md:flex-row md:items-center">
        <div className=" md:flex-[40%]">
          <p className="text-[20px] font-bold font-mono">Why we Are Best</p>
          <h2 className="text-[40px] pb-10 font-bold leading-[50px]">
            Keep Things Flexible
          </h2>
          <Link
            to=""
            className=" px-5 py-2 border-[2px] border-red-800 rounded-sm text-blue-800 hover:bg-red-800 transition-[.3s] "
          >
            Contact Us
          </Link>

          <div className=" text-red-800 grid gap-8 grid-cols-2 mt-10">
            <div className="">
              <p className="text-[30px] w-5 h-5 p-4 bg-blue-800 flex items-center rounded-full font-bold">
                120+
              </p>
              <p className="text-sm mt-2">Total Destination</p>
            </div>
            <div className="">
              <p className="text-[30px] w-5 h-5 p-4 bg-blue-800 flex items-center rounded-full font-bold">
                12K+
              </p>
              <p className="text-sm mt-2">Total Travelers</p>
            </div>

            <div className="">
              <p className="text-[30px] w-5 h-5 p-4 bg-blue-800 flex items-center rounded-full font-bold">
                500+
              </p>
              <p className="text-sm mt-2">Total Packages</p>
            </div>

            <div className="">
              <p className="text-[30px] w-5 h-5 p-4 bg-blue-800 flex items-center rounded-full font-bold">
                7K+
              </p>
              <p className="text-sm mt-2">Total Destination</p>
            </div>
          </div>
        </div>
        <div className=" md:flex-[60%]">
          <p className="flex gap-5">
            <div className="flex-1">
              <img
                className="w-full object-cover rounded-md"
                src="https://images.pexels.com/photos/2147486/pexels-photo-2147486.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className="flex-1 mt-[50px]">
              <img
                className="w-full object-cover rounded-md"
                src="https://images.pexels.com/photos/3889753/pexels-photo-3889753.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className="flex-1">
              <img
                className="w-full object-cover rounded-md"
                src="https://images.pexels.com/photos/12314825/pexels-photo-12314825.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyBest;
