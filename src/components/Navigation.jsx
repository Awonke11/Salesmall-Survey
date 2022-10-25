import {useContext} from "react";
import {SurveyContext} from "../context/SurveyContext"
import logo from "../images/salesmall.png"

const Navigation = () => {
    const {username} = useContext(SurveyContext);
    return (
        <div className="navigation">
            <img src={logo} alt="business-logo" className="navigation-logo"/>
            <h2 className="navigation-title">Hi <b className="bold-text">{username}</b></h2>
        </div>
    )
}

export default Navigation;