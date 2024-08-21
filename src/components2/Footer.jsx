import React from "react";
import logo from "../assets/library.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img src={logo} className=" footer__logo--img" alt="" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <span className="footer__link no-cursor">About</span>
            <Link to="/books" className="footer__link">
              Books
            </Link>
            <Link to="/cart" className="footer__link">
              cart
            </Link>
          </div>
          <div className="footer__copyright">copyright &copy; 2021 library</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
