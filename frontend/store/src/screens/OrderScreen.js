import React from 'react';
import Header from "./../Components/Header"
import { Link } from "react-router-dom"; 
import { PayPalButton } from "react-paypal-button-v2"

const OrderScreen = () => {
    window.scrollTo(0, 0);
  return (
    <>
    <Header />
    <div className="container">
        <div className="row order-detail">
            <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                <div className="row">
                    <div className="col-md-4 center">
                        <div className="alert-success order-box">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <div className="col-md-8 center">
                        <h5>
                            <strong>Customer</strong>
                        </h5>
                        <p>Admin Doe</p>
                        <p>
                            <a href={`mailto:feydo@ldnns.com`}>ewrufuwuewhur</a>
                        </p>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className='col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0'>
                <div className="row">
                    <div className="col-md-4 center">
                        <div className="alert-success order-box">
                         <i className="fas fa-truck-moving">
                         </i>
                        </div>
                    </div>
                    <div className="col-md-8 center">
                        <h5>
                            <strong>Order info</strong>
                        </h5>
                        <p>Shipping: South Africa</p>
                        <p>Pay method: Paypal</p>
                        <div className="bg-info p-2 col-12">
                            <p className="text-white text-center text-sm-start">
                                Paid on Jan 09 2023
                            </p>
                        </div>
                    </div>
                </di>
            </div>
            {/* 3 */}
            <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
            <div className="col-md-4 center">
     <div className="alert-success order-box">
      <i className="fas fa-map-marker-alt">
      </i>
           </div>
          </div>
          <div className="col-md-8 center">
           <h5>
               <strong>Deliver to</strong>
           </h5>
           <p>Address: South Africa, Limpopo, P.O BOX 75 Rebone</p>
           <div className="bg-danger p-1 col-12">
               <p className="text-white text-center text-sm-start">
                   Not Delivered
               </p>
           </div>
           </div>
            </div>
            </div>
        </div>
      {/* <Message variant="alert-info mt-5>Your oder is empty</Message> */}
      <div className="order-product row">
        <div className="col-md-3 col-6">
            <img src=""  alt="Product"/>
        </div>
        <div clasLinksName="col-md-5 col-6 d-flex align-items-center">
            <Link to={`/`}>
                <h6>Girls Nike Shoes</h6>
            </Link>
        </div>
        <div className="mt-3 mt-md-0 col-6 col-md-2 d-flex align-items-center">
            <h4>QUANTITY</h4>
            <h6>4</h6>
        </div>
        <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end d-flex flex-column">
            <h4>SUBTOTAL</h4>
            <h6>ZAR456</h6>
            </div>
            {/* total */}
<div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
    <table className="table table-bordered">
        <tbody>
            <tr>
                <td>
               <strong>Products</strong>
                </td>
                <td>ZAR456</td>
            </tr>
            <tr> 
            <td> 
             <strong>Shipping</strong>
            </td>
            <td>ZAR456</td>
            </tr>
            <tr> 
           <td> 
            <strong>Tax</strong>
           </td>
           <td>ZAR4</td>
           </tr>
           <tr> 
           <td> 
            <strong>Total</strong>
           </td>
           <td>ZAR456</td>
           </tr>
        </tbody>
    </table>
    <div className="col-12">
        <PayPalButton amount={343} />
    </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default OrderScreen;
