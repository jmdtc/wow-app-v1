import { FC } from "react"

import Tabs from "./Tabs"
import Content from "./Content"

type PageLayout = {
    Tabs: typeof Tabs;
    Content: typeof Content;
}
const Container: FC & PageLayout = ({ children }) => {
    return (
        <div className="h-full">
            {children}
        </div>
    )
}

Container.Tabs = Tabs;
Container.Content = Content;

export default Container