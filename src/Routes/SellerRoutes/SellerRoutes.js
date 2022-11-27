import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

import useSeller from "../../hooks/useSeller";

const SellerRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();
  if (loading || isSellerLoading) {
    return <progress className="progress w-full"></progress>;
  }
  if (user && isSeller) {
    return children;
  }

  return (
    <Navigate to="/" state={{ from: location }} replace></Navigate>
  );
};

export default SellerRoutes;
