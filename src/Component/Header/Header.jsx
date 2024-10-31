import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img className="header_icon" src="./CineMate_logo.png " />
        </Link>

        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span> Popular</span>
        </Link>

        <Link to="movies/top_rated" style={{ textDecoration: "none" }}>
          <span> Top rated</span>
        </Link>

        <Link to="movies/upcoming" style={{ textDecoration: "none" }}>
          <span> upcoming</span>
        </Link>

      </div>
    </div>
  )
}

export default Header;
