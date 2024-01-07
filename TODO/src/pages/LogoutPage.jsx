import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function LogoutPage ({ setUser }) {
  const navigate = useNavigate()
  const logoutHandler = () => {
    window.localStorage.removeItem('token')
    setUser(null)
    navigate('/login')
  }
  useEffect(() => {
    logoutHandler()
  }, [])
  return (
    <>
    </>
  )
}
