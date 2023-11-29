import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const privateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default privateRoute;
