import {useContext, useState} from 'react';
import Navigation from '../components/Navigation';
import ProgressBar from '../components/ProgressBar';
import { SurveyContext } from '../context/SurveyContext';
import {Link} from "react-router-dom";

const QuestionFive = () => {
    const {increaseProgressBar, setQuestion5} = useContext(SurveyContext);

    const [select1, setSelect1] = useState(false);
    const [select2, setSelect2] = useState(true);

    return (
        <div className="question five">
            <Navigation />
            <main className="question-content five-content">
                <ProgressBar />
                <div className="question-content-container five-content-container">
                    <h3 className="question-content-container-title five-content-container-title">Would you buy the same product, from a different store, at a lower price?</h3>
                    <div className="question-content-container-select five-content-container-select">
                        <div 
                            className={select1 ? "question-selected" : "question-select"}
                            onClick={() => {
                                setSelect1(true)
                                setSelect2(false)
                                setQuestion5("No")
                            }}
                            style={{cursor: "pointer"}}
                        >No</div>
                        <div 
                            className={select2 ? "question-selected" : "question-select"}
                            onClick={() => {
                                setSelect1(false)
                                setSelect2(true)
                                setQuestion5("Yes")
                            }}
                            style={{cursor: "pointer"}}
                        >Yes</div>
                    </div>
                </div>
                <Link 
                    to="/question/6" 
                    onClick={increaseProgressBar} 
                    className="question-content-container-link">Next</Link>
            </main>
        </div>
    )
}

export default QuestionFive;