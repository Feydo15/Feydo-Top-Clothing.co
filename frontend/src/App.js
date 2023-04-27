import React from "react";
import './App.css';
import './responsive.css'; 
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/cartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";



const App = () => {
  return (
      
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeScreen />}  />
        <Route exact path="/products/:id" element={<SingleProduct />} />
        <Route exact path="/login"  element={<Login />} />
        <Route exact path="/register"  element={<Register />} />
        <Route exact path="/profile"  element={<ProfileScreen />} />
        <Route exact path="/cart/:id?"  element={<CartScreen />} />
        <Route exact path="/shipping"  element={<ShippingScreen />} />
        <Route exact path="/payment"  element={<PaymentScreen />} />
        <Route exact path="/placeOrder"  element={<PlaceOrderScreen />} />
        <Route exact path="/order"  element={<OrderScreen />} />
        <Route exact path="*"  element={<NotFound />} />
        </Routes>
    </Router>
     
  );
}

export default App;
