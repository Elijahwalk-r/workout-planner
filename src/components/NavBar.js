import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

const NavBar = () => {

    // global variables grabbing user info and logout method from context as well as navigating user to a different page through react router
     const { user, logOut} = UserAuth(); 
     const navigate = useNavigate();
    
    //  named function to handle log out, and display user's email / or display anonymous user
     const checkUser = () => {
        const handleLogOut = async (e) => {
            e.preventDefault();
            try{
                await logOut();
                navigate("/");
            } catch(e){
                alert(e.message)
            }
        }
        
        // checks is user.email is null to conditionally render a different nav based on if user authentication is anonymous or email/password verified
        if (user.email !== null) {
            return(
                <>
                    
                    <p className="linkToAccount"> <Link to="/account">View Private Account</Link></p>

                    <p className="currentUser">
                        <span>Current User </span> 
                        <span>{user && user.email}</span>
                    </p>
                            
                    <button className="mainLogOut" type="submit" onClick={handleLogOut}>Log Out</button>
                    
                </>
            )
        } else {
            return(
                <>

                    <p className="linkToAccount"> <Link to="/public">View Public Workouts</Link></p>
                    
                    <p className="currentUser">Anonymous User</p>
                    
                    <button className="mainLogOut" type="submit" onClick={handleLogOut}>Log Out</button>
                </>
            )
        }
     }
    
    return(
        <nav>
            <div className="wrapper navBarContainer">
                <ul className="navBarUl">
                    <li className="navList">
                         {checkUser()} 
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default NavBar;