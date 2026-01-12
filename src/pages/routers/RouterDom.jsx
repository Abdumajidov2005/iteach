import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Leaderboard from "../leaderboard/Leaderboard";
import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/Footer";
import Login from "../login/Login";
import { ROLES } from "../../services/data";
import ProtectedRoute from "../../components/protectedRoute/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import Sidebar from "../../components/sidebar/Sidebar";

function RouterDom() {
  const [role, setRole] = useState(null);

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="main_panel">
        {role && <Sidebar />}
        <div className="panel_body">
          {role && <Navbar />}
          <Routes>
            {/* PUBLIC */}
            <Route
              path="/login"
              element={<Login role={role} setRole={setRole} />}
            />

            {/* PROTECTED */}
            <Route
              path="/"
              element={
                <ProtectedRoute
                  role={role}
                  allow={[ROLES.ADMIN, ROLES.MANAGER]}
                >
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/leaderboard"
              element={
                <ProtectedRoute
                  role={role}
                  allow={[ROLES.ADMIN, ROLES.MANAGER, ROLES.TEACHER]}
                >
                  <Leaderboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        {/* {role && <Footer />} */}
      </div>
    </BrowserRouter>
  );
}

export default RouterDom;
