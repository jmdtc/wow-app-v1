import { FC, ReactNode } from "react"
import SideBar from "../SideBar"
import Main from "../Main"

interface LayoutProps {
    pages: string[];
    activePage: ReactNode;
}

const AppLayout: FC<LayoutProps> = ({ pages, activePage }) => {
    return (
        <div>
            <SideBar.Container>
                <SideBar.IconItem
                    imgSrc="https://img.rankedboost.com/wp-content/uploads/2019/05/WoW-Classic-Druid-Guide.png"
                >
                    My Name
                </SideBar.IconItem>
                {pages.map(page => (
                    <SideBar.Item key={page}>
                        {page}
                    </SideBar.Item>
                ))}
            </SideBar.Container>
            <Main>
                {activePage}
            </Main>
        </div>
    )
}

export default AppLayout