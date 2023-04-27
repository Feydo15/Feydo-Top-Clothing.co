import React from 'react';
import Header from "./../Components/Header"
import { Link } from "react-router-dom"; 

const Login = () => {
    window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <form>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button type="submit">Login</button>
            <p>
                <Link to={"/register"}>Create Account</Link>
            </p>
        </form>
      </div>
    </>
  );
};

export default Login;
