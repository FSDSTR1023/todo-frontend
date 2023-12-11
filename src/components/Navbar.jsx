import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import handleLogout from './LogOut';

const Navbar = () => {
  
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center">
        <div>
          <ul className="flex list-none m-0 p-0">
            <li className="mr-4">
              <Link to="/" className="text-white">Home</Link>
            </li>
            <li className="mr-4">
              <Link to="/tasks" className="text-white">Tasks</Link>
            </li>
            <li className="mr-4">
              <Link to="/newtask" className="text-white">New task</Link>
            </li>
          </ul>
        </div>
          {/* <div className="relative inline-block text-left">
            <button type="button" className="inline-flex w-full justify-center bg-gray-800 text-white py-2 px-4 rounded-md mr-4 flex items-center">
              <span className="mr-1">User Profile</span>
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg py-2focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div>  
                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left" role="menuitem" tabindex="-1" id="menu-item-0">My Profile</a>
                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left" role="menuitem" tabindex="-1" id="menu-item-1">My Tasks</a>
                {<a className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left" role="menuitem" tabindex="-1" id="menu-item-2" onClick={handleLogout}>Log Out</a>}
              </div>
            </div>
  </div> */}
            <h2 style={{ margin: 0 }}>
              <Link to="/signup">Sign up </Link>
              or
              <Link to="/login"> Log in</Link>
            </h2>
      </div>
    </nav>
  );
};

export default Navbar;