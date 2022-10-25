import {useContext} from 'react';
import Navigation from '../components/Navigation';
import {SurveyContext} from "../context/SurveyContext";

const ThankYouPage = () => {
    const {username} = useContext(SurveyContext);

    const shareSurvey = () => {
        navigator.share({
            text: "Salesmall survey for college/university students",
            url: "https://github.com/"
        }).then(() => {
            console.log("Link shared")
        }).catch((error) => alert("Sorry, could not share"))
    }

    return (
        <div className="thank-you-page">
            <Navigation />
            <main className="thank-you-page-content">
                <h2 className="thank-you-page-content-title">Thank you <b className="bold-text">{username}</b></h2>
                <div className="thank-you-page-content-quotes">
                    <p>“When you change your thoughts, remember to also change your world.”</p>
                    <h4>Norman Vincent Peale</h4>
                </div>
                <div onClick={shareSurvey} className="thank-you-page-content-ebook" style={{cursor: "pointer"}}>
                    <h3>Please share survey</h3>
                </div>
            </main>
        </div>
    )
}

export default ThankYouPage;