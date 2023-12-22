import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreateTask from "./pages/CreateTask";
import TaskPage from "./pages/TaskPage";

function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tasks, setTasks] = useState(null);

  return (
    <Router>
      <Navbar user={user} isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RegisterPage
              isAuthenticated={isAuthenticated}
              setIsAuthenticted={setIsAuthenticated}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage
              isAuthenticated={isAuthenticated}
              setIsAuthenticted={setIsAuthenticated}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/add-task"
          element={
            <CreateTask
              user={user}
              isAuthenticated={isAuthenticated}
              tasks={tasks}
              setTasks={setTasks}
            />
          }
        />
        <Route
          path="/task"
          element={
            <TaskPage
              user={user}
              isAuthenticated={isAuthenticated}
              tasks={tasks}
              setTasks={setTasks}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
