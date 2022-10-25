import {useContext} from "react";
import {SurveyContext} from "../context/SurveyContext";

const ProgressBar = () => {
    const {progressBar} = useContext(SurveyContext);

    return (
        <div className="progress-bar">
            <div className="progress-bar-show" style={{width: `${progressBar}%`}}></div>
        </div>
    )
}

export default ProgressBar;