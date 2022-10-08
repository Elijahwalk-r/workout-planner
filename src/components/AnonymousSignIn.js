import { auth } from "../firebase";
import { signInAnonymously } from "firebase/auth";
import { useNavigate } from "react-router-dom";




const AnonymousSignIn = () => {
    const navigate = useNavigate();
    
    const anonLogIn = async () => {
        signInAnonymously(auth)
        .then(() => {
            navigate("/public")
            console.log("signed in anon")
        })
         .catch ((e) => {
            const errorCode = e.code 
            const errorMessage = e.message 
        })  
    }

    return(
        <button onClick={anonLogIn}>Continue Anonymously</button>
    )
    
    
        
}

export default AnonymousSignIn