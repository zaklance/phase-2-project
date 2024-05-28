import React from "react";
import { useRouteError } from "react-router-dom";
import NavHead from "./NavHead";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    
    return (
        <>
            <NavHead />
            <main>
                <h1>Oops! Something went wrong!</h1>
            </main>
        </>
    )

}

export default ErrorPage;