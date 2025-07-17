import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/ui/Loading";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user && user?.email) {
    return children; // ✅ correct way to return protected content
  }

  return <Navigate state={location.pathname} to="/auth/login" />;
};

export default PrivateRoute;
