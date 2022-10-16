import { useState } from "react";
import { getDatabase, push, ref} from 'firebase/database';
import firebase from '../firebase';
import axios from "axios";

const AddExercise = () => {

    // state to hold users input for specific exercises
    const [userInput, setUserInput] = useState("");

    // named function to target the value of the inputs 
    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    }

    // named function to check if user's input is either blank, or to many characters.
    const checkInput = (str) => {
        if (str === '' || !str.replace(/\s/g, '').length || str.length > 24){
            alert('Please make sure you have not submitted an empty input, as well as an entry over 24 characters.');
            return false;
        } else { return true; }
    }

    // utilizing the profanity filter to check user's input.
    const profanityLanguage = async (string) => {
        const inputWithProfanity = await axios
            .get('https://www.purgomalum.com/service/containsprofanity?text=' + string)
            .then((response) => response.data)
            .catch((error) => alert('The Profanity API check has failed', error));
        return inputWithProfanity;
    }
    
    // named function to handle submitting the exercise,in the controlled inputs, preventing page refresh and writing to firebase RTDB
    const handleSubmit = async (e) => {
        e.preventDefault();
        const inputProfanity = await profanityLanguage(userInput);
        
        // waiting to see if there is profanity or a blank input 
        if (!inputProfanity && checkInput(userInput) ){
            
            const database = getDatabase(firebase);
            const dbRef = ref(database);
            push(dbRef, userInput);
            setUserInput("");

        } else if (inputProfanity) {
            alert(`Please, don't use Profanity`);
        }
        
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
            placeholder="eg. Bicep Curls 3 x 4"
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