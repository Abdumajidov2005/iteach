import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Leaderboard from "../leaderboard/Leaderboard";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Login from "../login/Login";
import ProtectedRoute from "../../components/protectedRoute/ProtectedRoute";
import { ROLES } from "../../services/data";
import { ToastContainer } from "react-toastify";
import Courses from "../courses/Courses";
import Groups from "../groups/Groups";
import Users from "../users/Users";

function RouterDom() {
  const [role, setRole] = useState(null);
  const [user, setUser] = useState(null);

  // Agar localStorage-da token bo‘lsa, page refreshdan keyin tiklash
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedRole) setRole(storedRole.trim().toLowerCase());
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

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
        {role && <Sidebar role={role} user={user} />}
        <div className="panel_body">
          {role && <Navbar role={role} setRole={setRole} user={user} />}

          <Routes>
            {/* PUBLIC ROUTE */}
            <Route
              path="/login"
              element={
                role ? (
                  <Navigate to="/" replace />
                ) : (
                  <Login setRole={setRole} setUser={setUser} />
                )
              }
            />

            {/* PROTECTED ROUTES */}
            <Route
              path="/"
              element={
                <ProtectedRoute
                  role={role}
                  allow={[ROLES.admin, ROLES.manager]}
                >
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/users-add"
              element={
                <ProtectedRoute
                  role={role}
                  allow={[
                    ROLES.admin,
                    ROLES.manager,
                    ROLES.teacher,
                    ROLES.student,
                  ]}
                >
                  <Users />
                </ProtectedRoute>
              }
            />

            <Route
              path="/courses"
              element={
                <ProtectedRoute
                  role={role}
                  allow={[
                    ROLES.admin,
                    ROLES.manager,
                    ROLES.teacher,
                    ROLES.student,
                  ]}
                >
                  <Courses />
                </ProtectedRoute>
              }
            />

            <Route
              path="/groups"
              element={
                <ProtectedRoute
                  role={role}
                  allow={[
                    ROLES.admin,
                    ROLES.manager,
                    ROLES.teacher,
                    ROLES.student,
                  ]}
                >
                  <Groups />
                </ProtectedRoute>
              }
            />
            <Route
              path="/leaderboard"
              element={
                <ProtectedRoute
                  role={role}
                  allow={[
                    ROLES.admin,
                    ROLES.manager,
                    ROLES.teacher,
                    ROLES.student,
                  ]}
                >
                  <Leaderboard />
                </ProtectedRoute>
              }
            />

            {/* Catch-all: agar route topilmasa loginga yo‘naltirish */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default RouterDom;
