import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";
import Portfolio from "./pages/Portfolio.jsx";

// Defines acceptable routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <AboutMe />,
            },
            {
                path: "/About",
                element: <AboutMe />,
            },
            {
                path: "/Portfolio",
                element: <Portfolio />,
            },
            {
                path: "/Contact",
                element: <Contact />,
            },
            {
                path: "*",
                element: <Error />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
