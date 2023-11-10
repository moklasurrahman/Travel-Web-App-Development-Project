/* eslint-disable react/prop-types */
import React from 'react'

export const Card = ({item}) => {
  return (
    <div>
         <div className=" hover:scale-105 shadow-md shadow-yelow-500 transition-[0.3s] cursor-pointer bg-gray-50">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.title}
                />

                <div className="p-3">
                  <p className="text-[10px]">{item.location}</p>
                  <h2 className="text-[14px] font-bold py-2 ">{item.title}</h2>
                  <p className="text-sm">
                    <div className="flex items-center my-2.5">

                      <span className="bg-blue-100 flex items-center gap-1 text-blue-800 text-xs font-semibold py-0.5 px-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      <svg
                        className="w-3 h-3 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                     
                       <p className=""> 5.0</p>
                      </span>

                      <span className="pl-2">{item.total_Reviews}</span>
                    
                    </div>
                  </p>

                  <p className="flex justify-between py-2">
                    <span className="text-sm">Starting From</span>
                    <span className="text-[18px] font-bold">$520</span>
                  </p>
                </div>
              </div>
    </div>
  )
}
