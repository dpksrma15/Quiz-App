import {useState} from "react";
import "./App.css";
import Questions from "./Constants/Questions.json";
import Question from "./Component/Question";
import Result from "./Component/Result";
import TabViolationTracker from "./Component/TabVoilatonTracker";
import FullScreenBlocker from "./Component/FullScrenBlocker";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  // Keep all of the logic in App.jsx

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  return (
    <div className="App">
      <h1>World Quiz</h1>
      {/* Tabvoilation component*/}

      <TabViolationTracker/>

      {/* Questions Component */}
      {currentQuestion < Questions.length && (
        <Question
          question={Questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}

      {/* Result Component */}
      {currentQuestion === Questions.length && (
        <Result
          userAnswers={userAnswers}
          questions={Questions}
          resetQuiz={resetQuiz}
        />
      )}
     
    <FullScreenBlocker/>
    </div>
  );
}

export default App;