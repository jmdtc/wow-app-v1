import AppLayout from "./components/AppLayout/AppLayout"
import './styles/index.css'

const App: React.FC = () => {
    const pages = ["Homepage", "Boosts", "Roster", "Bank"]
    return (
        <div className="h-screen box-border">
            <AppLayout pages={pages}/>
        </div>
    )
}

export default App