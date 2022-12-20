import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  let auth = localStorage.getItem("user");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-between bg-gradient-to-r from-blue-500 to-blue-800 w-full py-6 text-white text-lg font-bold">
        <div className="text-3xl text-orange-600 font-bold float-left">
          <h2 className="p-1 bg-white rounded-full">LOGO</h2>
        </div>
        {auth ? 
        <ul className="flex ">
          <li className="mx-6 cursor-pointer hover:text-gray-300 duration-200">
            <Link to="/">Products</Link>
          </li>
          <li className="mx-6 cursor-pointer hover:text-gray-300 duration-200">
            <Link to="/Add"> Add Products</Link>{" "}
          </li>
          <li className="mx-6 cursor-pointer hover:text-gray-300 duration-200">
            <Link to="/Profile">Profile</Link>{" "}
          </li> 
            <li className="mx-6 cursor-pointer hover:text-gray-300 duration-200">
              
              <Link onClick={logout} to="/register">
                Logout
              </Link>
            </li></ul>
           : 
            <ul className="flex float-right">
              <li className="mx-6 cursor-pointer hover:text-gray-300 duration-200">
                
                <Link to="/register">SignUp</Link>
              </li>
              <li className="mx-6 cursor-pointer hover:text-gray-300 duration-200">
                
                <Link to="/login">Login</Link>
              </li>
            </ul>
          }
        
      </div>
    </>
  );
};

export default Header;
