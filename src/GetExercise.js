import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import firebase from './firebase';

const GetExercise = () => {
    const [exercise, setExercise] = useState([]);
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

    const handleRemoveExercise = (liftId) => {
        const database = getDatabase(firebase)
        const dbRef = ref(database, `/${liftId}`)
        remove(dbRef)
    }
    return(
        <div>
            <ul>
                {exercise.map((lift) => {
                    return(
                        <li key={lift.key}>
                            <p>{lift.name}</p>
                            <button onClick={() => handleRemoveExercise(lift.key)}>X</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default GetExercise;