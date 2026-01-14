import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { BsTelegram, BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { renderData } from "../../services/webpages";
import { NavLink } from "react-router-dom";

function Sidebar({ role }) {
  return (
    <>
      <div className="panel_sidebar">
        <div className="sidebar_logo">
          <img src="imgs/logo iteach 1.png" alt="" />
        </div>
        <div className="panel_links">
          {renderData(role)?.map((item) => {
            return (
              <NavLink to={item?.path}>
                <span>{item?.icon && <item.icon />}</span>
                {item?.title}
              </NavLink>
            );
          })}
        </div>
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
