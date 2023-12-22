import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Navbar from "./components/Navbar";
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TaskPage from './pages/TaskPage';
import CreateTask from './pages/CreateTask';

function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [idTask, setIdTask] = useState('');


  return (
    <Router>
      <Navbar setUser={setUser} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage setUser={setUser} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/login" element={<LoginPage setUser={setUser} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/addTask" element={<CreateTask user={user} />} />
        <Route path="/tasks" element={<TaskPage setIdTask={setIdTask} />} />
        <Route path="/editTask/:id" element={<CreateTask user={user} idTask={idTask} />} />
      </Routes>
    </Router>
  )
}

export default App;
