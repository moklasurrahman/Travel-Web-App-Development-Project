
const Loadingpage = () => {
  return (
    <section>
      <div className="shadow rounded-md p-4 w-full mx-auto">
        <div className="animate-pulse flex items-center justify-between space-x-4 w-full">
          
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>

          <div className="animate-pulse flex items-center gap-[30px]">
            <span className="h-2 w-10 bg-slate-200 rounded col-span-2"></span>
            <span className="h-2 w-10 bg-slate-200 rounded col-span-2"></span>
            <span className="h-2 w-10 bg-slate-200 rounded col-span-2"></span>
            <span className="h-2 w-10 bg-slate-200 rounded col-span-2"></span>
            <span className="h-2 w-10 bg-slate-200 rounded col-span-2"></span>
            <span className="h-2 w-10 bg-slate-200 rounded col-span-2"></span>
            <span className="h-8 w-8 rounded-full bg-slate-200 col-span-2"></span>
            <span className="h-8 w-8 rounded-full bg-slate-200 col-span-2"></span>

          </div>
          
        </div>
      </div>

      <section
      className=" animate-pulse z-[-9999] w-full md:h-[88vh] md:flex justify-center items-center m-auto

      "
    >

      <div className=" p-[20px] md:px-[100px] overflow-hidden z-[777]">
        
                {/* <div className=""> */}
                  <div className=" z-[-7777] flex items-center gap-5 md:gap-3 justify-between">
                    <div className="left flex-1">
                      <p className="bg-slate-200 w-[80px] h-[10px] "></p>
                      <h2 className=" mt-2 w-full h-[20px] bg-slate-200"></h2>
                      <h2 className=" mt-2 w-[250px] h-[20px] bg-slate-200"></h2>

                      <p className=" w-full h-[150px] mt-2 bg-slate-200 pt-5 flex flex-wrap gap-5">
                      </p>
                      <div className="py-5 flex gap-5 text-white">
                        <span
                          
                          className="py-2 px-5 rounded-sm text-sm bg-slate-200 "
                        >
                          
                        </span>
                        <span
                         
                          className="py-2 px-5 rounded-sm bg-slate-200"
                        >
                         
                        </span>
                      </div>
                    </div>
                    <div className="right flex-1 mt-2 w-[600px] h-[250px] bg-slate-200">
                     
                    </div>
                  </div>
                {/* </div> */}
             
        </div>     
    </section>


    </section>
  );
};

export default Loadingpage;
