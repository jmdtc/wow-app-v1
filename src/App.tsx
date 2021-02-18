//import Homepage from "./pages/Homepage"
import Boosts from "./pages/Boosts"

import AppLayout from "./components/AppLayout/AppLayout"

import './styles/index.css'

const App: React.FC = () => {
    const pages = ["Homepage", "Boosts", "Roster", "Bank"]
    const activePage = <Boosts />
    return (
        <div className="h-screen box-border">
            <AppLayout
                pages={pages}
                activePage={activePage}
            />
        </div>
    )
}

export default App