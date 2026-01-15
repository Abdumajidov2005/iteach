import React from "react";
import "./Sidebar.css";
import { BsTelegram, BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { renderData } from "../../services/webpages";
import { NavLink } from "react-router-dom";

function Sidebar({ role }) {
  const normalizedRole = role?.trim().toLowerCase();

  return (
    <div className="panel_sidebar">
      <div className="sidebar_logo">
        <img src="imgs/logo iteach 1.png" alt="Logo" />
      </div>

      <div className="panel_links">
        {renderData(normalizedRole)?.map((item, index) => {
          const Icon = item.icon;
          return (
            <NavLink key={index} to={item?.path}>
              <span>{Icon && <Icon />}</span>
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
  );
}

export default Sidebar;
