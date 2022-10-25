import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ThankYouPage from "./pages/ThankYouPage";
import QuestionOne from "./questions/QuestionOne";
import QuestionTwo from "./questions/QuestionTwo";
import QuestionThree from "./questions/QuestionThree";
import QuestionFour from "./questions/QuestionFour";
import QuestionFive from "./questions/QuestionFive";
import QuestionSix from "./questions/QuestionSix";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />

          <Route path="/question/1" element={<QuestionOne />}/>
          <Route path="/question/2" element={<QuestionTwo />}/>
          <Route path="/question/3" element={<QuestionThree />}/>
          <Route path="/question/4" element={<QuestionFour />}/>
          <Route path="/question/5" element={<QuestionFive />}/>
          <Route path="/question/6" element={<QuestionSix />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
