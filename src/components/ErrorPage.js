import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return(
        <div className="wrapper">
            <h1>404!</h1>
            <p>An error has occurred! This URL path does not exist.</p>

            <p>Click <Link to="/">HERE</Link> to go to the Log in page</p>

        </div>
    )

}

export default ErrorPage;