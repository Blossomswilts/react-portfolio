import React from "react";
import Footer from "./components/Footer";
import Navigation from "./components/Nav";

function App() {
    return <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <Navigation />
        <Footer />
    </div>;
}

export default App;
