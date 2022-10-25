import { createContext, useState, useEffect } from "react";
import {auth} from "../firebase/firebaseConfig";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";

export const SurveyContext = createContext();

const SurveyContextProvider = ({children}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [progressBar, setProgressBar] = useState(0);

    const [question1, setQuestion1] = useState("0 - 1k")
    const [question2, setQuestion2] = useState([])
    const [question3, setQuestion3] = useState([])
    const [question4, setQuestion4] = useState([])
    const [question5, setQuestion5] = useState("Yes")
    const [question6, setQuestion6] = useState("Yes")

    useEffect(() => {
        const getUsername = localStorage.getItem("username");
        if (getUsername) {
            setUsername(JSON.parse(getUsername));
        }
        const getEmail = localStorage.getItem("email");
        if (getEmail) {
            setEmail(JSON.parse(getEmail));
        }
        const getProgressBar = localStorage.getItem("progressBar");
        setProgressBar(JSON.parse(getProgressBar));

        const getQuestion1 = localStorage.getItem("question1");
        setQuestion1(JSON.parse(getQuestion1));
        const getQuestion2 = localStorage.getItem("question2");
        setQuestion2(JSON.parse(getQuestion2));
        const getQuestion3 = localStorage.getItem("question3");
        setQuestion3(JSON.parse(getQuestion3));
        const getQuestion4 = localStorage.getItem("question4");
        setQuestion4(JSON.parse(getQuestion4));
        const getQuestion5 = localStorage.getItem("question5");
        setQuestion5(JSON.parse(getQuestion5));
        const getQuestion6 = localStorage.getItem("question6");
        setQuestion6(JSON.parse(getQuestion6));
    }, [])

    useEffect(() => {
        localStorage.setItem("username", JSON.stringify(username));
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("progressBar", JSON.stringify(progressBar));

        localStorage.setItem("question1", JSON.stringify(question1));
        localStorage.setItem("question2", JSON.stringify(question2));
        localStorage.setItem("question3", JSON.stringify(question3));
        localStorage.setItem("question4", JSON.stringify(question4));
        localStorage.setItem("question5", JSON.stringify(question5));
        localStorage.setItem("question6", JSON.stringify(question6));
    }, [email, progressBar, question1, question2, question3, question4, question5, question6, username])

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