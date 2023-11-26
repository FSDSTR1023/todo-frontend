import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
    isLogged: boolean;
    children?: ReactNode | ReactNode[];
    redirectTo?: string;
}

const ProtectRoute = ({ isLogged, children, redirectTo = '/login' }: Props) => {

    if (!isLogged) {
        return <Navigate to={redirectTo} />
    }

    return children || <Outlet />;

}

export default ProtectRoute