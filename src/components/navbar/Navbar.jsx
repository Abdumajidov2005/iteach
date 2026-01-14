import React from "react";
import "./Navbar.css";
import { BiBell, BiSearch } from "react-icons/bi";

function Navbar() {
  return (
    <>
      <div className="navbar_panel">
        <form className="navbar_search">
          <label htmlFor="search">
            <BiSearch />
          </label>
          <input id="search" type="text" placeholder="Qidiruv" />
          <button>Search</button>
        </form>
        <div className="navbar_content">
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
