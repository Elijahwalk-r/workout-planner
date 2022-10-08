// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBiO-kMp9lx3zIcPwWcWmXLMVrU0qvYVhQ",
//     authDomain: "my-workout-planner-45666.firebaseapp.com",
//     databaseURL: "https://my-workout-planner-45666-default-rtdb.firebaseio.com",
//     projectId: "my-workout-planner-45666",
//     storageBucket: "my-workout-planner-45666.appspot.com",
//     messagingSenderId: "701081077636",
//     appId: "1:701081077636:web:55f182325a1bc1d7d1ffd1",
//     measurementId: "G-X7T83LJ274"
// };

// // Initialize Firebase
// const firebase = initializeApp(firebaseConfig);

// export default firebase; 


//  ABOVE IS PREVIOUS FIREBASE, BELOW IS NEW FIREBASE


// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCj65Jf7zzW8nH8CUYowYA6srA3HxUoOlw",
  authDomain: "workout-planner-b71e2.firebaseapp.com",
  projectId: "workout-planner-b71e2",
  storageBucket: "workout-planner-b71e2.appspot.com",
  messagingSenderId: "245132005297",
  appId: "1:245132005297:web:997f18c9c430475e25f790",
  measurementId: "G-15C6YYC1KE"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
export const auth = getAuth(firebase);
export default firebase;
