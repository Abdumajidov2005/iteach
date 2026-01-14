import React from "react";
import "./Sidebar.css";
import { FiSun } from "react-icons/fi";
import { BsMoonStars, BsTelegram, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";

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
        <div className="panel_social">
          <span>
            <FaInstagram />
          </span>
          <span>
            <BsTelegram />
          </span>
          <span>
            <BsYoutube />
          </span>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
