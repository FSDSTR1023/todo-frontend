import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreateTask from "./pages/CreateTask";
import TaskPages from "./pages/TaskPages";



function App () {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [tasks, setTasks] = useState();
  return( 
  
    <Router>

      <Navbar 
      user={user} 
      isAuthenticated={isAuthenticated} 
      setIsAutenticated={setisAuthenticated} 
      />

      <Routes>

        <Route path="/" 
        element={<HomePage />} 
        />

        <Route path="/register" 
        element={<RegisterPage />} 
        />

        <Route path="/login" 
        element={
        <LoginPage
          isAuthenticated={isAuthenticated}
          setisAuthenticated={setisAuthenticated}
          setUser={setUser}          
        />} 
        />

        <Route path="/add-task" 
        element={
        <CreateTask 
          user={user} 
          isAuthenticated={isAuthenticated} 
          tasks={tasks} 
          setTasks={setTasks} 
           
        />} 
        />

        <Route path="/task" 
        element={
        <TaskPages
          user={user} 
          isAuthenticated={isAuthenticated}
          tasks={tasks} 
          setTasks={setTasks}           
        />} 
        />

      </Routes>

    </Router>

  );
  }

  export default App;