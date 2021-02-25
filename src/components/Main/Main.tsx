import { FC, ReactNode } from "react"

interface MainProps {
    children?: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
    return (
        <div className="relative ml-56 overflow-auto min-h-screen py-8 px-4">
            {children}
        </div>
    )
}

export default Main