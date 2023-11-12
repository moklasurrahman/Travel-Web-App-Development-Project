import { useRef, useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getTrendingProducts } from "../service/productsService";
import TrendingCard from "./Card/TrendingCard";

const TrendingProducts = () => {
  const sliderRef = useRef(null);

  const [trendingproducts, setTrendingProducts] = useState();
  useEffect(() => {
    async function fetchTrendingProducts() {
      try {
        const data = await getTrendingProducts();
        setTrendingProducts(data);
      } catch (error) {
        console.log(error(error.message));
      }
    }
    fetchTrendingProducts();
  }, []);


  const carouselProperties = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    speed: 1000,

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
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className="p-[20px] md:px-[0px] md:pt-[40px]">
      <div className="relative w-full m-auto flex flex-col justify-center items-center">
        <div className="title text-[#000002] flex flex-col justify-center items-center">
          <h1 className=" font-[700] text-md md:text-[36px]  ">
            Shop Our Trending Products
          </h1>
          <p className="text-sm">
            Life is hard enough already. Let us make it a little easier.
          </p>
        </div>

        <div className="cat mt-[46px] flex justify-between w-full">
          <div className="flex flex-1 gap-4 items-end justify-end">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="w-[18px] h-[18px] bg-[#EBEBEB] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white rounded-full flex items-center justify-center"
            >
              <i className="bi bi-chevron-left text-[10px]"></i>
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="w-[18px] h-[18px] bg-[#EBEBEB] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white rounded-full flex items-center justify-center"
            >
              <i className="bi bi-chevron-right text-[10px]"></i>
            </button>
          </div>
        </div>

    
        <div className="w-full overflow-hidden">
        <Slider ref={sliderRef} {...carouselProperties}>
           {trendingproducts?.map((product) => (
             <TrendingCard key={product.id} product={product} />
           ))}
           </Slider>
        </div>

      



       
      </div>
    </section>
  );
};

export default TrendingProducts;