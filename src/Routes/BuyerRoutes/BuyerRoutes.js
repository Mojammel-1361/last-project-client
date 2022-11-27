// import React, { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../../Context/AuthProvider";

// import useBuyer from "../../hooks/useBuyer";

// const BuyerRoutes = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
//   const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
//   const location = useLocation();
//   if (loading || isBuyerLoading) {
//     return <progress className="progress w-full"></progress>;
//   }
//   if (user && isBuyer) {
//     return children;
//   }

//   return <Navigate to="/" state={{ from: location }} replace></Navigate>;
// };

// export default BuyerRoutes;
