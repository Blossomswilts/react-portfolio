import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>On no!</h1>
            <p>My apologies, an unexpected error has occurred!</p>
            <p>
                <i>{error.statusTest || error.message}</i>
            </p>
        </div>
    );
}
