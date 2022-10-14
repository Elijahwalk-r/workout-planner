import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";
import GetWorkoutSavedList from "./GetWorkoutSavedList";

const PublicPage = () => {
    // use of states to toggle between classes and element text
    const [workoutCard, setWorkoutCard] = useState(false);
    const [buttonText, setButtonText] = useState(true);
    const [exerciseList, setExerciseList] = useState(false)

    // named function to handle submit
    const handleShown = e => {
        e.preventDefault();
        setWorkoutCard(!workoutCard); 
        setButtonText(!buttonText);
        setExerciseList(!exerciseList);
    }

    // variables that can be changed using conditional rendering (ternary operators)
    let toggleWorkoutCard = workoutCard ? "workoutItemExpand" : "workoutItem";
    let toggleButtonText = buttonText ? "Show Workout" : "Hide Workout";
    let toggleExerciseClass = exerciseList ? "showExerciseList" : "hideExerciseList" ;

    return(
    <>
        <nav>
            <div className="wrapper navBarContainer">
                <ul className="navBarUl">
                    <li>
                        <p className="linkToAccount">
                            <Link to="/main">Get Started</Link>
                        </p>
                    </li>
                    <li>
                        <p>Anonymous User</p>
                    </li>
                    <li>
                        <LogOut />
                    </li>
                </ul>
            </div>
        </nav>

        <Header />

        <header>
            <div className="wrapper accountPageTitle">
                <h2>Public Page</h2>
                <h3>Saved Workouts</h3>
            </div>
        </header>

        <section>
            <div className="wrapper">
                <div className="accountPage">
                        {/* WILL USE THIS DIV TO MAP AND RETURN THE LOGGED IN USERS PRIVATE LIST FROM FIREBASE*/}
                    <div className={toggleWorkoutCard}>

                        <p>title of workout</p>

                        <button 
                            type="submit" 
                            onClick={handleShown}
                            >{toggleButtonText}
                        </button>

                        <a>go to random youtube vid</a>
                        
                        <ul className={toggleExerciseClass}>
                            <GetWorkoutSavedList/>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </>
    )

}

export default PublicPage;