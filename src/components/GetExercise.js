import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import firebase from '../firebase';
import { getAuth } from "firebase/auth";


const GetExercise = () => {

    // global variables to get database and get signed in users
    const userAuth = getAuth();
    const user = userAuth.currentUser;
    const uid = user.uid

    const [exercise, setExercise] = useState([]);
    useEffect(() => {
        const database = getDatabase(firebase);
        const dbRef = ref(database,`/${uid}`);
        onValue(dbRef, (res) => {
            const newArray = [];
            const data = res.val();
            for (let key in data){
                newArray.push({key: key, name: data[key]});
            }
            setExercise(newArray);
        })
    }, [])

    const handleRemoveExercise = () => {
        const database = getDatabase(firebase)
        const dbRef = ref(database, `/${uid}`)
        remove(dbRef)
    }
    return(
                <>
                    {exercise.map((lift) => {
                        return(
                            <li className="liftListItem" key={lift.key}>

                                <p>{lift.name}</p>

                                <button 
                                    className="removeButton" 
                                    onClick={() => handleRemoveExercise(lift.key)}
                                    >X
                                </button>

                            </li>
                        )
                    })}
                </>
    )
}

export default GetExercise;