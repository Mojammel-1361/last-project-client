import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/SingUp/SingUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import CategoryItems from "../../Pages/CategoryItems/CategoryItems";
import LayoutDashboard from "../../Layout/LayoutDashboard/LayoutDashboard";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import ManageProduct from "../../Pages/Dashboard/ManageProduct/ManageProduct";
import SellerRoutes from "../SellerRoutes/SellerRoutes";
import Payment from "../../Pages/Dashboard/Payment/Payment";
// import BuyerRoutes from "../BuyerRoutes/BuyerRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/categoryItems/:id",
        element: <CategoryItems></CategoryItems>,
        loader: ({ params }) =>
          fetch(
            `https://resale-market-server-green.vercel.app/categoryOptions/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <LayoutDashboard></LayoutDashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <SellerRoutes>
            <AddProduct></AddProduct>
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/ManageProduct",
        element: (
          <SellerRoutes>
            <ManageProduct></ManageProduct>
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://resale-market-server-green.vercel.app/addCards/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
