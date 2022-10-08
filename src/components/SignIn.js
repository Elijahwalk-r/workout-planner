import React, { useState } from "react";
import fitnessCentre from "../assets/fitnesscentre.png"
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import AnonymousSignIn from "./AnonymousSignIn";




const SignIn = () => {
    const pic1 = fitnessCentre;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { logIn } = UserAuth();

    const handleSignInSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try{
            await logIn(email, password);
            navigate("/account")
        } catch (e){
            setError(e.message)
        }
    }
    

    return(
        <>
            <Header />
            <section>
                <div className="wrapper">    
                    <div className="signInCard">
                       
                        <h2>Sign Into Your Account</h2>
                        <p>Enter your email and passcode to sign into your private account</p>
                    
                        <form onSubmit={handleSignInSubmit}>
                            <fieldset>
                                <legend className="sr-only">Sign In</legend>
                                <label 
                                    htmlFor="email" 
                                    className="sr-only"
                                    >Email
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter Your Email"
                                    className="signIn"
                                />

                                <label 
                                    htmlFor="password" className="sr-only"
                                    >Password
                                </label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    placeholder="Password"
                                    className="signIn"
                                />

                                <button type="submit" className="signInButton">Sign In</button>
                            </fieldset>
                        </form>
                        <div>
                            <p>Don't have an account yet? <Link to="/signup" className="exclamation lineBreak"> Sign up</Link></p>

                            <p className="anonymous">Or, continue without signing in</p>
                            
                            <AnonymousSignIn />
                            
                        </div>
                    </div>
                    <div className="imageContainer" >
                        <img className="backgroundImage" src={pic1} alt="An image of many individuals working out in a gym"/>
                    </div> 
                </div>
            </section>
        </>
    )
}

export default SignIn;