import React, { useContext } from "react";
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../Context/AuthProvider';
import useSeller from '../../hooks/useSeller';


const LayoutDashboard = () => {

  const {user} = useContext(AuthContext);  
  const [isAdmin] =useAdmin(user?.email);
  const [isSeller] =useSeller(user?.email);
  // const [isSeller] =useSeller(user?.email);
  

    return (
      <div>
        <Navbar></Navbar>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <li>
                <Link to="/dashboard/myproducts">My Orders</Link>{" "}
              </li>

              {isAdmin && (
                <>
                  <li>
                    <Link to="/dashboard/allUsers">All Users</Link>
                  </li>
                </>
              )}

              {isSeller && (
                <>
                  <li>
                    <Link to="/dashboard/ManageProduct">Add Product List</Link>
                    <Link to="/dashboard/addProduct">
                      Add Products
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default LayoutDashboard;