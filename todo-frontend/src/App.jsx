import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


function App () {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  return( 
  
    <Router>

      <Navbar 
      user={user} 
      isAuthenticated={isAuthenticated} 
      />

      <Routes>

        <Route path="/" 
        element={<HomePage />} 
        />

        <Route path="/register" 
        element={<RegisterPage />} 
        />

        <Route path="/login" 
        element={<LoginPage />} 
        />

      </Routes>

    </Router>

  );
  }

  export default App;