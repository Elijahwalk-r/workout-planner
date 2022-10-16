import { useState } from "react";
import { getDatabase, push, ref, set, update} from 'firebase/database';
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";

const AddExercise = () => {
    
    // global variables to get database and get signed in users
    const db = getDatabase()
    const userAuth = getAuth();
    const user = userAuth.currentUser;
    const uid = user.uid
    
    // state to hold users input on the name for their workout
    const [workoutName, setWorkoutName] = useState("");
    const handleSetWorkoutName = (e) => { 
        setWorkoutName(e.target.value)
    }

    // named function to write to firebase RTDB based on state, then resetting state to an empty string
    const writeToDatabase = () => {
        set(ref(db, `/${uid}/${workoutName}`), {
            uid: uid
        });
        setWorkoutName("")
    }

    // state to hold users input for specific exercises
    const [userInput, setUserInput] = useState("");
    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    }
    
    // submitting the specific exercises to the unique users id
    const handleSubmit = (e) => {
        e.preventDefault();
        const dbRef = ref(db, `/${uid}/${workoutName}`);
        
        const newPostRef = push(dbRef);
        update(newPostRef, userInput)
        setUserInput("");
    }

    // checking if their is a user before rendering the named workout Card
    const namedWorkoutCard = () => {
        if (user !== null){
            return(
                <>
                    <form action="submit">
                        <label htmlFor="workoutTitle">Workout Focus</label>

                        <input 
                            type="text" 
                            id="workoutTitle" 
                            value={workoutName} 
                            placeholder="eg. Upper Body"
                            maxLength="23"
                            name="workoutTitle"
                            className="addWorkoutTitle"
                            required={true}
                            onChange={handleSetWorkoutName} />

                        <button onClick={writeToDatabase} type="submit">Add Name</button>
                    </form>

                    <form action="submit" className="addLiftForm">

                        <label htmlFor="exerciseChosen">Add an exercise to create your Workout</label>

                        <input 
                            type="text" 
                            id="exerciseChosen" 
                            onChange={handleInputChange} 
                            value={userInput} 
                            className="addLiftInput" 
                            name="exercise" 
                            placeholder="Enter Your Exercise" 
                            maxLength="24" 
                            required={true}
                            />    

                        <button type="submit" onClick={handleSubmit}>Choose an Exercise</button>

                    </form>
                </>
            )
        } else {
            return(
                <p>You have been signed out, click here to sign back in <Link to="/">HERE</Link></p>
            )
        }
    }

return(
    <>
        {namedWorkoutCard()}
    </>

)
}

export default AddExercise;