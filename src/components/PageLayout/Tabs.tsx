import { FC } from "react"

const Tabs: FC = ({ children }) => {
    return (
        <div className="absolute top-0 left-0 w-full shadow">
            {children}
        </div>
    )
}


Tabs.displayName = "PageLayout.Tabs";

export default Tabs