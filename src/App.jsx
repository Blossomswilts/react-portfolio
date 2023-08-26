import React from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";

function App() {
    return <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <Nav />
        <Footer />
    </div>;
}

export default App;
