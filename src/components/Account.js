import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";


const Account = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try{
            await logOut();
            navigate("/");
            console.log("You are logged out")
        } catch(e){
            console.log(e.message)
        }
    }
return(
    <>
        {/* <NavBar /> */}
        <Header />
        <div>
            <h1>Account</h1>
            <p>User Email: {user && user.email}</p>

            <button onClick={handleLogOut}>Log Out</button>
        </div>
    </>
)
}

export default Account;