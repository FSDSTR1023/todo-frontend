import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage.jsx'
import { LoginPage } from './pages/LoginPage'
import { Navbar } from './components/Navbar'
import { RegisterPage } from './pages/RegisterPage'
import { TaskPage } from './pages/TaskPage.jsx'
import { useEffect, useState } from 'react'
import { AccountPage } from './pages/AccountPage.jsx'
import { LogoutPage } from './pages/LogoutPage.jsx'
import { validateUser } from './api/user.js'

function App () {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    console.log(token)
    if (token) {
      validateUser({ token }).then((json) => {
        if (json._id) {
          setUser(json)
        }
      })
    } else {
      setUser(null)
    }
  }, [])
  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route
          path='/'
          element={<HomePage user={user} />}
        />
        <Route
          path='/login'
          element={<LoginPage setUser={setUser} />}
        />
        <Route
          path='/register'
          element={<RegisterPage setUser={setUser} />}
        />
        <Route
          path='/tasks'
          element={<TaskPage user={user} />}
        />
        <Route
          path='/account'
          element={<AccountPage user={user} />}
        />
        <Route
          path='/logout'
          element={<LogoutPage setUser={setUser} />}
        />
      </Routes>
    </Router>
  )
}

export default App
