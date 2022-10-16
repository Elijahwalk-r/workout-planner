import React, {useState, useEffect}from "react";
import { getDatabase, ref, remove, onValue  } from "firebase/database";
import firebase from "../firebase";

const GetWorkoutSavedList = () => {

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

    return(
        <>
            {exercise.map((lift) => {
                return(
                    <li className="liftListItem" key={lift.key}>
                        <p>{lift.name}</p>
                    </li>
                )
            })}
        </> 
    )
}

export default GetWorkoutSavedList;