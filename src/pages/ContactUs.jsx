import React from 'react'

const ContactUs = () => {
  return (
    <section className='p-20 md:px-[100px]'>
         <div className="" data-aos="fade-up" data-aos-duration="5000 4000 5000">
          <h2 className=" border-l-4 border-blue-800 pl-2 -[20px] font-bold mb-4 text-blue-800">
            SEND MESSAGE
          </h2>
          <form
            className=" p-5 shadow-md shadow-black border--4 border-blue-800
            bg-gradient-to-r from-[#3b58fa]/30 from-10% via-[#fa3b8b]/30 via-50% to-[#3b58fa]/30 to-90% 

          "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[30px]">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border border-yellow-600 bg-transparent text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-[#F2BA44] dark:placeholder-gray-400 dark:text-white focus:ring-[#f2bb444f] focus:ring-4 focus:outline-none"
                  placeholder="Enter Your Email*"
                  required=""
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className=" bg-transparent border border-yellow-600 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-[#F2BA44] dark:placeholder-gray-400 dark:text-white focus:ring-[#f2bb444f] focus:ring-4 focus:outline-none"
                  placeholder="Enter Your Phone Number*"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="text"
                  id="text"
                  className=" bg-transparent border border-yellow-600 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-[#F2BA44] dark:placeholder-gray-400 dark:text-white focus:ring-[#f2bb444f] focus:ring-4 focus:outline-none"
                  placeholder="Enter Your Subject"
                  required=""
                />
              </div>

              <div>
                <input
                  type="url"
                  name="url"
                  id="url"
                  className=" bg-transparent border border-yellow-600 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-[#F2BA44] dark:placeholder-gray-400 dark:text-white focus:ring-[#f2bb444f] focus:ring-4 focus:outline-none"
                  placeholder="Enter Your Url"
                  required=""
                />
              </div>
            </div>

            <div className=" mt-[30px] flex flex-col gap-7">
              <div>
                <textarea
                  name=""
                  id=""
                  cols="40"
                  rows="5"
                  className=" resize-none bg-transparent border border-yellow-600 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-[#F2BA44] dark:placeholder-gray-400 dark:text-white focus:ring-[#f2bb444f] focus:ring-4 focus:outline-none"
                  placeholder="Enter Your Requirement"
                ></textarea>
              </div>
            </div>

            <div>
              <input
                type="file"
                name="file"
                id="file"
                className="mt-10 mb-[30px]"
                placeholder="Enter Your Url"
                required=""
              />
            </div>

            <button
              className=" text-white bg-blue-800 shadow-sm shadow-black py-2 px-5 rounded-sm text-sm hover:shadow-md hover:shadow-black transition"
            >
              Submit
            </button>
          </form>
        </div>
    </section>
  )
}

export default ContactUs