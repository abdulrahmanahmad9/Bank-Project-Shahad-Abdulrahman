import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import { removeToken } from "../api/Storge";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);

  const handleLogout = () => {
    removeToken();
    setUser(false);
  };

  return (
    <nav className="bg-green-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <span className="font-semibold text-xl text-white">THE BANK</span>
            </Link>
          </div>
          <div className="block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Transactions
              </NavLink>
              <NavLink
                to="/notes"
                className="text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Profile
              </NavLink>
              <NavLink
                to="/users"
                className="text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Users
              </NavLink>

              {user ? (
                <button
                  onClick={handleLogout}
                  className="text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
