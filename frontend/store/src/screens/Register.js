import React from 'react'
import Header from "./../Components/Header"
import { Link } from "react-router-dom"; 


const Register = () => {
    window.scrollTo(0, 0);

  return (
    <> 
    <Header />
    <div className="container d-flex flex-column justify-content-center align-items-center">
        <form className="Login col-md-8 col-lg-4 col-11">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
           <button type="submit">
            Register
           </button>
           <p>
            <Link to={"/login"}>
                I Have Account <strong>Login</strong>
            </Link>
           </p>
        </form>
      
    </div>
    </>
  )
}

export default Register;
