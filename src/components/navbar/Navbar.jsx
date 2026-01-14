import React from "react";
import "./Navbar.css";
import { BiBell } from "react-icons/bi";

function Navbar() {
  return (
    <>
      <div className="navbar_panel">
        <div className="navbar_search">
          <input type="text" />
        </div>
        <div>
          <span className="notification">
            <BiBell />
          </span>
          <div className="navbar_user-panel">
            <div className="user-img">
              <img src="imgs/user.png" alt="" />
            </div>
            <h2>
              Abdumajidov O'tkirbek
              <span>Teacher</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
