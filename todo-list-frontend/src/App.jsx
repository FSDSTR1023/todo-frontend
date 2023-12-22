import { BrowserRouter, Link, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import Tasks from './Tasks'
import CreateTask from './CreateTask';
import EditTask from './EditTask';

function App() {



  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/new" element={<CreateTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
