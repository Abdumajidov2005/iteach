import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { users } from "../../services/data";
import { FaLock, FaRegEye, FaRegEyeSlash, FaUserAlt } from "react-icons/fa";

function Login({ role, setRole }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [watchPassword, setWatchPassword] = useState(false);
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
              <label htmlFor="logins">Loginni kiriting:</label>
              <div className="form_inputs">
                <span className="login-forms_toFill_locking displays_center">
                  <FaUserAlt />
                </span>
                <input
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  placeholder="Login..."
                  id="logins"
                />
              </div>
            </div>
            <div className="login-forms_toFill">
              <label htmlFor="passwords">Parolni kiriting:</label>
              <div className="form_inputs">
                <span className="login-forms_toFill_locking displays_center">
                  <FaLock />
                </span>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Parol..."
                  id="passwords"
                  type={watchPassword ? "text" : "password"}
                />
                <span
                  className="form_inputs-eyes displays_center"
                  onClick={() => {
                    setWatchPassword((prev) => !prev);
                  }}
                >
                  {watchPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>
            </div>
            <button>Sign in</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
