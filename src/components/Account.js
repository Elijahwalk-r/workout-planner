import React from "react";
import heartWeight from "../assets/heartweights.png"
import Header from "./Header";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";


const Account = () => {
    const pic3 = heartWeight;
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try{
            await logOut();
            navigate("/");
            console.log("You are logged out")
        } catch(e){
            // console.log(e.message)
            alert(e.message)
        }
    }
return(
    <>
        <Header />
        <section>
            <div className=" wrapper accountPage">
                <div>
                    <Link to="/main">HERE</Link>
                    <h1>Private Account Page</h1>
                    <p>User Email: {user && user.email}</p>
                </div>
                <div className="logOutButton">
                    <button onClick={handleLogOut}>Log Out</button>
                </div>
                    
                    {/* WILL USE THIS DIV TO MAP AND RETURN THE LOGGED IN USERS PRIVATE LIST FROM FIREBASE*/}
                <div className="privateWorkoutList">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <div className="heartWeightContainer">
                    <img className="heartWeight"src={pic3} alt="A heart lifting two dumbbells"/>
                </div>
            </div>
        </section>
    </>
)
}

export default Account;