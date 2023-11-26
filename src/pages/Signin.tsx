import Box from "@mui/material/Box/Box"
import TextField from "@mui/material/TextField/TextField"
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import PasswordIcon from '@mui/icons-material/Password';
import Button from "@mui/material/Button/Button";
import { useState } from "react";
import { createUser } from "../services/createUser";
import { useIsLogged } from "../store/useAuth";

const Singin = () => {

    const [name, setName] = useState(false);
    const [surname, seturname] = useState(false);
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const [repassword, setRepassword] = useState(false);
    const [matchPassword, setMatchPassword] = useState(true);
    const [errors, setErrors] = useState({
        error: false,
        errors: [{
            location: "",
            msg: "",
            path: "",
            type: "",
            value: ""
        }]
    });

    const setIsLogged = useIsLogged(state => state.setIsLogged);

    const formHandle = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const name = ((e.target as HTMLFormElement)['input-name'] as HTMLInputElement);
        const surname = ((e.target as HTMLFormElement)['input-surname'] as HTMLInputElement);
        const email = ((e.target as HTMLFormElement)['input-email'] as HTMLInputElement);
        const password = ((e.target as HTMLFormElement)['input-password'] as HTMLInputElement);
        const repassword = ((e.target as HTMLFormElement)['input-repassword'] as HTMLInputElement);

        if (!name.value) {
            setName(true);
        } else {
            setName(false)
        }
        if (!surname.value) {
            seturname(true);
        } else {
            seturname(false)
        }
        if (!email.value) {
            setEmail(true);
        } else {
            setEmail(false)
        }
        if (!password.value) {
            setPassword(true);
        } else {
            setPassword(false)
        }
        if (!repassword.value) {
            setRepassword(true);
            return;
        } else {
            setRepassword(false)
        }

        if (password.value !== repassword.value) {
            setPassword(true);
            setRepassword(true);
            setMatchPassword(false);
            return;
        } else {
            setPassword(false);
            setRepassword(false);
            setMatchPassword(true);
        }

        const data = {
            name: name.value,
            surname: surname.value,
            email: email.value,
            password: password.value,
        }

        const newUser = await createUser(data);
        if (newUser.error) {
            setErrors(newUser);
            return
        }
        setIsLogged();
        console.log(newUser);

    }

    return (
        <div className="mt-32">
            <form onSubmit={formHandle} method="POST">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }} gap={3}>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle color="success" sx={{ mr: 1, my: 0.5 }} />
                        <TextField color="success" id="input-name" name="input-name" label="Nombre" variant="standard" error={name} />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle color="success" sx={{ mr: 1, my: 0.5 }} />
                        <TextField color="success" id="input-surname" name="input-surname" label="Apellido" variant="standard" error={surname} />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <MailIcon color="success" sx={{ mr: 1, my: 0.5 }} />
                        <TextField color="success" id="input-email" name="input-email" label="Email" variant="standard" error={email} />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <PasswordIcon color="success" sx={{ mr: 1, my: 0.5 }} />
                        <TextField type="password" color="success" id="input-password" name="input-password" label="Password" variant="standard" error={password} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <PasswordIcon color="success" sx={{ mr: 1, my: 0.5 }} />
                        <TextField type="password" color="success" id="input-repassword" name="input-repassword" label="Repeat password" variant="standard" error={repassword} />
                    </Box>
                    <Button type="submit" sx={{ mt: 3 }} variant="contained" color="success">Singin</Button>

                </Box>
                {
                    errors.error && errors.errors.map((e, i) => <code key={i + e.msg} className="text-red-700">{e.msg}</code>)
                }
                {
                    matchPassword || <code className="text-red-700">Las contraseñas no coinciden</code>
                }
            </form>
        </div>
    )
}

export default Singin