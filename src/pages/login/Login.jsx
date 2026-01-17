import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaLock, FaRegEye, FaRegEyeSlash, FaUserAlt } from "react-icons/fa";
import { ROLES } from "../../services/data";
import { baseUrl } from "../../services/config";
import { jwtDecode } from "jwt-decode";

function Login({ setRole, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [watchPassword, setWatchPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      // 🔹 x-www-form-urlencoded format
      const data = new URLSearchParams();
      data.append("grant_type", "password");
      data.append("username", username);
      data.append("password", password);
      data.append("scope", "");
      data.append("client_id", username); // backenddan olingan
      data.append("client_secret", username); // backenddan olingan

      const response = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data,
      });

      const result = await response.json();
      console.log("Server javobi:", result);

      if (!response.ok) {
        toast.error(
          result.error_description || result.message || "Login yoki parol xato"
        );
        return;
      }

      const accessToken = result.access_token;
      if (!accessToken) {
        toast.error("Token olinmadi!");
        return;
      }

      // 🔹 Tokenni saqlash
      localStorage.setItem("token", accessToken);

      // 🔹 User va role
      console.log(result);

      const decoded = jwtDecode(result.access_token);

      console.log(decoded);

      const userData = {
        fullName: decoded.login || username,
        role: decoded.role,
      };
      setUser(userData);
      setRole(userData.role);

      localStorage.setItem("role", userData.role);
      localStorage.setItem("user", JSON.stringify(userData));

      toast.success("Hush kelibsiz!");

      // 🔹 Role-based navigation
      if (userData.role === ROLES.admin || userData.role === ROLES.manager) {
        navigate("/admin/dashboard", { replace: true });
      } else if (userData.role === ROLES.teacher) {
        navigate("/teacher/dashboard", { replace: true });
      } else if (userData.role === ROLES.student) {
        navigate("/student/dashboard", { replace: true });
      }
    } catch (error) {
      console.error(error);
      toast.error("Xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pages_bg">
      <div className="pages_login displays">
        <div className="pages_login-picture">
          <img src="/imgs/logo iteach 1.png" alt="Logo" />
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                onClick={() => setWatchPassword((prev) => !prev)}
              >
                {watchPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Kirish..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
