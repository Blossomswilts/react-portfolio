import Footer from "./components/Footer";
import Navigation from "./components/Nav";
import { Outlet } from "react-router-dom";
import ParticleBackground from "./components/PatricleBackground";
import "../src/styles/App.css";

function App() {
    return (
        <>
            <ParticleBackground />
            <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
                <Navigation />
                <main className="mx-3" style={{ height: "70vh" }}>
                    <Outlet />
                </main>
                <Footer style={{ height: "30vh" }} />
            </div>
        </>
    );
}

export default App;
