import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBOlyviIrhjsVYM2XbFntZqD4phiF_eK9I",
  authDomain: "workoutplannerproduction.firebaseapp.com",
  databaseURL: "https://workoutplannerproduction-default-rtdb.firebaseio.com",
  projectId: "workoutplannerproduction",
  storageBucket: "workoutplannerproduction.appspot.com",
  messagingSenderId: "1035985046140",
  appId: "1:1035985046140:web:53db335110c1c4165917f9",
  measurementId: "G-EFM3YT81ZM"
};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

export default firebase;