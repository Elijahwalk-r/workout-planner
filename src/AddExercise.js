import { useState } from "react";
import { getDatabase, push, ref} from 'firebase/database';
import firebase from './firebase';

const AddExercise = () => {

    const [userInput, setUserInput] = useState("");

    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        push(dbRef, userInput);
        setUserInput("");
    }

return(
    <div>
        <form action="submit">
            <label htmlFor="exerciseChosen">Add an exercise to your Workout</label>
            <input type="text" id="addedExercise" onChange={handleInputChange} value={userInput}/>
            <button onClick={handleSubmit}>Choose an Exercise</button>
        </form>
    </div>
)
}

export default AddExercise;