import {useContext, useState} from 'react';
import Navigation from '../components/Navigation';
import ProgressBar from '../components/ProgressBar';
import { SurveyContext } from '../context/SurveyContext';
import {Link} from "react-router-dom";

const QuestionOne = () => {
    const {increaseProgressBar, setQuestion1} = useContext(SurveyContext);

    const [select1, setSelect1] = useState(true);
    const [select2, setSelect2] = useState(false);
    const [select3, setSelect3] = useState(false);
    const [select4, setSelect4] = useState(false);

    return (
        <div className="question one">
            <Navigation />
            <main className="question-content one-content">
                <ProgressBar />
                <div className="question-content-container one-content-container">
                    <h3 className="question-content-container-title one-content-container-title">How much do you get per month?</h3>
                    <div className="question-content-container-select one-content-container-select">
                        <div 
                            className={select1 ? "question-selected" : "question-select"}
                            onClick={() => {
                                setSelect1(true)
                                setSelect2(false)
                                setSelect3(false)
                                setSelect4(false)
                                setQuestion1("0 - 1k")
                            }}
                            style={{cursor: "pointer"}}
                        >0 - 1k</div>
                        <div 
                            className={select2 ? "question-selected" : "question-select"}
                            onClick={() => {
                                setSelect1(false)
                                setSelect2(true)
                                setSelect3(false)
                                setSelect4(false)
                                setQuestion1("1k - 10k")
                            }}
                            style={{cursor: "pointer"}}
                        >1k - 10k</div>
                        <div 
                            className={select3 ? "question-selected" : "question-select"}
                            onClick={() => {
                                setSelect1(false)
                                setSelect2(false)
                                setSelect3(true)
                                setSelect4(false)
                                setQuestion1("10k - 100k")
                            }}
                            style={{cursor: "pointer"}}
                        >10k - 100k</div>
                        <div 
                            className={select4 ? "question-selected" : "question-select"}
                            onClick={() => {
                                setSelect1(false)
                                setSelect2(false)
                                setSelect3(false)
                                setSelect4(true)
                                setQuestion1("100k - 1m")
                            }}
                            style={{cursor: "pointer"}}
                        >100k - 1m</div>
                    </div>
                </div>
                <Link 
                    to="/question/2" 
                    onClick={increaseProgressBar} 
                    className="question-content-container-link">Next</Link>
            </main>
        </div>
    )
}

export default QuestionOne;