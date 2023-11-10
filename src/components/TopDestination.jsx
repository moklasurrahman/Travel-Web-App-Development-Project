import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopDestination = () => {
  const data = [
    { id: 1, title: "city Tours", image: "https://images.pexels.com/photos/17366637/pexels-photo-17366637/free-photo-of-woman-on-hilltop-over-forest-under-clouds.jpeg?auto=compress&cs=tinysrgb&w=600", description: "174,688 Travelers" },
    { id: 2, title: "city Tours", image: "https://images.pexels.com/photos/2217660/pexels-photo-2217660.jpeg?auto=compress&cs=tinysrgb&w=600", description: "174,688 Travelers"},
    { id: 3, title: "city Tours", image: "https://images.pexels.com/photos/1851481/pexels-photo-1851481.jpeg?auto=compress&cs=tinysrgb&w=600", description: "174,688 Travelers" },
    { id: 4, title: "city Tours", image: "https://images.pexels.com/photos/2079228/pexels-photo-2079228.jpeg?auto=compress&cs=tinysrgb&w=600", description: "174,688 Travelers" },
  ];

  const [items, setItems] = useState(data);

  return (
    <section className="p-[20px] md:px-[100px] md:pt-[40px] bg-blue-50">
      <div className="p-5">
        <div
          data-aos="fade-left"
          data-aos-duration="5000 4000 5000"
          className="my-10 border-l-[4px] border-blue-800 pl-2 flex justify-between items-end"
        >
          <div className="">
          <p className=" text-red-800 text-[20px] font-medium uppercase font-mono">
            Destinations
          </p>
          <h2 className=" text-blue-800 text-[25px] font-bold">
            Top Destinations
          </h2>
          </div>
          <Link to='' className="text-blue-800">
            <span className="text-sm font-bold flex items-center">See All<i className="bi bi-arrow-right-short text-[20px]"></i></span>
          </Link>
        </div>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-blue-800">
          {items.map((item) => (
            <article key={item.id}>
                <div className="hover:mt-3 transition-[0.3s] cursor-pointer">
                  <img
                  className="w-full h-full object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                  <h2 className="text-[15px] font-bold py-2 ">{item.title}</h2>
                  <p className="text-sm text-red-800">{item.description}</p>
                </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestination;
