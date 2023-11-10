import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";

const Featured = () => {
  const data = [
    {
      id: 1,
      location: "Budapest, Hungary",
      title: "Wonders of the West Coast & kimberley",
      rating: 5,
      total_Reviews: "15 reviews",
      date: "7days",
      prices: "$520",
      image:
        "https://images.pexels.com/photos/17366637/pexels-photo-17366637/free-photo-of-woman-on-hilltop-over-forest-under-clouds.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "174,688 Travelers",
    },
    {
      id: 2,
      location: "Budapest, Hungary",
      title: "Wonders of the West Coast & kimberley",
      rating: 5,
      total_Reviews: "15 reviews",
      date: "7days",
      prices: "$520",
      image:
        "https://images.pexels.com/photos/2217660/pexels-photo-2217660.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "174,688 Travelers",
    },
    {
      id: 3,
      location: "Budapest, Hungary",
      title: "Wonders of the West Coast & kimberley",
      rating: 5,
      total_Reviews: "15 reviews",
      date: "7days",
      prices: "$520",
      image:
        "https://images.pexels.com/photos/1851481/pexels-photo-1851481.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "174,688 Travelers",
    },
    {
      id: 4,
      location: "Budapest, Hungary",
      title: "Wonders of the West Coast & kimberley",
      rating: 5,
      total_Reviews: "15 reviews",
      date: "7days",
      prices: "$520",
      image:
        "https://images.pexels.com/photos/2079228/pexels-photo-2079228.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "174,688 Travelers",
    },
  ];

  const [items, setItems] = useState(data);

  return (
    <section className=" p-[20px] md:px-[100px] md:pt-[40px] bg-blue-800">
      <div className="">
        <div
          data-aos="fade-left"
          data-aos-duration="5000 4000 5000"
          className="my-10 border-l-[4px] border-white pl-2 flex justify-between items-end"
        >
          <div className="">
            <p className=" text-white text-[20px] font-medium uppercase font-mono">
              Tours
            </p>
            <h2 className=" text-white text-[25px] font-bold">
              Featured Tours
            </h2>
          </div>
        </div>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-blue-800">
          {items.map((item) => (
            <article key={item.id}>
             <Card item={item}/>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
