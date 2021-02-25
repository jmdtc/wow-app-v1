import { FC, ReactNode } from "react"
import { useDispatch } from "react-redux"

import {
    Home,
    HomeFilled,
    Rocket,
    RocketFilled,
    Roster,
    RosterFilled,
    Dollar,
    DollarFilled,
} from "../../icons/SideBar/"
import SideBar from "../SideBar"
import Main from "../Main"

import {
    PageActions,
    setActivePage
} from "../../slices/navigation"

interface LayoutProps {
    pages: typeof PageActions;
    activePage: ReactNode;
    activePageName: string;
}

interface PageObject {
    name: string;
    icon: ReactNode;
    iconSelected: ReactNode;
}

const mapIconsToPages = function (pages: typeof PageActions): (PageObject | null)[] {
    const iconClassName = "w-sidebar-icon"
    return Object
        .values(pages)
        .map(page => {
            switch (page) {
                case "homepage":
                    return {
                        name: page,
                        icon: <Home fill="white" stroke="white" className={iconClassName} />,
                        iconSelected: <HomeFilled fill="white" stroke="white" className={iconClassName} />
                    }
                case "boosts":
                    return {
                        name: page,
                        icon: <Rocket fill="white" stroke="white" className={iconClassName} />,
                        iconSelected: <RocketFilled fill="white" stroke="white" className={iconClassName} />
                    }
                case "roster":
                    return {
                        name: page,
                        icon: <Roster fill="white" stroke="white" className={iconClassName} />,
                        iconSelected: <RosterFilled fill="white" stroke="white" className={iconClassName} />
                    }
                case "bank":
                    return {
                        name: page,
                        icon: <Dollar fill="white" stroke="white" className={iconClassName} />,
                        iconSelected: <DollarFilled fill="white" stroke="white" className={iconClassName} />
                    }
                default:
                    return null
            }
        })
}

const AppLayout: FC<LayoutProps> = ({ pages, activePage, activePageName }) => {
    const dispatch = useDispatch()
    const pagesWithIcons = mapIconsToPages(pages)

    return (
        <div>
            <SideBar.Container selectedPage={activePageName}>
                <SideBar.ImageItem
                    imgSrc="https://img.rankedboost.com/wp-content/uploads/2019/05/WoW-Classic-Druid-Guide.png"
                    onClick={() => dispatch(setActivePage(pages.PROFILE))}
                    key={pages.PROFILE}
                >
                    {pages.PROFILE}
                </SideBar.ImageItem>
                {pagesWithIcons.map(page => {
                    if (page === null) return null
                    return (
                        <SideBar.Item
                            key={page.name}
                            onClick={() => dispatch(setActivePage(page.name))}
                        >
                            {activePageName === page.name ? page.iconSelected : page.icon}
                            <span className="ml-2.5">{page.name}</span>
                        </SideBar.Item>
                    )
                })}
            </SideBar.Container>
            <Main>
                {activePage}
            </Main>
        </div>
    )
}

export default AppLayout