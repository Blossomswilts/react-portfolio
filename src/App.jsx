import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import ParticleBackground from "./components/PatricleBackground";
import "../src/styles/app.css";

function App() {
    return (
        <>
            <ParticleBackground />
            <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
                <Header />
                <main className="mx-3" >
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
