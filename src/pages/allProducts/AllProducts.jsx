import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { getAllProducts } from "../../service/productsService";
import FilterBar from "./FilterBar";
import { useFilter } from "../../context/FilterContext";
import { useTitle } from "../../Hook";

const AllProducts = () => {
    useTitle('All Products');
  const [filter, setFilter] = useState(false);
  // const [products, setProducts] = useState();

  const { products, initialProductList } = useFilter();


  //for search
  const search = useLocation().search;

  const searchTerm = new URLSearchParams(search).get("q");

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const data = await getAllProducts(searchTerm);
          initialProductList(data);
      } catch (error) {
        console.log(error(error.message));
      }
    }
    fetchAllProducts();
  }, []);



  return (
    <main className="relative">
      <div className=" max-h-[30vh] w-full">
        <div className=" relative z-[-999]">
          <h2 className=" uppercase z-[222] text-[white] text-[30px] font-bold absolute md:top-[-100px] top-0 left-0 bottom-0 right-0 flex justify-center items-center">
          all ({products?.length}) products
          </h2>
          <div className=" absolute md:bg-[#2e32479a] w-full h-[85vh]"></div>
          <img src='https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" className=" w-full max-h-[85vh] object-cover" />
        </div>
      </div>

      <section className="productsList my-5 p-5 md:px-[100px]">
        <div className="flex justify-between py-6">
          <div className="">
            <div
              onClick={() => setFilter(!filter)}
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className=" cursor-pointer md:fixed right-[10px] md:w-[80px] md:h-[80px] md:rounded-full
               inline-flex md:flex flex-col items-center m-auto justify-center p-2 md:p-1 text-sm md:text-[9px] font-bold text-center text-white rounded-sm bg-blue-800 shadow-md border-2 shadow-black z-[999] hover:bg-blue-700 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <i className="bi bi-funnel text-[20px]"></i> Filter Product
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {products?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>

      {
        filter && <FilterBar setFilter={setFilter} />
      }
    </main>
  );
};

export default AllProducts;
