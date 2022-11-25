import { createBrowserRouter }  from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/SingUp/SingUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import CategoryItems from "../../Pages/CategoryItems/CategoryItems";



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
        loader: ({ params }) => fetch(`http://localhost:5000/categoryOptions/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;;