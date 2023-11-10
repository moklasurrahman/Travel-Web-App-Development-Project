import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/whychoos.jpg'

const WhyChoose = () => {
  return (
    <section className='p-[20px] md:px-[100px] md:pt-[40px]'>
       <div className="flex
       flex-col md:flex-row gap-10
       ">
       <div className="flex-1">
            <img src='https://images.pexels.com/photos/8241135/pexels-photo-8241135.jpeg?auto=compress&cs=tinysrgb&w=600' />
        </div>

        <div className="flex-1 text-blue-800">
            <span className='text-[20px] font-bold font-mono text-red-800'>Why Choose US</span>
            <h2 className='text-[30px] font-bold leading-9 pb-3'>Lorem ipsum dolor sit amet.</h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta obcaecati accusamus voluptatem!</p>

            <p className='grid grid-cols-2 py-3 gap-2 mb-5'>
                <span className='flex items-center gap-2 hover:pl-3 transition-[0.3s] cursor-default'><i className="bi bi-check-circle text-[15px] text-red-800"></i>Lorem, ipsum.</span>
                <span className='flex items-center gap-2 hover:pl-3 transition-[0.3s] cursor-default'><i className="bi bi-check-circle text-[15px] text-red-800"></i>Lorem, ipsum.</span>
                <span className='flex items-center gap-2 hover:pl-3 transition-[0.3s] cursor-default'><i className="bi bi-check-circle text-[15px] text-red-800"></i>Lorem, ipsum.</span>
                <span className='flex items-center gap-2 hover:pl-3 transition-[0.3s] cursor-default'><i className="bi bi-check-circle text-[15px] text-red-800"></i>Lorem, ipsum.</span>
            </p>

            <Link to='' className=' px-5 py-2 border-[2px] border-red-800 rounded-sm text-blue-800 hover:bg-red-800 transition-[.3s] '>Contact Us</Link>
        </div>
       </div>
    </section>
  )
}

export default WhyChoose