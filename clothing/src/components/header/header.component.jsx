import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";

const Header = () => (
  <div className=" header">
    <Link to="/" className="logo-container">
      <img
        className="logo"
        src="https://mp4-c.udemycdn.com/2019-06-30_21-01-32-9996f50fd92611c5a1dc2be86a61ae44/original.svg?e=1586790628&h=427694d28e9bdd2c890d671beda2dc03"
        alt=""
      />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
