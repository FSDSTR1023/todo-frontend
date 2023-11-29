import React from 'react';
import Home from "./Home";
import getTasks from "../../api/Tasks";
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";


const Navbar = () => {
  return (
    <BrowserRouter>
      <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px 20px', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width:'100%' }}>
          <div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
              <li style={{ marginRight: '20px' }}>
                <Link to="/">Home</Link>
              </li>
              <li style={{ marginRight: '20px' }}>
                <Link to="/tasks">Tasks</Link>
              </li>
              <li style={{ marginRight: '20px' }}>
                <a href="#services" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 style={{ margin: 0 }}>Sign up or Log in</h2>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;
