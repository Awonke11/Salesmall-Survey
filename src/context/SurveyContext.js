import { createContext, useState } from "react";
import {auth} from "../firebase/firebaseConfig";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";

export const SurveyContext = createContext(null);

const SurveyContextProvider = ({children}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const [question1, setQuestion1] = useState("")
    const [question2, setQuestion2] = useState([])
    const [question3, setQuestion3] = useState([])
    const [question4, setQuestion4] = useState([])
    const [question5, setQuestion5] = useState(false)
    const [question6, setQuestion6] = useState(false)

    const answerData = {
        user: username,
        mail: email,
        questionOne: question1,
        questionTwo: question2,
        questionThree: question3,
        questionFour: question4,
        questionFive: question5,
        questionSix: question6,
    };

    const signInUserWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(res => {
            const displayNameArray = res.user.displayName.split(" ")
            setUsername(displayNameArray[0]);
            setEmail(res.user.email)
        })
    }

    const [progressBar, setProgressBar] = useState(0);
    const increaseProgressBar = () => {
        const number = 100/5;
        if (progressBar <= 100) {
            setProgressBar(progressBar + number)
        }
    }

    const values = {
        username,
        signInUserWithGoogle,
        setQuestion1,
        question2,
        setQuestion2,
        setQuestion3,
        setQuestion4,
        setQuestion5,
        setQuestion6,
        answerData,
        progressBar,
        setProgressBar,
        increaseProgressBar
    }

    return (
        <SurveyContext.Provider value={values}>
            {children}
        </SurveyContext.Provider>
    )
}

export default SurveyContextProvider;