import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
// importing the corresponding firebase modules 
import { getDatabase, ref, onValue } from 'firebase/database';
import firebase from './firebase';
import Explanation from './Explanation';
import ApiData from './ApiData';
import Footer from './Footer';
import GetExercise from './GetExercise';
import AddExercise from './AddExercise';
import FormDropdown from './FormDropdown';
import WorkoutSelected from './WorkoutSelected';

function App() {
  // const [quote, setQuote] = useState([])
  // useEffect(() => {
  //   // Grabbing my quote with a axios call, storing it in useEffect with a dependency array to only render on page load, storing that within state so i can access it elsewhere. Utilizing the object.values method to turn my object into an array.
  //   axios({
  //     url: "https:/api.goprogram.ai/inspiration",
  //     method: "GET",
  //     dataResponse: "json"
  //   }).then((response) =>{
  //     const actualQuote = Object.values(response.data);
  //     const myQuote = [];
  //     myQuote.push(actualQuote);
  //     setQuote(myQuote)
  //   })
  // }, [])

  

  return (
    <div className="App">
      <h1>My Workout Planner Main site</h1>
      <Explanation />
      <FormDropdown />
      <AddExercise />
      <GetExercise />
      <WorkoutSelected />
      <Footer />
    </div>
  );
}

export default App;
