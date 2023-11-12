import React, { useEffect, useState } from "react";
import { Card } from "./Card/Card";
import { getFeaturedProducts } from "../service/productsService";

const FeaturedProduct = () => {
    const [featuredProducts, setFeaturedProducts] = useState()
    useEffect(() => {
      async function fetchFeaturedProducts() {
        try {
          const data = await getFeaturedProducts();
          setFeaturedProducts(data);
        } catch (error) {
          console.log(error(error.message));
        }
      }
      fetchFeaturedProducts();
    }, []);
  return (
    <section className="p-[20px] md:px-[100px] md:my-20 ">
      <div className="title mb-16">
        <h1 className="text-2xl text-center font-bold dark:text-slate-100 mb-5 underline underline-offset-8">
          Featured Products
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {featuredProducts?.slice(0, 3).map((product) => (
            <article key={product.id}>
               <Card product={product}/>
            </article>
        ))}

      </div>
    </section>
  );
};

export default FeaturedProduct;
