import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { users } from "../../services/data";
import { FaClock } from "react-icons/fa";
import { PiLockFill } from "react-icons/pi";

function Login({ role, setRole }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      (event) => event.username === login && event.password === password
    );

    if (!user) {
      toast.error("Login yoki parol xato");
      return;
    } else {
      toast.success("Hush kelibsiz");
    }

    setRole(user.role);
  };

  // 🔥 MANA SHU YER
  useEffect(() => {
    if (!role) return;

    if (role === "admin" || role === "manager") {
      navigate("/", { replace: true });
    }

    if (role === "teacher") {
      navigate("/teacher/dashboard", { replace: true });
    }

    if (role === "student") {
      navigate("/student/dashboard", { replace: true });
    }
  }, [role, navigate]);

  return (
    <>
      <div className="pages_bg">
        <div className="pages_login displays">
          <div className="pages_login-picture">
            <img src="/imgs/logo iteach 1.png" alt="" />
          </div>
          <form
            className="pages_login-forms"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <h1>Tizimga kirish</h1>
            <div className="login-forms_toFill">
              <label htmlFor="">Loginni kiriting:</label>
              <input
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Login..."
              />
            </div>
            <PiLockFill style={{color:"red"}} />
            <div className="login-forms_toFill">
              <label htmlFor="">Parolni kiriting:</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Parol..."
                type="password"
              />
            </div>
            <button>Sign in</button>
            <FaClock />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
