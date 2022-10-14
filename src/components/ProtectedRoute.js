import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
    const {user} = UserAuth();

    // checks if there is an authenticated user before navigating to account page
    if (!user){
        return <Navigate to="/" />
    }
    return children;
}

export default ProtectedRoute;