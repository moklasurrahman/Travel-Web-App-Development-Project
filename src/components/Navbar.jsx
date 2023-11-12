import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/airplane.png";
import { useSelector } from "react-redux";
import DropdownLogin from "./Elements/DropdownLogin";
import DropdownLogout from "./Elements/DropdownLogout";

// import Search from "./Search";
// import useAos from "../Animation";

// eslint-disable-next-line react/prop-types
const Navbar = () => {
  const [show, setShow] = useState(false);
  
  
  const[dropdown, setDropdown] = useState(false);

  const token = JSON.parse(sessionStorage.getItem("token")) // comming from login
  const products = useSelector((state)=>state.cart.products);


  const navigate = useNavigate();
 const searchRef = useRef();

 const handelSubmit = (event) => {
   event.preventDefault();
  navigate(`/All-Products?q=${searchRef.current.value}`);

 }

  return (
    <section className=" relative herobg shadow-md shadow-gray-400">
      <div
        className=" w-full
      flex items-center m-auto justify-between px-[20px] py-[12px] md:items-center sm:gap-0 md:gap-[25px] 
      "
      >
        {/* <div className="md:hidden"></div> */}
        <div className="flex items-center justify-between gap-[80px]">
          <Link
            data-aos="fade-right"
            data-aos-duration="5000 4000 5000"
            to="/"
            className=" cursor-pointer z-50 left flex items-start flex-col sm:flex-row w-max-content"
          >
            <p className=" text-[15px] md:text-[20px] xl:text-[25px] flex items-center gap-3 font-bold text-blue-700  dark:text-white">
              <img
                src={img}
                alt=""
                className="w-[35px] xl:w-[40px] bg-blue-800 p-[6px] rounded-[50px] shadow-sm flex items-center justify-center m-auto"
              />
              eCom.
            </p>
          </Link>

          <div
            className={` bg-[#c5c5c5]
          z-[999] md:bg-transparent sm:flex-[75%] xl:flex-[60%] fixed md:sticky top-0 left-0 w-[80%] md:w-auto h-screen transform transition-transform ease-in-out md:block ${
            show ? "translate-x-0" : "-translate-x-full md:-translate-x-0"
          } md:h-auto`}
          >
            <div
              onClick={() => setShow((prive) => !prive)}
              className=" cursor-pointer flex justify-end p-[20px] md:hidden"
            >
              <span>
                <i className="bi bi-x text-[35px] font-[700] text-[#3a3a3a] dark:text-white"></i>
              </span>
            </div>

            <ul
              data-aos="fade-left"
              data-aos-duration="5000 4000 5000"
              className=" flex flex-col md:flex-row md:gap-[30px] xl:gap-[40px] pt-[50px] md:pt-0 md:px-0 px-[30px] text-[13px] xl:text-[16px] font-[700] text-blue-800 md:justify-end  md:m-auto dark:text-white w-full"
            >
             <li className="mt-5 md:mt-0">
                <Link
                  to="/"
                  className=" hover:underline xl:decoration-4 underline-offset-4 xl:underline-offset-[18px] decoration-red-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li className="mt-5 md:mt-0">
                <Link
                  to="/All-Products"
                  className=" hover:underline xl:decoration-4 underline-offset-4 xl:underline-offset-[18px] decoration-red-700"
                  aria-current="page"
                >
                  All Products
                </Link>
              </li>

              <li className="mt-5 md:mt-0">
                <Link
                  to="/Contact"
                  className=" hover:underline xl:decoration-4 underline-offset-4 xl:underline-offset-[18px] decoration-red-700"
                  aria-current="page"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="flex items-center gap-[30px] sm:gap-10 text-blue-800"
        >
          <div
            data-aos="fade-left"
            data-aos-duration="5000 4000 5000"
            className=" flex gap-5 items-center justify-between"
          >
            <p
            >

<form onSubmit={handelSubmit} className="search-box">
    <button type="submit" className="btn-search"><i className="bi bi-search text-[15px]"></i></button>
    <input ref={searchRef} type="text" className="input-search" placeholder="Search Products..."/>
  </form>


              
            </p>
            
          


            <span onClick={()=>setDropdown(!dropdown)} className='cursor-pointer'><i className="bi bi-person-square"/></span>

              <div className="z-50 dropdow absolute top-[50px] right-5 xl:right-[50px]">
                { dropdown && ( token? <DropdownLogin setDropdown={setDropdown}/> : <DropdownLogout setDropdown={setDropdown}/>)  } 
               
              </div>





            <Link to='/cart'>
              <div className=" relative flex gap-2 items-center cursor-pointer md:hover:bg-red-50 md:px-3 md:py-1 md:rounded-full">
                <i className="bi bi-cart text-[15px]"></i>
                <span className="absolute inline-flex items-center justify-center w-4 h-4 text-[10px] p-2 text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-1 dark:border-gray-900">{products.length}</span>
                </div>

              </Link>


          </div>

          <div
            onClick={() => setShow((prive) => !prive)}
            className=" md:hidden"
          >
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center justify-center text-sm text-[#000000] md:hidden focus:outline-none focus:ring-none  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <i className="bi bi-list-nested text-[25px] font-bold"></i>
            </button>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Navbar;
