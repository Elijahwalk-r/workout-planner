import React from "react";
import heartWeight from "../assets/heartweights.png"
import Header from "./Header";
import { useNavigate, Link } from "react-router-dom";

const PublicPage = () => {
    const pic3 = heartWeight;
    const navigate = useNavigate();

    return(
    <>
        <Header />
        <div className="wrapper">

            <h1>Public Page</h1>

                <div>
                    <Link to="/main">HERE</Link>
                    <h2></h2>
                    <p></p>
                </div>
                <div className="heartWeightContainer">
                    <img className="heartWeight"src={pic3} alt="A heart lifting two dumbbells"/>
                </div>
        </div>
    </>
    )

}

export default PublicPage;