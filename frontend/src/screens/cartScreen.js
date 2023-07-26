import React, { useEffect } from 'react';
import Header from '../Components/Header';
import { Link,  useLocation  } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Actions/cartActions';

const CartScreen = () => {
    window.scrollTo(0, 0);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const encodedData = searchParams.get('data');
  const dispatch = useDispatch();
     
  if (encodedData) {
    try {
      const data = JSON.parse(decodeURIComponent(encodedData));
      console.log("Data:", data);
      console.log("id", data.id);
    } catch (error) {
      console.log("Error parsing JSON:", error);
    }
}



const pushToCart = () =>{
    const data = JSON.parse(decodeURIComponent(encodedData));
    console.log("Data:", data);
  var id = data.id;
  var qty = data.qty;
 if(id){
     dispatch(addToCart(id,qty));
 }
}


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
       <div className='cart-item row'>
           <div className='remove-button d-flex justify-content-center align-items-center'>
               <i className='fas fa-times'></i>
           </div>
           <div className='cart-image col-md-3'>
               <img src="" alt="" />
           </div>
           <div className='cart-text col-md-5 d-flex align-items-center'>
               <Link to="#">
                <h4>dfjpdjjpd</h4>
               </Link>
           </div>
           <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-md-0 d-flex flex-direction-row">
            <h6>QUANTITY</h6>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                </select>
           </div>
           <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end ">
             <h6>SUBTOTAL</h6>
             <h4>$898</h4>
           </div>
       </div>
       {/* End of cart iterms */}
       <div className="total">
        <span className="sub">total:</span>
        <span className="total-price">$567</span>
       </div>
       <hr />
       <div className="cart-buttons d-flex align-items-center row">
        <Link to="/" className="col-md-6 ">
       <button>Continue To Shop</button>
        </Link>
        <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
            <button>
                <Link to="/shipping" className="text-white">Checkout</Link>
            </button>
        </div>
       </div>
   </div>
   </>
  );
};

export default CartScreen;