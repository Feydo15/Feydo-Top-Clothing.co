import React from 'react';
import Header from '../Components/Header';
import { Link } from "react-router-dom";

const cartScreen = () => {
    window.scrollTo(0, 0);
  return (
   <>
   <Header />
   {/* Cart */}
   <div className='container'>
       {/* <div className=' alert alert-info text-center mt-3'> */}
           {/* Your cart is empty */}
           {/* <Link className='btn btn-success mx-5 px-5 py-3' to="/" style={{fontSize: "12px"}}> */}
               {/* SHOPPING NOW */}
           {/* </Link> */}
       {/* </div> */}

       <div className='alert alert-info text-center mt-3'>
           Total Cart Products
           <Link className='text-success mx-2' to="/cart">
               (4)
           </Link>
       </div>
       {/* cartiterm */}
       <div className='cart-iterm row'>
           <div className='remove-button d-flex justify-content-center align-items-center'>
               <i className='fas fa-times'></i>
           </div>
           <div className='cart-image col-md-3'>
               <img src="" alt="" />
           </div>
           <div className='cart-text col-md-5 d-flex align-items-center'>
               <Link to="#"></Link>
           </div>
       </div>
   </div>
   </>
  )
}

export default cartScreen