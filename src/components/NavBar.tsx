import Button from "@mui/material/Button/Button";
import ButtonGroup from "@mui/material/ButtonGroup/ButtonGroup";
import Box from "@mui/material/Box/Box";
import { NavLink } from "react-router-dom";
import { logout } from "../services/logout";
import { useIsLogged } from "../store/useAuth";

const NavBar = () => {

  const [isLogged, setIsLogged] = useIsLogged(state => [state.isLogged, state.setIsLogged])

  const logoutHandle = () => {
    logout()
    setIsLogged()
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end',
      '& > *': {
        m: 1,
      },
    }} >
      <ButtonGroup variant="text" color="success">
        {
          isLogged ?
            <NavLink to='/'>
              <Button>Dashboard</Button>
            </NavLink>
            :
            <NavLink to='/login'>
              <Button>Login</Button>
            </NavLink>
        }
        {
          isLogged && <Button onClick={logoutHandle}>Logout</Button>
        }



      </ButtonGroup>
    </Box>
  )
}

export default NavBar