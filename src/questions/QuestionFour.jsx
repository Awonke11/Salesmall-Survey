import {useContext, useState} from 'react';
import Navigation from '../components/Navigation';
import ProgressBar from '../components/ProgressBar';
import { SurveyContext } from '../context/SurveyContext';
import {Link} from "react-router-dom";

const QuestionFour = () => {
    const {increaseProgressBar, setQuestion4} = useContext(SurveyContext);
    const [storeList, setStoreList] = useState([]);
    const [store, setStore] = useState("");

    const addStoreToList = () => {
        setStoreList(prev => [...prev, store])
        setStore("")
    }

    return (
        <div className="question four">
            <Navigation />
            <main className="question-content four-content">
                <ProgressBar />
                <div className="question-content-container four-content-container">
                    <h3 className="question-content-container-title four-content-container-title">What stores (online included) do you normally buy from?</h3>
                    <div  className="question-content-container-add four-content-container-add">
                        <input 
                            type="text" 
                            placeholder="Enter store..." 
                            value={store} 
                            onChange={(e) => setStore(e.target.value)}
                        />
                        <button onClick={addStoreToList}>Add</button>
                    </div>
                    <div className="question-content-container-select four-content-container-select">
                        {
                            storeList.map((item, index) => {
                                return <div key={index} className="question-select">{item}</div>
                            })
                        }
                    </div>
                </div>
                <Link 
                    to="/question/5" 
                    onClick={() => {
                        increaseProgressBar()
                        storeList.map(each => setQuestion4(prev => [...prev, each]))
                    }} 
                    className="question-content-container-link four-content-container-link">Next</Link>
            </main>
        </div>
    )
}

export default QuestionFour;