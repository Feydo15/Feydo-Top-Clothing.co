import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { listProductDetails } from '../Redux/Actions/ProductActions';
import Header from "./../Components/Header"
import Rating from "../Components/homeComponents/Rating"
import Message from "./../Components/LoadingError/Error"
import Loading from '../Components/LoadingError/Loading';

const SingleProduct = ({ history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();


  
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);
  
  const navigate = useNavigate();

  const AddToCartHandler = (e) => {
    e.preventDefault();
   const data = { id, qty };
    const encodedData = encodeURIComponent(JSON.stringify(data));
    navigate(`/cart?data=${encodedData}`);
  };
  const handleQtySelect = (e)=>{
    setQty(e.target.value)
  
  } 

  return (
    <>
      <Header />
      <div className="container single-product">
        {
          loading ? (
            <Loading />
          )
            : error ? (
              <Message variant="alert-danger">{error}</Message>
            )
              :
              (
                <>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-image">
                        <img src={product.image} alt={product.name} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="product-dtl">
                        <div className="product-info">
                          <div className="product-name">{product.name}</div>
                        </div>
                        <p>{product.description}</p>
                        <div className="product-count col-lg-7">
                          <div className="flex-box d-flex justify-content-between align-items-center">
                            <h6>Price</h6>
                            <span>${product.price}</span>
                          </div>
                          <div className="flex-box d-flex justify-content-between align-items-center">
                            <h6>Status</h6>
                            {product.countInStock > 0 ? (<span>In Stock</span>) : (<span>unavailable</span>)}
                          </div>
                          <div className="flex-box d-flex justify-content-between align-items-center">
                            <h6>Reviews</h6>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                          </div>
                          {product.countInStock > 0 ? (<> <div className="flex-box d-flex justify-content-between align-items-center">
                            <h6>Quantity</h6>
                            <select onChange={handleQtySelect}>{[...Array(product.countInStock).keys()].map((x) => (<option key={x + 1} value={x + 1}>{x + 1}</option>))}</select>
                          </div>
                            <button onClick={AddToCartHandler} className='round-black-btn'>Add To Cart</button> </>) : null}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="row my-5">
                    <div className="col-md-6">
                      <h6 className="mb-3">REVIEWS</h6>
                      <Message variant={"alert-info mt-3"}>No Reviews</Message>
                      <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
                        <strong>Admin Doe</strong>
                        <Rating />
                        <span>Jan 09 2023</span>
                        <div className="alert alert-info mt-3"> Lorem30dflkglldmj</div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h6>WRITE A CUSTOMER REVIEW</h6>
                      <div className="my-4"></div>
                      <form>
                        <div className="my-4">
                          <strong>Rating</strong>
                          <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                            <option value="">Select...</option>
                            <option value="1">1 - Poor</option>
                            <option value="2">2 - Fair</option>
                            <option value="3">3 - Good</option>
                            <option value="4">4 - Very Good</option>
                            <option value="5">5 - Excellent</option>
                          </select>
                        </div>
                        <div className="my-4">
                          <strong>Comment</strong>
                          <textarea
                            className="col-12 bg-light p-3 mt-2 border-0 rounded"
                          ></textarea>
                        </div>
                        <div className="my-3">
                          <button className="col-12 bg-black border-0 p-3 rounded text-white">SUBMIT</button>
                        </div>
                      </form>
                      <div className="my-3">
                        <Message variant={"alert-warning"}>
                          Please{" "}
                          <Link to="/login">
                            " <strong>Login</strong> "
                          </Link>{" "}
                          to write a review{" "}
                        </Message>
                      </div>
                    </div>
                  </div>
                </>
              )
        }


      </div>
    </>
  );
};

export default SingleProduct;
