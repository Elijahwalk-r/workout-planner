import React, { useState } from 'react';
import healthyrun from "../assets/healthyrun.png";
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';
import AnonymousSignIn from "./AnonymousSignIn";

const SignUp = () => {
    const pic2 = healthyrun;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    
    const { createUser } = UserAuth(); 

    const navigate = useNavigate();

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try{
            await createUser(email, password)
            navigate('/account')
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
                        <h2>Sign up for a free account</h2>
                        <p>Already have an account? <Link to="/" className="exclamation"> Sign In</Link></p>
                        <p>Create and Save your own workouts!</p>
                        
                        <form onSubmit={handleSignUpSubmit}>
                            <fieldset>
                                <legend className="sr-only">Sign Up</legend>
                                <label 
                                htmlFor="emailRegister"
                                className="sr-only"
                                >Email
                                </label>
                                <input 
                                type="email" 
                                id="emailRegister" 
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter An Email"
                                className="signIn"
                                />

                                <label 
                                htmlFor="passwordRegister"
                                className="sr-only"
                                >Password
                                </label>
                                <input 
                                type="password" 
                                id="passwordRegister" 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="Password"
                                className="signIn"
                                />

                                <label 
                                htmlFor="password-confirm"
                                className="sr-only"
                                >Confirm Password
                                </label>
                                <input 
                                type="password" 
                                id="password-confirm" 
                                className="signIn" 
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm your Password"
                                />

                                <button type="submit" className="signInButton">Sign Up</button>
                            </fieldset>
                        </form>
                        
                        <div>
                            <p> To use this App without signing in, Click Below.</p>
                            <AnonymousSignIn />
                        </div>

                        <div className="ecgContainer">
                            <img className="ecgSprint"src={pic2} alt="An image of a person running at the end of an ECG lifeline monitor reading"/>
                        </div>
                    </div>
                </div>
            </section>
     </>
    )
      
        
}

export default SignUp;
