import React from 'react'
import Cartpage from './Cartpage';
import { useSelector } from 'react-redux';
import CartEmpty from './CartEmpty';

const CartCheck = () => {
  
    const products = useSelector((state) => state.cart.products);

    return (
    <div>
   
   {
    products.length ? <Cartpage/> : <CartEmpty/>
   }
    
    </div>
  )
}

export default CartCheck