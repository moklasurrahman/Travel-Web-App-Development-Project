import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Error"
import Home from "../pages/Home";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";




const Index = () => {
  return (
    <>
    
     <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} />
    
          <Route path="*" element={<Error/>} />
        </Routes>

        <Footer />
      </BrowserRouter>

    </>
  );
};

export default Index;
