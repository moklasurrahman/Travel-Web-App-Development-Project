import { toast } from "react-toastify";
import useAos from "../Animation"
import { subscribe } from "../services/authService";
import 'react-toastify/dist/ReactToastify.css';

const EmailNewsLetter = () => {
  useAos({duration: 2000})


  const handelsubscribe = async (event) =>{
    event.preventDefault();

    try{
      const authDetail = {
        email: event.target.email.value,
        
      }
  
      const data = await subscribe(authDetail); //signup geting data to "services/authService"
        toast.success("Request was successful: " + data.email);
    }
    catch(error){
      toast.error("Email already exist");
      // toast.error(error.message, {closeButton: true, position: "top-center" });
    }

  }



  return (
    <section className='px-[20px] md:px-[100px] my-[100px]'>
      
      <div className="flex sm:items-center justify-between flex-col sm:flex-row gap-8">
       
        <div data-aos="fade-left" data-aos-duration="5000 4000 5000" className="flex-1 border-l-[4px] border-blue-800 pl-2">
          <h2 className='text-[18px] font-bold text-blue-800'>Email Newsletter</h2>
          <p className=' text-yellow-600 text-sm'>Sign up for our email newsletter to stay up to date</p>
        </div>


        <div className="flex-1">
          <form onSubmit={handelsubscribe}
           data-aos="fade-right" data-aos-duration="5000 4000 5000"
            className=" items-center flex"
          >
            <div className=" border-[1px] border-blue-800 py-3 px-5 text-yellow-600 rounded-r-sm text-[12px] font-[700] cursor-pointer flex items-center w-full rounded-full">
              <i className="bi bi-envelope text-[12px] text-slate-500 dark:text-white"></i>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter Your Email"
                className=" outline-none ml-2 bg-transparent w-full placeholder-slate-500"
              />
            </div>

           <div className="">
           <input
              className=" bg-blue-800 border-[1px] border-blue-800 hover:border-blue-900 hover:bg-blue-900 py-[12px] px-5 text-white rounded-r-full text-[12px] font-[700] cursor-pointer"
              type="submit"
              value="Subscribe"
            />
           </div>
          </form>
        </div>
      </div>
    
        
    </section >
  )
}

export default EmailNewsLetter