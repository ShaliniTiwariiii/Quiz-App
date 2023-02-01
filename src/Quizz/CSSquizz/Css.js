import React, { useState } from 'react'

function Css() {
    const questions = [
        {
          questionText: "Which of the following defines a measurement in screen pixels?",
          answerOptions: [
            { answerText: "px", isCorrect:true},
            { answerText: "vh", isCorrect: false },
            { answerText: "vw", isCorrect: false },
            { answerText: "vmin", isCorrect: false },
          ],
        },
        {
          questionText: " Which of the following property is used to increase or decrease the size of a font",
          answerOptions: [
            { answerText: "font-size", isCorrect: true },
            { answerText: "font", isCorrect: false },
            { answerText: "font-variant", isCorrect: false },
            { answerText: "font-weight", isCorrect: false },
          ],
        },
        {
          questionText: "Which of the following value of cursor shows it as crosshair or plus sign?",
          answerOptions: [
            { answerText: " crosshair", isCorrect: true},
            { answerText: "default", isCorrect: false },
            { answerText: "pointer", isCorrect: false },
            { answerText: "move", isCorrect: false },
          ],
        },
        {
          questionText: "Which of the following selector matches all elements of a type?",
          answerOptions: [
            { answerText: "The type selector", isCorrect: true },
            { answerText: "The Universal selector", isCorrect: false },
            { answerText: "The Descendent selector", isCorrect: false },
            { answerText: "The class selector", isCorrect: false },
          ],
        },
      ];
    
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [showScore, setShowScore] = useState(false);
      const [score, setScore] = useState(0);
    
      const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
          setScore(score + 2 );
        }
    
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setShowScore(true);
        }
      };
      return (<center style={{marginTop:'10rem'}}>
        <div className="app">
          {showScore ? (
            <div className="score-section">
              You scored {score} out of {questions.length*2}
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                  <button
                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </div></center>
      );
}

export default Css
