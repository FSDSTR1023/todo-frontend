import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px 20px', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
            <li style={{ marginRight: '20px' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ marginRight: '20px' }}>
              <Link to="/tasks">Tasks</Link>
            </li>
            <li style={{ marginRight: '20px' }}>
              <Link to="/newtask">New task</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 style={{ margin: 0 }}>Sign up or Log in</h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;