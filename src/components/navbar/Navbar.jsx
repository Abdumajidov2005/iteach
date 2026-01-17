import React, { useState } from "react";
import "./Navbar.css";
import { BiBell, BiSearch } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";

function Navbar({ role, setRole, user }) {

  console.log(user);
  
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const getRoleName = (role) => {
    const normalizedRole = role?.trim().toLowerCase();
    switch (normalizedRole) {
      case "admin":
        return "Administrator";
      case "manager":
        return "Meneger";
      case "teacher":
        return "Ustoz";
      case "student":
        return "O'quvchi";
      default:
        return normalizedRole;
    }
  };

  const logOutAcc = () => {
    setOpenModal(false);
    setRole(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <div className="navbar_panel">
      <form className="navbar_search">
        <label htmlFor="search">
          <BiSearch />
        </label>
        <input id="search" type="text" placeholder="Search..." />
        <button>Search</button>
      </form>

      <div className="navbar_content">
        <span className="notification">
          <BiBell />
        </span>

        <div
          onClick={() => setOpenModal(true)}
          className={`navbar_user-panel ${openModal ? "active" : ""}`}
        >
          <div className="user-img">
            <img src="imgs/user.png" alt="" />
          </div>
          <h2>
            {user?.fullName || "Foydalanuvchi"}
            <span>{getRoleName(role)}</span>
          </h2>
        </div>

        <div className="navbar_modal">
          <div className="modal_title">
            <div className="modal_title-user">
              <div className="modal_user-img">
                <img src="imgs/user.png" alt="" />
              </div>
              <h2>{user?.fullName || "Foydalanuvchi"}</h2>
            </div>
            <p onClick={() => setOpenModal(false)} className="exit_modal">
              <FaXmark />
            </p>
          </div>

          <div className="modal_content">
            {(role === "admin" || role === "manager") && (
              <Link>
                <FaUserEdit />
                Accauntni tahrirlash
              </Link>
            )}
            <Link onClick={logOutAcc}>
              <IoExitOutline />
              Accauntdan chiqish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
