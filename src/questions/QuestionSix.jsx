import {useContext, useState} from 'react';
import Navigation from '../components/Navigation';
import ProgressBar from '../components/ProgressBar';
import { SurveyContext } from '../context/SurveyContext';
import {Link} from "react-router-dom";
import {db} from "../firebase/firebaseConfig";
import {collection, addDoc} from "firebase/firestore";

const QuestionSix = () => {
    const {increaseProgressBar, setQuestion6, answerData} = useContext(SurveyContext);

    const [select1, setSelect1] = useState(false);
    const [select2, setSelect2] = useState(true);

    const answerCollectionRef = collection(db, "answers")
    const uploadAnswer = () => {
        addDoc(answerCollectionRef, answerData)
    }

    return (
        <div className="question five">
            <Navigation />
            <main className="question-content five-content">
                <ProgressBar />
                <div className="question-content-container five-content-container">
                    <h3 className="question-content-container-title five-content-container-title">Do you trust buying items online?</h3>
                    <div className="question-content-container-select five-content-container-select">
                    <div 
                            className={select1 ? "question-selected" : "question-select"}
                            onClick={() => {
                                setSelect1(true)
                                setSelect2(false)
                                setQuestion6("No")
                            }}
                            style={{cursor: "pointer"}}
                        >No</div>
                        <div 
                            className={select2 ? "question-selected" : "question-select"}
                            onClick={() => {
                                setSelect1(false)
                                setSelect2(true)
                                setQuestion6("Yes")
                            }}
                            style={{cursor: "pointer"}}
                        >Yes</div>
                        
                    </div>
                </div>
                <Link 
                    to="/thank-you" 
                    onClick={() => {
                        increaseProgressBar()
                        uploadAnswer()
                    }} 
                    className="question-content-container-link">Continue</Link>
            </main>
        </div>
    )
}

export default QuestionSix;