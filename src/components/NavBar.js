import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

const NavBar = () => {
     const { user, logOut} = UserAuth(); 
     const navigate = useNavigate();
    
     const checkUser = () => {
        const handleLogOut = async (e) => {
            e.preventDefault();
            try{
                await logOut();
                navigate("/");
                console.log("You are logged out")
            } catch(e){
                console.log(e.message)
            }
        }

        if (!!user) {
            return(
                <>
                    <p>Current User: {user && user.email}</p>
                    <button onClick={handleLogOut}>Log Out</button>
                </>
            )
        } else {
            return(
                <>
                <button> <Link to="/">Log In</Link> </button>
                </>
            )
        }
     }


     

    
    return(
        <nav>
            <div className="wrapper navBarContainer">
                <ul className="navBarUl">
                    <li className="navList">
                       <p className="linkToAccount"> <Link to="/account">View Your Private Account</Link></p>
                    </li>
                    <li className="navList">
                         {checkUser()}
                          
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default NavBar;