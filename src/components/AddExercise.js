import { useState } from "react";
import { getDatabase, push, ref} from 'firebase/database';
import firebase from '../firebase';

const AddExercise = () => {

    // state to hold users input for specific exercises
    const [userInput, setUserInput] = useState("");

    // named function to target the value of the inputs 
    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    }

    // named function to handle submitting the exercise,in the controlled inputs, preventing page refresh and writing to firebase RTDB
    const handleSubmit = (e) => {
        e.preventDefault();
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        push(dbRef, userInput);
        setUserInput("");
    }


return(

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
            required={true}/>

        <button 
            type="submit"
            onClick={handleSubmit}
            >Choose an Exercise
        </button>

    </form>

)
}

export default AddExercise;