import Box from "@mui/material/Box/Box"
import Button from "@mui/material/Button/Button"
import TextField from "@mui/material/TextField/TextField"
import MailIcon from '@mui/icons-material/Mail';
import PasswordIcon from '@mui/icons-material/Password';
import { useState } from "react";
import { useIsLogged } from "../store/useAuth";
import { loginFetcher } from "../services/loginFetcher";
import { Link } from "react-router-dom";


const Login = () => {

    const setIsLogged = useIsLogged(state => state.setIsLogged)

    const [emptyEmail, setEmptyEmail] = useState(false);
    const [emptyPassword, setEmptyPassword] = useState(false);

    const formHandle = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const email = ((e.target as HTMLFormElement)['input-email'] as HTMLInputElement);
        const password = ((e.target as HTMLFormElement)['input-password'] as HTMLInputElement);
        if (!email.value) {
            setEmptyEmail(true);
        } else {
            setEmptyEmail(false);
        };
        if (!password.value) {
            setEmptyPassword(true);
            return;
        } else {
            setEmptyPassword(false);
        };

        const data = {
            email: email.value,
            password: password.value,
        };

        await loginFetcher(data);
        setIsLogged();

    }

    return (
        <div className="mt-32">
            <form onSubmit={e => formHandle(e)} method="POST">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }} gap={3}>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <MailIcon color="success" sx={{ mr: 1, my: 0.5 }} />
                        <TextField color="success" id="input-email" name="input-email" label="Email" variant="standard" error={emptyEmail} />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <PasswordIcon color="success" sx={{ mr: 1, my: 0.5 }} />
                        <TextField type="password" color="success" id="input-password" name="input-password" label="Password" variant="standard" error={emptyPassword} />
                    </Box>

                    <Button type="submit" sx={{ mt: 3 }} variant="contained" color="success">Login</Button>
                    <code className="">Create a account <Link className="text-green-400" to="/signin">here</Link>.</code>
                </Box>
            </form>
        </div>
    )
}

export default Login
