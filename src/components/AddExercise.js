import { useState } from "react";
import { getDatabase, push, ref, set} from 'firebase/database';
import { getAuth } from "firebase/auth";

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
        set(ref(db, `/${uid}`), {
            name: workoutName,
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
        const dbRef = ref(db, `/${uid}`);
        push(dbRef, userInput);
        setUserInput("");
    }


return(
    <form action="submit" className="addLiftForm">

        <label>Workout Focus</label>
        <input type="text" value={workoutName} onChange={handleSetWorkoutName} />
        <button onClick={writeToDatabase} type="submit">Add Name</button>

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
        <button onClick={handleSubmit}>Choose an Exercise</button>

    </form>

)
}

export default AddExercise;