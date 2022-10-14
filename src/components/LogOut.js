import React from "react";
import { UserAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LogOut = () => {

    // global variables that is grabbing user and logOut from context folder
    const { user, logOut } = UserAuth();

    // global variable for react router navigation
    const navigate = useNavigate();

    
    // async function to log user out
    const handleLogOut = async () => {
        try{
            await logOut();
            navigate("/");
        } catch(e){
            alert(e.message)
        }
    }

    return(
            <button 
                className="mainLogOut" 
                onClick={handleLogOut}
                >Log Out
            </button>
    )

}

export default LogOut;