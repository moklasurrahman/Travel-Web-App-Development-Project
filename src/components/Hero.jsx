import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const heros = [
    { id: 1, sms:"Welcome", title:"Lorem, ipsum dolor sit", description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit.Non expedita ad unde accusamus sint pariatur", img1:"https://media.istockphoto.com/id/1254508881/photo/woman-holding-sale-shopping-bags-consumerism-shopping-lifestyle-concept.jpg?b=1&s=612x612&w=0&k=20&c=S4nh5T3QotfFKKjzKIB8SOz4aukbBCV2rfzEAcvGAlA=", img2:"https://images.pexels.com/photos/16493461/pexels-photo-16493461/free-photo-of-three-mannequins-are-sitting-on-stools-in-front-of-a-store.jpeg?auto=compress&cs=tinysrgb&w=600" }, 
    { id: 2, sms:"Top Products", title:"Lorem, ipsum dolor sit", description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit.Non expedita ad unde accusamus sint pariatur", img1:"https://images.pexels.com/photos/13441993/pexels-photo-13441993.jpeg?auto=compress&cs=tinysrgb&w=600", img2:"https://images.pexels.com/photos/13533954/pexels-photo-13533954.jpeg?auto=compress&cs=tinysrgb&w=600" }, 

];

  const carouselProperties = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 5000,

    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className=" md:h-[88vh]
    bg-gradient-to-r from-[#3b58fa]/30 from-10% via-[#fa3b8b]/30 via-50% to-[#3b58fa]/30 to-90% 

    "
    >
      <div className=" p-[15px] md:px-[95px] md:pt-[40px]">
        <div className=" relative">
          <Slider {...carouselProperties}>
            {heros?.map((hero) => (
              <article key={hero.id}>
                <div className="w-full flex gap-5 flex-col md:flex-row px-5">
                  <div className="textDiv flex-1 md:mt-[50px]">
                    <span className="text-[25px] font-bold text-red-800 font-['Crimson Pro'] ">
                      {hero.sms}
                    </span>
                    <h1 className=" text-[40px] font-bold leading-[50px] py-3 md:py-2 text-blue-800">
                      {hero.title}
                    </h1>
                    <p className="text-md mb-7 text-blue-800 font-medium">
                     {hero.description}
                    </p>
                    <Link to='/All-Products' className="text-sm px-3 py-2 border-2 text-blue-800 border-blue-800 hover:bg-blue-300 transition-[.3s] rounded-sm font-bold">
                      Explorer All Product
                    </Link>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row gap-5">
                      <p>
                        <img
                          className="object-cover w-full md:min-w-[200px] md:min-h-[300px] rounded-md hover:mt-[5px] transition"
                          src={hero.img1}
                          alt=""
                        />
                      </p>
                      <p>
                        <img
                          className="object-cover w-full md:min-w-[300px] md:h-[350px] rounded-md hover:scale-105 transition-[.3s]"
                          src={hero.img2}
                          alt=""
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
