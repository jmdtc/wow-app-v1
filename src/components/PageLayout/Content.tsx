import { FC } from "react"

const Content: FC = ({ children }) => {
    return (
        <div className="relative top-12">
            {children}
        </div>
    )
}


Content.displayName = "PageLayout.Content";

export default Content