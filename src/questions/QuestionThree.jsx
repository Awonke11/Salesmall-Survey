import {useContext, useState} from 'react';
import Navigation from '../components/Navigation';
import ProgressBar from '../components/ProgressBar';
import { SurveyContext } from '../context/SurveyContext';
import {Link} from "react-router-dom";

const QuestionThree = () => {
    const {increaseProgressBar, setQuestion3} = useContext(SurveyContext);

    const [select1, setSelect1] = useState(false);
    const [select2, setSelect2] = useState(false);
    const [select3, setSelect3] = useState(false);
    const [select4, setSelect4] = useState(false);
    const [select5, setSelect5] = useState(false);
    const [select6, setSelect6] = useState(false);
    const [select7, setSelect7] = useState(false);
    const [select8, setSelect8] = useState(false);
    const [select9, setSelect9] = useState(false);

    return (
        <div className="question three">
            <Navigation />
            <main className="question-content three-content">
                <ProgressBar />
                <div className="question-content-container three-content-container">
                    <h3 className="question-content-container-title three-content-container-title">What are the things you find expensive?</h3>
                    <div className="question-content-container-select three-content-container-select">
                    <div 
                            className={select1 ? "question-selected" : "question-select"}
                            onClick={() => {
                                setSelect1(select1 ? false : true)
                                setQuestion3(prev => [...prev, "Clothes"])
                            }}
                            style={{cursor: "pointer"}}
                        >Clothes</div>
                        <div 
                            className={select2 ? "question-selected" : "question-select"}
                            onClick={() => {
                                setSelect2(select2 ? false : true)
                                setQuestion3(prev => [...prev, "Alcohol"])
                            }}
                            style={{cursor: "pointer"}}
                        >Alcohol</div>
                        <div 
                            className={select3 ? "question-selected" : "question-select"}
                            onClick={() => {
                                setSelect3(select3 ? false : true)
                                setQuestion3(prev => [...prev, "Entertainment"])
                            }}
                            style={{cursor: "pointer"}}
                        >Entertainment</div>
                        <div 
                            className={select4 ? "question-selected" : "question-select"}
                            onClick={() => {
                                setSelect4(select4 ? false : true)
                                setQuestion3(prev => [...prev, "Beauty"])
                            }}
                            style={{cursor: "pointer"}}
                        >Beauty</div>
                        <div 
                            className={select5 ? "question-selected" : "question-select"}
                            onClick={() => {
                                setSelect5(select5 ? false : true)
                                setQuestion3(prev => [...prev, "Music"])
                            }}
                            style={{cursor: "pointer"}}
                        >Music</div>
                        <div 
                            className={select6 ? "question-selected" : "question-select"}
                            onClick={() => {
                                setSelect6(select6 ? false : true)
                                setQuestion3(prev => [...prev, "Gym"])
                            }}
                            style={{cursor: "pointer"}}
                        >Gym</div>
                        <div 
                            className={select7 ? "question-selected" : "question-select"}
                            onClick={() => {
                                setSelect7(select7 ? false : true)
                                setQuestion3(prev => [...prev, "Electronics"])
                            }}
                            style={{cursor: "pointer"}}
                        >Electronics</div>
                        <div 
                            className={select8 ? "question-selected" : "question-select"}
                            onClick={() => {
                                setSelect8(select8 ? false : true)
                                setQuestion3(prev => [...prev, "Accessories"])
                            }}
                            style={{cursor: "pointer"}}
                        >Accessories</div>
                        <div 
                            className={select9 ? "question-selected" : "question-select"}
                            onClick={() => {
                                setSelect9(select9 ? false : true)
                                setQuestion3(prev => [...prev, "Home Decor"])
                            }}
                            style={{cursor: "pointer"}}
                        >Home Decor</div>
                    </div>
                </div>
                <Link 
                    to="/question/4" 
                    onClick={increaseProgressBar} 
                    className="question-content-container-link three-content-container-link">Next</Link>
            </main>
        </div>
    )
}

export default QuestionThree;