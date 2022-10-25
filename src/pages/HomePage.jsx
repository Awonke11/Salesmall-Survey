import {useContext} from "react";
import {SurveyContext} from '../context/SurveyContext';
import logo from "../images/salesmall.png";
import { FaGoogle } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const {signInUserWithGoogle, setProgressBar, setQuestion2, setQuestion3, setQuestion4} = useContext(SurveyContext);
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <img src={logo} alt="business-logo" className="home-page-logo" />
            <p className="home-page-description">A survey that researches how university/college students spend their money, conducted by a company that cares about their <b className="bold-text">montly spendings</b>. We expose college/university students to product sales that will make them <b className="bold-text">spend less</b> and enjoy more.</p>
            <div className="home-page-signup" onClick={() => {
                signInUserWithGoogle()
                setProgressBar(0)
                navigate("/question/1")
                setQuestion2([])
                setQuestion3([])
                setQuestion4([])
            }}>
                <FaGoogle />
                <h3>Continue with Google</h3>
            </div>
        </div>
    )
}

export default HomePage;