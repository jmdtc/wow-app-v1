import { FC } from "react"
import SideBar from "../SideBar"
import Main from "../Main"

interface LayoutProps {
    pages: string[];
}

const AppLayout: FC<LayoutProps> = ({ pages }) => {
    return (
        <div className="flex">
            <SideBar.Container>
                <SideBar.PictureItem
                    imgSrc="https://img.rankedboost.com/wp-content/uploads/2019/05/WoW-Classic-Druid-Guide.png"
                >
                    My Name
                </SideBar.PictureItem>
                {pages.map(page => (
                    <SideBar.Item key={page}>
                        {page}
                    </SideBar.Item>
                ))}
            </SideBar.Container>
            <Main />
        </div>
    )
}

export default AppLayout