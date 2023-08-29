import Footer from "./components/Footer";
import Navigation from "./components/Nav";
import { Outlet } from "react-router-dom";
import ParticleBackground from "./components/PatricleBackground";
import "../src/styles/app.css";

function App() {
    return (
        <>
            <ParticleBackground />
            <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
                <Navigation />
                <main className="mx-3" >
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
