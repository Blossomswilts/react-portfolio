import { Outlet } from 'react-router-dom';
import '../src/styles/app.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <>
            <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
                <Header />
                <main className="mx-3">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
