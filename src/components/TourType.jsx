import { useState } from 'react'
import img from '../assets/diet.png'

const TourType = () => {

    const data = [
    {id: 1,title: "city Tours",image: img,description:"10 Tours+"},
    {id: 2,title: "city Tours",image: img,description:"10 Tours+"},
    {id: 3,title: "city Tours",image: img,description:"10 Tours+"},
    {id: 4,title: "city Tours",image: img,description:"10 Tours+"},
    {id: 5,title: "city Tours",image: img,description:"10 Tours+"},
    {id: 6,title: "city Tours",image: img,description:"10 Tours+"},
  ];


  const [items, setItems] = useState(data);
  return (
    <section className=" p-[20px] md:px-[100px] md:pt-[40px]">
    <div data-aos="fade-left" data-aos-duration="5000 4000 5000" className="my-10 border-l-[4px] border-blue-800 pl-2">
    <p className=" text-red-800 text-[20px] font-medium uppercase font-mono">
        Browse by category
      </p>
      <h2 className=" text-blue-800 text-[25px] font-bold">Pick a Tour Type</h2>
      
    </div>

    <div data-aos="fade-right" data-aos-duration="5000 4000 5000" className="grid grid-cols-2 gap-[20px] sm:grid-cols-3 md:grid-cols-6">
      {items?.map((item) => (
        <article key={item.id}>
            <div className="bg-white text-blue-800 shadow-md shadow-gray-500 text-center p-6 hover:mt-3 cursor-pointer transition-[0.3s]">
                <img src={item.image} alt="" className='bg-red-400 w-[50px] h-[50px] p-2 flex items-center justify-center m-auto rounded-full object' />
                <h2 className='text-[15px] font-bold capitalize py-1'>{item.title}</h2>
                <p className='text-sm'>{item.description}</p>
            </div>
        </article>
      ))}
    </div>
  </section>
  )
}

export default TourType