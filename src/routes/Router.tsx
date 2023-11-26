import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoApp from "../pages/Dashboard";
import Singin from "../pages/Signin";
import Error from "../pages/Error";
import NavBar from "../components/NavBar";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import ProtectRoute from "../components/ProtectRoute";
import { useEffect } from "react";
import { getUserInfo } from "../services/getUserInfo";
import { useIsLogged } from "../store/useAuth";

export const Router = () => {

    const [isLogged, setIsLogged] = useIsLogged(state => [state.isLogged, state.setIsLogged]);

    useEffect(() => {
        (async () => {
            await getUserInfo()
            setIsLogged()
        })()
    }, [isLogged])

    return (
        <BrowserRouter>
            <MainLayout navBar={<NavBar />}>
                <Routes>
                    <Route element={<ProtectRoute isLogged={!isLogged} redirectTo="/" />}>
                        <Route path="/signin" element={<Singin />} />
                        <Route path="/login" element={<Login />} />
                    </Route>
                    <Route element={<ProtectRoute isLogged={isLogged} />}>
                        <Route path="/" element={<TodoApp />} />
                    </Route>
                    <Route path="/*" element={<Error />} />
                </Routes>
            </MainLayout>

        </BrowserRouter>
    );
}