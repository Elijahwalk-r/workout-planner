import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import firebase from '../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const GetExercise = () => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user){
            const uid = user.uid;
            console.log("hey")
        } else {
            console.log("bye")
        }
    })

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
        <section>
            <div className="wrapper">
                <ul>
                    {exercise.map((lift) => {
                        return(
                            <li className="liftListItem" key={lift.key}>
                                <p>{lift.name}</p>
                                <button className="removeButton" onClick={() => handleRemoveExercise(lift.key)}>X</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default GetExercise;