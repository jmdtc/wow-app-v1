import AppLayout from "./components/AppLayout/AppLayout"
import './styles/index.css'

const App: React.FC = () => {
    const pages = ["prout", "kikoo", "yolo"]
    return (
        <div className="h-screen box-border">
            <AppLayout pages={pages}/>
        </div>
    )
}

export default App