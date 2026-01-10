import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role, allow }) {
  if (!role) {
    return <Navigate to="/login" replace />;
  }

  if (!allow.includes(role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
