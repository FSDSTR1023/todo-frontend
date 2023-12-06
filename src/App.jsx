import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import { HomePage } from './pages/HomePage.jsx'
import { LoginPage } from './pages/LoginPage'
import { Navbar } from './components/Navbar'
import { RegisterPage } from './pages/RegisterPage'
import { TaskPage } from './pages/TaskPage.jsx'
// import { getAllTasks } from '@/api/task'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/login'
          element={<LoginPage />}
        />
        <Route
          path='/register'
          element={<RegisterPage />}
        />
        <Route
          path='/tasks'
          element={<TaskPage />}
        />
      </Routes>
    </Router>
  )
}

export default App
