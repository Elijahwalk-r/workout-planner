import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import firebase from '../firebase';

const GetExercise = () => {

    // state with an empty array as it's initial value holding the exercises written to firebase
    const [exercise, setExercise] = useState([]);

    // useEffect hook with a dependency empty array so that each time state is updated (the exercise written to firebase), the hook will render
    useEffect(() => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        onValue(dbRef, (res) => {
            const newArray = [];
            const data = res.val();
            for (let key in data){
                newArray.push({key: key, name: data[key]});
            }
            setExercise(newArray);
        })
    }, [])

    // named function to reference the point in RTDB that needs to be removed using firebase remove method
    const handleRemoveExercise = (liftId) => {
        const database = getDatabase(firebase)
        const dbRef = ref(database, `/${liftId}`)
        remove(dbRef)
    }

    // mapping over the exercise array and displaying each single userInput (exercise)
    return(
        <>
            {exercise.map((lift) => {
                return(
                    <li className="liftListItem" key={lift.key}>

                        <p>{lift.name}</p>

                        <button 
                            className="removeButton"
                            onClick={() => handleRemoveExercise(lift.key)}>X
                        </button>
                    </li>
                )
            })}
        </>
    )
}

export default GetExercise;