import { auth } from "../firebase";
import { signInAnonymously } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const AnonymousSignIn = () => {

    // variable for react router navigation
    const navigate = useNavigate();

    // async function to auth user with anonymous sign in through firebase
    const anonLogIn = async () => {
        signInAnonymously(auth)
        .then(() => {
            navigate("/public");
        })
         .catch ((e) => {
            // console.log(e.code);
            alert(e.message);
        })  
    }
    return(
        <button onClick={anonLogIn}>Continue Anonymously</button>
    )     
}

export default AnonymousSignIn;