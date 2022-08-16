import firebase from './firebase';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import { useEffect, useState } from 'react';


const WorkoutSelected = () => {
    
    const [workout, setWorkout] = useState([]);
    const handleAddWorkout = () =>{
        
        useEffect(() => {
            const database = getDatabase(firebase);
            const dbRef = ref(database);
            onValue(dbRef, (res) => {
                const workoutArray = [];
                const data = res.val();
                for (let key in data) {
                    workoutArray.push({ key: key, name: data[key] });
                }
                setWorkout(workoutArray);
            })
        }, [])
    }

    // const handleRemoveExercise = (workId) => {
    //     const database = getDatabase(firebase)
    //     const dbRef = ref(database, `/${workId}`)
    //     remove(dbRef)
    // }

    // const handleAddWorkout = (workId) => {
    //     const database = getDatabase(firebase)
    //     const dbRef = ref(database, `/${workId}`)
    //    dbRef.onSnapshot(snapshot => {

    //    })

    // }

    return(
        <button onClick={handleAddWorkout()}>Create Workout</button>
    )

    // return(
    //     <div>
    //         <h2>Enjoy your Workout for the Day</h2>
    //         <ul>
    //                 {
    //                     workout.map((work) => {
    //                         return (
    //                             <li key={work.key}>
    //                             <p>{work.name}</p>
    //                             <button onClick={() => handleRemoveExercise(work.key)}>X</button>
    //                         </li>
    //                         )
    //                     })
    //                 }
    //         </ul>
    //     </div>
    // )
}
export default WorkoutSelected;