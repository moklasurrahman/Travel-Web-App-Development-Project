import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Error"
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AllProducts from "../pages/allProducts/AllProducts";
import ProductDetail from "../pages/ProductDetails";
import CartCheck from "../pages/cart/CartCheck";
import Signup from "../pages/registration/Signup";
import Login from "../pages/registration/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../pages/dashboard/Dashboard";
import ContactUs from "../pages/ContactUs";




const Index = () => {
  return (
    <>
    
     <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/All-Products" element={<AllProducts/>} />
          <Route path="/Products/:id" element={<ProductDetail/>} />
          <Route path="/Cart" element={<ProtectedRoutes><CartCheck/></ProtectedRoutes>} />
          <Route path="/Dashboard" element={<ProtectedRoutes><Dashboard/></ProtectedRoutes>} /> 
          <Route path="/Contact" element={<ContactUs/>} />

          <Route path="/login" element={<Login/>} />
          <Route path="/Sign-up" element={<Signup/>} /> 


          <Route path="*" element={<Error/>} />
        </Routes>
<Footer/>
      </BrowserRouter>

    </>
  );
};

export default Index;
