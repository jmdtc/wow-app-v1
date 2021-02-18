import { FC, ReactNode } from "react"

interface MainProps {
    children?: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
    return (
        <div className="ml-56 overflow-auto py-8 px-4">
            {children}
        </div>
    )
}

export default Main