import React from "react";
import "./Sidebar.css";
import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";

function Sidebar() {
  return (
    <>
      <div className="panel_sidebar">
        <div className="sidebar_logo">
          <img src="imgs/logo iteach 1.png" alt="" />
        </div>
        <ul className="panel_links">
          <li>Dashboard</li>
          <li>Dashboard</li>
          <li>Dashboard</li>
          <li>Dashboard</li>
          <li>Dashboard</li>
          <li>Dashboard</li>
          <li>Dashboard</li>
          <li>Dashboard</li>
          <li>Dashboard</li>
          <li>Dashboard</li>
          <li>Dashboard</li>
          <li>Dashboard</li>
          <li>Dashboard</li>
          <li>Dashboard</li>
        </ul>
        <div className="panel_darkMode">
          <span>
            <FiSun />
          </span>
          <span>
            <BsMoonStars />
          </span>
          <h1>Light</h1>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
