import { useState } from "react";
import { getDatabase, push, ref} from 'firebase/database';
import firebase from '../firebase';

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
    <section>
        <div className="wrapper">
            <form action="submit" className="addLiftForm">
                <label htmlFor="exerciseChosen">Add an exercise to create your Workout</label>
                <input type="text" id="exerciseChosen" onChange={handleInputChange} value={userInput} className="addLiftInput" name="exercise" placeholder="Enter Your Exercise" maxLength="24" required={true}/>
                <button onClick={handleSubmit}>Choose an Exercise</button>
            </form>
        </div>
    </section>
)
}

export default AddExercise;