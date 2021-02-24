import { ReactNode } from "react"
import { useSelector } from "react-redux"

import Homepage from "./pages/Homepage"
import Boosts from "./pages/Boosts"
import Roster from "./pages/Roster"
import Bank from "./pages/Bank"


import AppLayout from "./components/AppLayout/AppLayout"

import {
    PageActions,
    selectActivePage
} from "./slices/navigation"

import './styles/index.css'

const instantiatePageComponent = function (pageName: string): ReactNode {
    switch (pageName) {
        case "homepage":
            return <Homepage />
        case "boosts":
            return <Boosts />
        case "roster":
            return <Roster />
        case "bank":
            return <Bank />
        default:
            return null
    }
}

const App: React.FC = () => {
    const activePageName = useSelector(selectActivePage)

    return (
        <div className="h-screen box-border">
            <AppLayout
                pages={PageActions}
                activePageName={activePageName}
                activePage={instantiatePageComponent(activePageName)}
            />
        </div>
    )
}

export default App