import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CreateTaskPage from './pages/CreateTaskPage';
import TaskPage from './pages/TaskPage';
function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tasks, setTasks] = useState(null);

  return (
    <Router>
      <NavBar
        setUser={setUser}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/register'
          element={
            <RegisterPage
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              setUser={setUser}
            />
          }
        />
        <Route
          path='/login'
          element={
            <LoginPage
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              setUser={setUser}
            />
          }
        />
        <Route
          path={isAuthenticated ? '/add-task' : '/login'}
          element={
            <CreateTaskPage
              user={user}
              isAuthenticated={isAuthenticated}
              tasks={tasks}
              setTasks={setTasks}
            />
          }
        />
        <Route
          path='/add-task/:id'
          element={
            <CreateTaskPage
              user={user}
              isAuthenticated={isAuthenticated}
              tasks={tasks}
              setTasks={setTasks}
            />
          }
        />
        <Route
          path={isAuthenticated ? '/task' : '/login'}
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