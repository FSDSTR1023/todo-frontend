import { ReactNode } from "react"
import Footer from "../components/Footer"


interface Props {
    children: ReactNode | ReactNode[],
    navBar: ReactNode,
    title?: string,
}

const MainLayout = ({ navBar, children }: Props) => {
    return (
        <div className="min-h-screen p-5 relative">
            <div className="absolute inset-x-0 top-0">
                {navBar}
            </div>
            <div className="h-full grid place-items-center">
                {/* <div className="h-full flex justify-center items-center"> */}
                {children}
            </div>
            <div className="absolute inset-x-0 bottom-0">
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout