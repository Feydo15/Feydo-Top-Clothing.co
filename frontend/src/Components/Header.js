import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faLinkedin, faPinterest, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* Top Header */}
      <div className="Announcement">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>+2782 071 3340</p>
              <p>info@feydo.com</p>
            </div>
            <div className="col-12 col-lg-6 justify-content-center justify-content-lg-6">
            <Link to="">
            <FontAwesomeIcon icon={faWhatsapp}  />
              </Link>
              <Link to="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link to="">
              <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link to="">
              <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link to="">
              <FontAwesomeIcon icon={faYoutube} />
              </Link>
              <Link to="">
              <FontAwesomeIcon icon={faPinterest} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src="" />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end ">
                  <div className="btn-group">
                    <button
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Logout
                      </Link>
                    </div>
                  </div>
                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">4</span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* PC Header */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img src="../Home-img/ftc.jpg"  alt="logo" />
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                  />
                  <button type="submit" className="search-button">
                    search
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end">
                <div className="btn-group">
                  <button
                    className="name-button dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hi, Admin Doe
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Logout
                    </Link>
                  </div>
                </div>
                <Link to="/cart">
                    <span className="badge">4</span>
                <FontAwesomeIcon icon={faShoppingBag}  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
