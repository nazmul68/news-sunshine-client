import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
/**
 * only allow authenticated user to visit
 *
 **/
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  let location = useLocation();
  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
