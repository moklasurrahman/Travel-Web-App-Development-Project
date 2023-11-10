import React from "react";
import img1 from "../assets/heroimg.jpg";
import img2 from "../assets/heroimg1.jpg";
const Hero = () => {
  return (
    <section className=" bg-blue-50">
      <div className=" p-[20px] md:px-[100px] md:pt-[40px]">
        <div className="overlay "></div>
        {/* <video src='' loop muted autoPlay type="video/mp4"></video> */}

        <div className=" relative">
          <div className="w-full flex gap-5 flex-col md:flex-row">
            <div className="textDiv flex-1 md:mt-[50px]">
              <span className="text-[30px] font-bold text-red-800 font-mono">Explore The</span>
              <h1 className=" text-[45px] font-bold leading-[50px] py-5 md:py-2 text-blue-800">Travel & Adventures</h1>
              <p className="text-md text-blue-800 font-medium">Find awesome hotel, tour, and activities in London</p>
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row gap-5">
                <p>
                  <img className="object-cover w-full md:min-w-[200px] md:min-h-[300px] rounded-md hover:mt-[5px] transition" src={img1} alt="" />
                </p>
                <p>
                  <img className="object-cover w-full md:min-w-[300px] md:min-h-[90vh] max-h-[800px] rounded-md" src={img2} alt="" />
                </p>
              </div>
            </div>
          </div>

          {/* for Search destination */}
          <div className=" md:absolute bottom-0  w-full shadow-md shadow-gray-800 bg-gray-100/70 rounded-md text-blue-600 px-5 py-4 flex gap-5 flex-col md:flex-row md:items-center">
           
            <div className="flex-1">
              <label htmlFor="city" className="text-[14px] font-bold mb-1">Destination: </label>
              <div 
              className="flex items-center py-2 px-2 bg-transparent border border-red-800 rounded-md
              ">
                <input 
                className=" bg-transparent w-full outline-none placeholder:text-gray-500 " 
                type="text" placeholder="Where to go.." id="city" />
                <i className="bi bi-send text-[14px]"></i>
              </div>
            </div>

            <div className="flex-1">
              <label htmlFor="date" className="text-[14px] font-bold mb-1">Date: </label>

              <div className="flex py-2 px-2 bg-transparent border border-red-800 rounded-md">
                <input 
                className=" text-gray-500 bg-transparent w-full outline-none placeholder:text-gray-500 " 
                type="date" id="date" />
              </div>
            </div>

            <div className="flex-1">
              <label htmlFor="Guests" className="text-[14px] font-bold mb-1">Guests: </label>

              <div className="flex items-center py-2 px-2 bg-transparent border border-red-800 rounded-md"
>
                <input 
                className=" bg-transparent w-full outline-none placeholder:text-gray-500 " 
                type="text" max={4} maxLength={4} id="Guests" placeholder="0" />
                <i className="bi bi-people text-[14px]"></i>
              </div>
            </div>


            <div className="flex-1">
              <label htmlFor="price" className="text-[14px] font-bold mb-1">Price: </label>
              <div className="flex items-center py-2 px-2 bg-transparent border border-red-800 rounded-md">
                <input 
                placeholder="0"
                className=" bg-transparent w-full outline-none placeholder:text-gray-30/30 " 
                type="text" id="type" />
                <i className="bi bi-tags text-[14px]"></i>
              </div>
            </div>

            <div className="w-fit flex text-white gap-1 items-center bg-red-600 py-[10px] px-3 rounded-md cursor-pointer mt-5">

              <i className="bi bi-search text-[12px]"></i>
              <span className=" text-[15px] font-medium">Search</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
