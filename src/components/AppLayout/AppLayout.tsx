import { FC, ReactNode } from "react"
import { useDispatch } from "react-redux"

import SideBar from "../SideBar"
import Main from "../Main"

import {
    PageActions,
    setActivePage
} from "../../slices/navigation"

interface LayoutProps {
    pages: typeof PageActions;
    activePage: ReactNode;
}

const AppLayout: FC<LayoutProps> = ({ pages, activePage }) => {
    const dispatch = useDispatch()
    const { PROFILE, ...rest } = pages

    return (
        <div>
            <SideBar.Container>
                <SideBar.IconItem
                    imgSrc="https://img.rankedboost.com/wp-content/uploads/2019/05/WoW-Classic-Druid-Guide.png"
                    onClick={() => dispatch(setActivePage(PROFILE))}
                >
                    {PROFILE}
                </SideBar.IconItem>
                {Object.values(rest).map(page => (
                    <SideBar.Item
                        key={page}
                        onClick={() => dispatch(setActivePage(page))}
                    >
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