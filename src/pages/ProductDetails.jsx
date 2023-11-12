import { useRef, useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { getSingleproduct } from "../service/productsService";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "../components/Rating";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";
import { useTitle } from "../Hook";

const ProductDetail = () => {
  useTitle('Product Detail');
  const [product, setProduct] = useState();
  const dispatch = useDispatch();

  const sliderRef = useRef(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getSingleproduct(id);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, [id]);

  const carouselProperties = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="cat flex justify-between w-full">
          <div className="flex flex-1 gap-4 items-end justify-start py-2 ">
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

        <div className="flex gap-5 flex-col md:flex-row items-start">
          <div className="z-10 md:w-1/2 p-2 w-full object-cover object-center rounded border border-gray-200">
            <Slider ref={sliderRef} {...carouselProperties}>
              {product?.gallery?.map((img) => (
                <div className="flex px-2" key={img.id}>
                  <img
                    alt="ecommerce"
                    className="z-10 w-full max-h-[300px] object-cover object-center rounded border border-gray-200"
                    src={img?.img}
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="md:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-blue-800 text-3xl title-font font-bold mb-1">
              {product?.name}
            </h1>

            <p className="text-sm">{product?.long_description}</p>

            <div className="flex my-4">
              <span className="flex items-center">
                <Rating rating={product?.rating} />
                <span className=" bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {product?.rating}
                </span>
              </span>

              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <Link to="" className="text-gray-500 cursor-pointer">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </Link>
                <Link to="" className="ml-2 text-gray-500 cursor-pointer">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </Link>
                <Link to="" className="ml-2 text-gray-500 cursor-pointer">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </Link>
              </span>
            </div>

            <p className="leading-relaxed">{product?.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              {product?.best_seller && (
                <span className=" bg-blue-100 text-blue-800 text-xs mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  BEST SELLER
                </span>
              )}

              {product?.in_stock && (
                <span className=" bg-blue-100 text-blue-800 text-xs mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  INSTOCK
                </span>
              )}
              {!product?.in_stock && (
                <span className=" bg-blue-100 text-blue-800 text-xs mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  OUT OF STOCK
                </span>
              )}

              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                {product?.size}
              </span>
            </div>

            <div className="flex">
              <span className="title-font font-bold text-5xl text-gray-900">
                ${product?.price}
              </span>

              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: product.id,
                      name: product.name,
                      poster: product.poster,
                      price: product.price,
                    })
                  )
                }
                className="flex items-center ml-auto text-sm text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded"
              >
                Add To Cart
              </button>

              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
