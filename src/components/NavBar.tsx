import React, { useState } from "react";
import "./styles/NavBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="navbar">
      <a href="#" className="logo__container">
        <img src="/brand_logo.png" alt="logo" />
      </a>
      <div className="nav__items">
        <ul>
          <a href="#">
            <li className="nav__item">About Us</li>
          </a>

          <div className="nav__item">
            Our Communities <img src="/dropdown_filled.png" alt="" />
          </div>
          <div
            className="nav__item relative"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Election Data <img src="/dropdown_filled.png" alt="" />
            <div className={!isOpen ? "nav__dropList close" : "nav__dropList"}>
              <p>Election Day Live Updates</p>
              <p>Post Election Analysis</p>
            </div>
          </div>
          <a href="#">
            {" "}
            <li className="nav__item">E-buddy</li>
          </a>
          <a href="#">
            <li className="nav__item">About Us</li>
          </a>
        </ul>
      </div>
      <div className="navbar__actions">
        <button className="navbar__btn login">Login</button>
        <button className="navbar__btn">Sign Up</button>
      </div>
    </div>
  );
}

export default NavBar;
