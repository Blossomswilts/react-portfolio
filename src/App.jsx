import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Nav";
import "../src/styles/App.css";

function App() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <Navigation />
            <main className="mx-3">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
