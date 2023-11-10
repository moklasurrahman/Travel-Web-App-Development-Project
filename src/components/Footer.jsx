import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="p-[20px] md:px-[100px] md:pt-[40px] bg-blue-800 text-white">
      <div className="">
        
        <div className="">
          <div data-aos="fade-up" className="flex pt-[40px] pb-[80px] gap-5 items-center justify-center">
            <div>
              <span className="text-[15px] font-bold">keep in touch</span>
              <h1 className="text-[30px] font-bold capitalize">travel with us</h1>
            </div>

            <form>
              <div className="contact flex items-end">
                <input className="w-full bg-transparent border-[2px] border-red-800 outline-none px-3 py-2" type="email" placeholder="Enter Emaill Adderess" />
                <button className="px-3 py-2 border-[2px] border-red-800 text-white hover:bg-red-800 transition-[.3s]" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>

          <div className="footeritems">
            <div className="flex flex-col md:flex-row gap-10 md:gap-5">
              <div className="flex-1 ">
                <div className="leftitem">
                  <div data-aos="fade-right" className="logo flex">
                    <h1 className="text-[40px] font-bold"> Trisog.</h1>
                  </div>

                  <p className="text-sm md:pr-[130px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni dolores iure dignissimos illum! At cum neque illo
                    doloremque error! Minima nesciunt ut aliquam, culpa impedit
                    id fugiat quidem aperiam iste, numquam eius ad veniam quod.
                  </p>

                  <div data-aos="fade-left" className="socialIcon">
                    {/* <TwitterIcon className='icon'/>
     <YouTubeIcon className='icon'/>
     <InstagramIcon className='icon'/>
     <TbBrandTripadvisor className='icon'/> */}
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="grid grid-cols-3 gap-5">
                  <div className="flex gap-5 flex-col">
                    <h3 className="text-[16px] font-bold capitalize">our agency</h3>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="3000"
                      className="flex flex-col gap-2 text-sm"
                    >
                      <span> services</span>
                      <span> insurance</span>
                      <span> Agency</span>
                      <span> Tourism</span>
                      <span> Payment</span>
                    </div>
                  </div>

                  <div className="flex gap-5 flex-col">
                    <h3 className="text-[16px] font-bold capitalize">partners</h3>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="4000"
                      className="flex flex-col gap-2 text-sm"
                    >
                      <span> booking</span>
                      <span> rentalCar</span>
                      <span> hostelWorld</span>
                      <span> trivago</span>
                      <span> tripAdvisor</span>
                    </div>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-duration="5000"
                    className="flex gap-5 flex-col"
                  >
                    <h3 className="text-[16px] font-bold capitalize">our agency</h3>
                    <div  className="flex flex-col gap-2 text-sm">
                      <span> london</span>
                      <span> california</span>
                      <span> indonesia</span>
                      <span> europe</span>
                      <span> oceania</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="infofooter">
              <span>devolap my Moklasur rahman</span>
              <span> &#169; Copyright reserved </span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
